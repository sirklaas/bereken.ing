"use client";

import React, { useEffect } from "react";

interface BolProductProps {
  id: string;
  productId: string;
  siteId: string;
}

export default function BolProduct({ id, productId, siteId }: BolProductProps) {
  useEffect(() => {
    // Clean up any existing script with this ID to prevent duplicates
    const existingScript = document.getElementById(id);
    if (existingScript) {
      existingScript.remove();
    }

    // Define the global config object bol.com needs
    (window as any).bol_sitebar_v2 = {
      "id": id,
      "baseUrl": "partner.bol.com",
      "productId": productId,
      "familyId": "",
      "siteId": siteId,
      "target": true,
      "rating": true,
      "price": true,
      "deliveryDescription": true,
      "button": true,
      "linkName": "Magic 8-Ball Product Link",
      "linkSubId": ""
    };

    // Load the external script
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://partner.bol.com/promotion/static/js/partnerProductlinkV2.js";
    script.id = id;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [id, productId, siteId]);

  return (
    <div className="bol-product-container" style={{ 
      margin: "2rem 0", 
      display: "flex", 
      justifyContent: "center",
      minHeight: "200px" 
    }}>
      <div id={id}></div>
    </div>
  );
}
