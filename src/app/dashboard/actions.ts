"use server";

import fs from "fs";
import path from "path";
import { revalidatePath } from "next/cache";
import { execSync } from "child_process";
import Anthropic from "@anthropic-ai/sdk";

export async function updateToolContent(updatedTool: any) {
  try {
    const filePath = path.join(process.cwd(), "src/config/toolContent.ts");
    const fileContent = fs.readFileSync(filePath, "utf-8");

    const toolId = updatedTool.id;
    
    const startMarker = "export const TOOL_CONTENT: Record<string, ToolContent> = {";
    const endMarker = "};";
    
    const startIndex = fileContent.indexOf(startMarker);
    const endIndex = fileContent.lastIndexOf(endMarker);
    
    if (startIndex === -1 || endIndex === -1) throw new Error("Could not find TOOL_CONTENT in file");

    const currentToolsPart = fileContent.slice(startIndex + startMarker.length, endIndex);
    
    const toolRegex = new RegExp(`"${toolId}": \\{[^}]+\\}(?=,|\\s*\\})`, "s");
    
    const newToolString = `"${toolId}": ${JSON.stringify(updatedTool, null, 2)}`;
    
    const updatedToolsPart = currentToolsPart.replace(toolRegex, newToolString);
    
    const newFileContent = fileContent.slice(0, startIndex + startMarker.length) + 
                           updatedToolsPart + 
                           fileContent.slice(endIndex);

    fs.writeFileSync(filePath, newFileContent, "utf-8");
    
    revalidatePath(`/${toolId}`);
    
    return { success: true };
  } catch (error) {
    console.error("Failed to update tool content:", error);
    return { success: false, error: String(error) };
  }
}

export async function updateAffiliateTopic(topic: string, updatedConfig: any) {
  try {
    const filePath = path.join(process.cwd(), "src/config/affiliateConfig.ts");
    const fileContent = fs.readFileSync(filePath, "utf-8");

    const startMarker = "topics: {";
    const startIndex = fileContent.indexOf(startMarker);
    const endIndex = fileContent.lastIndexOf("}");

    if (startIndex === -1) throw new Error("Could not find topics in affiliateConfig.ts");

    const topicsPart = fileContent.slice(startIndex, endIndex + 1);
    const topicRegex = new RegExp(`"${topic}": \\{[^}]+\\}(?=,|\\s*\\})`, "s");
    
    // We want to preserve the structure but update the values
    const newTopicString = `"${topic}": ${JSON.stringify(updatedConfig, null, 2)}`;
    const updatedTopicsPart = topicsPart.replace(topicRegex, newTopicString);

    const newFileContent = fileContent.slice(0, startIndex) + updatedTopicsPart + fileContent.slice(endIndex + 1);
    fs.writeFileSync(filePath, newFileContent, "utf-8");
    
    revalidatePath("/dashboard");
    return { success: true };
  } catch (error) {
    console.error("Failed to update affiliate config:", error);
    return { success: false, error: String(error) };
  }
}

export async function updatePartnerGrid(topic: string, updatedPartners: any[]) {
  try {
    const filePath = path.join(process.cwd(), "src/config/partnerConfig.ts");
    const fileContent = fs.readFileSync(filePath, "utf-8");

    const startMarker = "export const PARTNER_CONFIG: Record<string, Partner[]> = {";
    const startIndex = fileContent.indexOf(startMarker);
    const endIndex = fileContent.lastIndexOf("};");

    if (startIndex === -1) throw new Error("Could not find PARTNER_CONFIG in partnerConfig.ts");

    const configPart = fileContent.slice(startIndex, endIndex + 1);
    
    // Regex to find the topic array, even if it has quotes or not
    const topicRegex = new RegExp(`(?:"${topic}"|${topic}): \\[[^\\]]+\\](?=,|\\s*\\})`, "s");
    
    const newTopicString = `"${topic}": ${JSON.stringify(updatedPartners, null, 2)}`;
    const updatedConfigPart = configPart.replace(topicRegex, newTopicString);

    const newFileContent = fileContent.slice(0, startIndex) + updatedConfigPart + fileContent.slice(endIndex + 1);
    fs.writeFileSync(filePath, newFileContent, "utf-8");
    
    revalidatePath("/dashboard");
    return { success: true };
  } catch (error) {
    console.error("Failed to update partner grid:", error);
    return { success: false, error: String(error) };
  }
}

