import type { Metadata } from "next";
import MortgageCalculator from "@/components/MortgageCalculator";
import ToolLayout from "@/components/ToolLayout";
import JsonLd from "@/components/JsonLd";
import { TOOL_CONTENT } from "@/config/toolContent";

const content = TOOL_CONTENT["hypotheek"];

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: content.metaTitle,
    description: content.metaDescription,
  };
}

export default function MortgagePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FinancialCalculator",
    "name": content.title,
    "description": content.metaDescription,
    "url": `https://www.bereken.ing/${content.id}`
  };

  return (
    <ToolLayout 
      intro={content.intro}
      title={content.title}
      subtitle={content.subtitle}
      topic={content.topic}
    >
      <JsonLd data={schema} />

      {/* The main calculator box is inside ToolLayout's center column */}
      <MortgageCalculator />

      <div style={{ marginTop: "4rem", maxWidth: "800px" }}>
        <h2 style={{ fontSize: "1.8rem" }}>{content.contentTitle}</h2>
        <p>{content.contentText}</p>
      </div>

    </ToolLayout>
  );
}
