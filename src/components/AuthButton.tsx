import React from "react";

const action = () => {
  alert("Button Clicked");
};

const Button = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => {
  return (
    <button
      onClick={action}
      className={`px-4 border py-2 rounded ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
