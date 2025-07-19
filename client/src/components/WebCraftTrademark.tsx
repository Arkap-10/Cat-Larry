import { useState } from 'react';
import { Code2 } from 'lucide-react';

const WebCraftTrademark = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    window.open('https://web-craft-websites.replit.app', '_blank');
  };

  return (
    <div
      className="fixed bottom-4 right-4 z-50 cursor-pointer transition-all duration-300 ease-in-out"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <div
        className={`
          flex items-center gap-2 px-3 py-2 rounded-full shadow-lg
          transition-all duration-300 ease-in-out
          ${isHovered 
            ? 'bg-blue-600 text-white scale-110 opacity-100' 
            : 'bg-blue-500/80 text-white opacity-70 hover:opacity-100'
          }
        `}
      >
        <Code2 size={16} />
        <span className="text-sm font-medium whitespace-nowrap">
          Crafted by Web Craft
        </span>
      </div>
      
      {isHovered && (
        <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-800 text-white text-xs rounded-md whitespace-nowrap animate-in slide-in-from-bottom-2 duration-200">
          Get your own custom website now!
        </div>
      )}
    </div>
  );
};

export default WebCraftTrademark;