import React from "react";
import Sidebar from "@/components/Sidebar";

interface ToolLayoutProps {
  children: React.ReactNode;
  category?: string;
}

export default function ToolLayout({ children, category }: ToolLayoutProps) {
  return (
    <div className="container" style={{ paddingTop: "2rem", paddingBottom: "6rem" }}>
      <div className="responsive-grid">
        <Sidebar />
        <main>
          {children}
        </main>
      </div>
    </div>
  );
}
