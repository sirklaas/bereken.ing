import type { Metadata } from "next";
import HealthCalculator from "@/components/HealthCalculator";
import ToolLayout from "@/components/ToolLayout";
import JsonLd from "@/components/JsonLd";
import { TOOL_CONTENT } from "@/config/toolContent";

const content = TOOL_CONTENT["gezondheid"];

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: content.metaTitle,
    description: content.metaDescription,
  };
}

export default function HealthPage() {
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

      <HealthCalculator />
    </ToolLayout>
  );
}
