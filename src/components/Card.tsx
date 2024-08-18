import React from "react";

interface CardProps {
  className?: string;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ className = "", children }) => {
  return (
    <div className={`card-wrapper ${className} `}>
      <div
        className={`card-content   items-center bg-[#000018] justify-center p-5  `}
      >
        {children}
      </div>
    </div>
  );
};

export default Card;
