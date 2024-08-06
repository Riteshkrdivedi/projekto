import React from "react";

interface CardProps {
  className?: string;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ className = "", children }) => {
  return (
    <div
      className={`block p-6 backdrop-blur-xl bg-gradient-to-r from-[#111827] to-[#2c3543] border border-gray-200 rounded-lg shadow-gray-50/40 hover:bg-gray-100 dark:bg-[#161b22] dark:border-gray-700 dark:hover:bg-gray-700 ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
