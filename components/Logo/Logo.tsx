"use client";
import React from "react";
import { LogoAvatar } from "@/components/LogoAvatar";

interface LogoProps {
  title?: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

export function Logo({
  title = "SOLUTIONS",
  size = "lg",
  className = "",
}: LogoProps) {
  return (
    <div
      className={`font-secondary flex items-center font-bold text-navy-900 ${className}`}
    >
      <LogoAvatar size={size} className="mr-3" />
      {title}
    </div>
  );
}

export default Logo;
