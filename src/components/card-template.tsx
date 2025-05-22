import React from "react";

type CardTemplateProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export default function CardTemplate({ children, className = "", onClick }: CardTemplateProps) {
  return (
    <div
      onClick={onClick}
      className={`
        bg-white border border-gray-200 rounded-2xl shadow-sm 
        hover:shadow-lg transition-shadow duration-300 ease-in-out 
        p-6 ${className}
      `}
    >
      {children}
    </div>
  );
}
