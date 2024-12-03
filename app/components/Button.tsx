// Button.tsx
import React from "react";

type ButtonProps = {
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  text: string;
  onClick: () => void;
};

const Button = ({
  size = "md",
  isLoading = false,
  text,
  onClick,
}: ButtonProps) => {
  const sizeClasses = {
    sm: "text-sm px-3 py-1.5",
    md: "text-base px-4 py-2",
    lg: "text-lg px-5 py-3",
  };

  return (
    <button
      type="button"
      className={`border focus:outline-none focus:ring-4 font-medium text-sm rounded-lg bg-primary text-primary-foreground hover:bg-primary-hover hover:border-primary-active focus:ring-primary-active ${sizeClasses[size]}`}
      onClick={onClick}
      disabled={isLoading}
      aria-busy={isLoading}
    >
      {isLoading ? (
        <span className="flex items-center">
          <svg
            className="w-4 h-4 mr-2 animate-spin text-primary-foreground"
            viewBox="0 0 50 50"
            fill="none"
          >
            <circle
              cx="25"
              cy="25"
              r="20"
              stroke="currentColor"
              strokeWidth="5"
              fill="none"
            />
          </svg>
          Loading...
        </span>
      ) : (
        text
      )}
    </button>
  );
};

export default Button;