export async function rewriteTool(tool: any) {
  const anthropic = new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY,
  });

  try {
    const prompt = `
      You are a Senior SEO Expert and Premium Dutch Content Writer for "bereken.ing", a high-end financial tools website.
      
      TASK:
      Analyze and rewrite the following tool content to be more persuasive, SEO-optimized, and authoritative for 2026.
      
      CONSTRAINTS:
      - Use professional, premium Dutch (Je/Jij is ok, but keep it high-end).
      - Maintain roughly the SAME AMOUNT of text. Do NOT make the sections significantly longer.
      - Focus on high-intent keywords for the topic: "${tool.topic}".
      - Ensure the "metaTitle" and "metaDescription" are click-worthy.
      - The "contentTitle" and "contentText" should provide real value/insight.
      - SUGGESTED PRODUCT: Recommend a specific type of digital course, e-book, or software (Best Seller on PayPro or Plug&Pay) that fits this topic. 
        Examples: "Masterclass Hypotheekvrij Wonen" (PayPro) or "Huddle Community Software" (Plug&Pay) for business topics.
      
      CURRENT CONTENT:
      Intro: ${tool.intro}
      Title: ${tool.title}
      Subtitle: ${tool.subtitle}
      Meta Title: ${tool.metaTitle}
      Meta Description: ${tool.metaDescription}
      Bottom Title: ${tool.contentTitle}
      Bottom Text: ${tool.contentText}
      
      OUTPUT FORMAT:
      Return ONLY a JSON object with these keys: intro, title, subtitle, metaTitle, metaDescription, contentTitle, contentText, suggestedCourse.
      No other text.
    `;

    console.log("Using model: claude-sonnet-4-6");
    const response = await anthropic.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 1000,
      messages: [{ role: "user", content: prompt }],
    });

    const content = response.content[0].type === 'text' ? response.content[0].text : '';
    const cleanedJson = content.replace(/```json|```/g, "").trim();
    const updatedData = JSON.parse(cleanedJson);

    return { success: true, data: { ...tool, ...updatedData } };
  } catch (error: any) {
    console.error("AI Rewrite Error:", error);
    return { success: false, error: error.message };
  }
}

export async function rewriteAllTools(tools: any[]) {
  console.log(`Bulk Rewrite triggered for ${tools.length} tools`);
  const results = [];
  for (const tool of tools) {
    const res = await rewriteTool(tool);
    if (res.success) {
      await updateToolContent(res.data);
      results.push(res.data);
    } else {
      console.error(`Failed to rewrite tool ${tool.id}:`, res.error);
      throw new Error(`Fout bij tool ${tool.id}: ${res.error}`);
    }
  }
  return { success: true, count: results.length };
}

export async function checkAffiliateLinks() {
  // Use dynamic import to avoid issues during build
  const { AFFILIATE_CONFIG } = require("@/config/affiliateConfig");
  const links: [string, string][] = [];
  
  // Extract all preferred URLs from topics
  Object.entries(AFFILIATE_CONFIG.topics).forEach(([topic, config]: [string, any]) => {
    if (config.preferred?.url) {
      links.push([topic, config.preferred.url]);
    }
  });
  
  const status: Record<string, boolean> = {};

  for (const [key, url] of links) {
    try {
      // Use a timeout to avoid hanging
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000);
      
      const res = await fetch(url as string, { 
        method: "GET", // Some sites block HEAD
        signal: controller.signal,
        headers: { 'User-Agent': 'Mozilla/5.0 (compatible; BerekenBot/1.0)' }
      });
      
      clearTimeout(timeoutId);
      status[key] = res.status < 400;
    } catch (e) {
      status[key] = false;
    }
  }
  return { success: true, status };
}

export async function pushToGitHub() {
  try {
    const versionPath = path.join(process.cwd(), "src/config/version.ts");
    const fileContent = fs.readFileSync(versionPath, "utf-8");
    
    const match = fileContent.match(/SITE_VERSION = "v?\s?([\d.]+)"/);
    let newVersionNum = "3.1";
    
    if (match && match[1]) {
      const currentNum = parseFloat(match[1]);
      if (!isNaN(currentNum)) {
        newVersionNum = (currentNum + 0.1).toFixed(1);
      }
    }
    
    const newVersionString = `export const SITE_VERSION = "v ${newVersionNum}";\n`;
    fs.writeFileSync(versionPath, newVersionString, "utf-8");

    execSync("git add src/config/toolContent.ts src/config/version.ts");
    
    const message = `chore: update content and bump version to v ${newVersionNum} via dashboard`;
    execSync(`git commit -m "${message}"`);
    
    execSync("git push origin main");
    
    return { success: true };
  } catch (error: any) {
    console.error("Git Push Error:", error);
    if (error.stdout?.toString().includes("nothing to commit")) {
      return { success: true, message: "Nothing to commit" };
    }
    return { success: false, error: error.message };
  }
}
