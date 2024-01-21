import React from "react";

const copyrightSymbol = "\u00A9";
const year = new Date().getFullYear();

export function Footer() {
  return (
    <h1>
      Copyright {copyrightSymbol} {year}
    </h1>
  );
}
