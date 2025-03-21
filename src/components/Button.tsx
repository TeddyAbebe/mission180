import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = "",
  variant = "primary",
}) => {
  const baseStyles =
    "px-6 py-3 rounded-full font-semibold transition-all duration-300";
  const variantStyles =
    variant === "primary"
      ? "bg-rose-500 text-white hover:bg-rose-600"
      : "bg-transparent border border-rose-500 text-rose-500 hover:bg-rose-500 hover:text-white";

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
