import React from "react";

type NavItem = {
  name: string;
  icon: string;
  isActive?: boolean;
  onClick?: () => void;
};

interface BottomNavigationProps {
  items: NavItem[];
}

const BottomNavigation: React.FC<BottomNavigationProps> = ({ items }) => {
  return (
    <nav className="border border bg-white p-4">
      <div className="flex justify-around items-center">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-1 cursor-pointer"
            onClick={item.onClick}
          >
            <div>
              <div
                dangerouslySetInnerHTML={{
                  __html: item.icon,
                }}
              />
            </div>
            <span
              className={`text-xs leading-[18px] ${item.isActive ? "text-indigo-600" : "text-slate-500"}`}
            >
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default BottomNavigation;
