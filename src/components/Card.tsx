// src/components/Card.tsx
import React from "react";

interface CardProps {
  className?: string;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ className = "", children }) => {
  return (
    <div
      className={`block max-w-sm p-6 bg-slate-800 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-{#161b22} dark:border-gray-700 dark:hover:bg-gray-700 ${className}`}
    >
      {children}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-blue-500 opacity-0 group-hover:opacity-30 transition-opacity"></div> */}
    </div>
  );
};

export default Card;
