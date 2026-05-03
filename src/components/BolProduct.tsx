"use client";

import React from "react";

interface BolProductProps {
  id: string;
  productId: string;
  siteId: string;
}

export default function BolProduct({ id, productId, siteId }: BolProductProps) {
  // Create the raw HTML for the iframe content
  const iframeContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { margin: 0; padding: 0; display: flex; justify: center; overflow: hidden; }
          #${id} { width: 100%; display: flex; justify-content: center; }
        </style>
      </head>
      <body>
        <div id="${id}"></div>
        <script type="text/javascript">
          var bol_sitebar_v2={
            "id": "${id}",
            "baseUrl": "partner.bol.com",
            "productId": "${productId}",
            "familyId": "",
            "siteId": "${siteId}",
            "target": true,
            "rating": true,
            "price": true,
            "deliveryDescription": true,
            "button": true,
            "linkName": "Magic 8-Ball Product",
            "linkSubId": ""
          };
        </script>
        <script type="text/javascript" src="https://partner.bol.com/promotion/static/js/partnerProductlinkV2.js" id="${id}"></script>
      </body>
    </html>
  `;

  return (
    <div className="bol-product-wrapper" style={{ 
      margin: "1.5rem 0", 
      width: "100%", 
      display: "flex", 
      justifyContent: "center" 
    }}>
      <iframe
        title={`bol-product-${id}`}
        srcDoc={iframeContent}
        style={{
          width: "100%",
          height: "250px", // Standard height for the bol sitebar
          border: "none",
          overflow: "hidden"
        }}
        scrolling="no"
      />
    </div>
  );
}

