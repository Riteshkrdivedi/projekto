import React from "react";

const Button = ({
  children,
  className,
}: //   onClick,
{
  children: React.ReactNode;
  className: string;
  //   onClick: () => void;
}) => {
  return (
    <button className={`px-4 py-2 rounded ${className}`}>{children}</button>
  );
};

export default Button;
