import React from "react";

interface FilterButtonProps {
  label: string;
  onClick?: () => void;
}

const FilterButton: React.FC<FilterButtonProps> = ({ label, onClick }) => {
  return (
    <button
      className="bg-[#D9D9D9] text-sm px-3 py-2 rounded-md flex items-center"
      onClick={onClick}
    >
      <span>{label}</span>
      <div>
        <div
          dangerouslySetInnerHTML={{
            __html:
              '<svg id="2010:2667" layer-name="Vector" width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="inline-block ml-[4px]"> <path d="M9 1H1L5 9L9 1Z" stroke="black"></path> </svg>',
          }}
        />
      </div>
    </button>
  );
};

export default FilterButton;
