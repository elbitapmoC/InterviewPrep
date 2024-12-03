// Loading.tsx
import React from "react";

const Loading = () => {
  return (
    <div
      className="flex items-center justify-center h-full"
      aria-live="polite"
      aria-busy="true"
    >
      <svg
        aria-hidden="true"
        className="w-8 h-8 animate-spin text-gray-600 fill-primary"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="currentColor"
          strokeWidth="10"
          fill="none"
        />
        <path d="M90 50A40 40 0 1 1 10 50" fill="currentFill" />
      </svg>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Loading;
