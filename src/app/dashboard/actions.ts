"use server";

import fs from "fs";
import path from "path";
import { revalidatePath } from "next/cache";
import { execSync } from "child_process";

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
    
    // Improved regex to handle keys with slashes and robust matching
    const toolRegex = new RegExp(`"${toolId}": \\{[^}]+\\}(?=,|\\s*\\})`, "s");
    
    const newToolString = `"${toolId}": ${JSON.stringify(updatedTool, null, 2)}`;
    
    const updatedToolsPart = currentToolsPart.replace(toolRegex, newToolString);
    
    const newFileContent = fileContent.slice(0, startIndex + startMarker.length) + 
                           updatedToolsPart + 
                           fileContent.slice(endIndex);

    fs.writeFileSync(filePath, newFileContent, "utf-8");
    
    revalidatePath("/dashboard");
    revalidatePath(`/${toolId}`);
    
    return { success: true };
  } catch (error) {
    console.error("Failed to update tool content:", error);
    return { success: false, error: String(error) };
  }
}

export async function pushToGitHub() {
  try {
    // 0. Update the version file
    const versionPath = path.join(process.cwd(), "src/config/version.ts");
    const fileContent = fs.readFileSync(versionPath, "utf-8");
    
    // Extract version number (e.g., from "3.1.20260429" or "3.2")
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

    // 1. Add the config and version files
    execSync("git add src/config/toolContent.ts src/config/version.ts");
    
    // 2. Commit with a timestamp
    const message = `chore: update content and bump version to v ${newVersionNum}`;
    execSync(`git commit -m "${message}"`);
    
    // 3. Push to current branch
    execSync("git push origin feature/audit");
    
    return { success: true };
  } catch (error: any) {
    console.error("Git Push Error:", error);
    if (error.stdout?.toString().includes("nothing to commit")) {
      return { success: true, message: "Nothing to commit" };
    }
    return { success: false, error: error.message };
  }
}
