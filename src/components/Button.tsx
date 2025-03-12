import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "black" | "transparent";
  size?: "sm" | "md" | "lg" | "xl";
  fullWidth?: boolean;
  rounded?: "sm" | "md" | "full";
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  fullWidth = false,
  className = "",
  rounded,
  children,
  ...props
}) => {
  const baseStyles = `rounded-${rounded} py-2 px-4 text-sm transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed`;

  const variantStyles = {
    primary: "bg-brandPink text-white hover:opacity-80",
    outline:
      "ring-1 ring-brandPink text-brandPink hover:bg-brandPink hover:text-white",
    black: "bg-black text-white hover:opacity-80",
    transparent: "text:black ring-1 ring-gray-300 hover:opacity-80",
  };

  const sizeStyles = {
    sm: "py-3 px-4 text-xs",
    md: "py-3 px-5 text-sm",
    lg: "py-1 px-7 text-base",
    xl: "py-2 px-20 text-base",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${
        fullWidth ? "w-full" : "w-max"
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
