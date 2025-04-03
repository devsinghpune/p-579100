import React from "react";

interface ProgressBarProps {
  progress: number; // 0 to 100
  className?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  className = "",
}) => {
  // Ensure progress is between 0 and 100
  const safeProgress = Math.min(Math.max(progress, 0), 100);

  return (
    <div
      className={`relative h-1 bg-gray-200 rounded-[33554400px] ${className}`}
    >
      <div
        className="absolute h-full bg-indigo-600 rounded-[33554400px] left-0 top-0"
        style={{ width: `${safeProgress}%` }}
      />
    </div>
  );
};

export default ProgressBar;
