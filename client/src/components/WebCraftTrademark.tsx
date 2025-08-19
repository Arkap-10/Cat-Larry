import { useState } from "react";
import { Code } from "lucide-react";
import { cn } from "@/lib/utils";

export default function WebCraftTrademark() {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    window.open("https://web-craft-websites.replit.app", "_blank");
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div
        className={cn(
          "flex items-center gap-2 px-4 py-2 rounded-full cursor-pointer transition-all duration-300 ease-in-out",
          "bg-blue-500 text-white shadow-lg",
          "transform hover:scale-105",
          isHovered ? "opacity-100" : "opacity-60"
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            handleClick();
          }
        }}
      >
        <Code className="w-4 h-4" />
        <span className="text-sm font-medium whitespace-nowrap">
          Crafted by Web Craft
        </span>
      </div>
      
      {isHovered && (
        <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-900 text-white text-xs rounded shadow-lg whitespace-nowrap">
          Get your own custom website now!
        </div>
      )}
    </div>
  );
}