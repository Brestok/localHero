import React from "react";

export function Card({ children, className = "" }) {
  return (
    <div className={`shadow-md p-4 rounded-lg ${className}`}>{children}</div>
  );
}

export function CardContent({ children, className = "" }) {
  return <div className={`p-2 ${className}`}>{children}</div>;
}
