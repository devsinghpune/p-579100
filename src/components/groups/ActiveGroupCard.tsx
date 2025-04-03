import React from "react";
import ProgressBar from "../ui/ProgressBar";

interface ActiveGroupCardProps {
  title: string;
  duration: string;
  location: string;
  memberCount: number;
  totalMembers: number;
  monthlyAmount: string;
  isOpen?: boolean;
  onJoinNow?: () => void;
}

const ActiveGroupCard: React.FC<ActiveGroupCardProps> = ({
  title,
  duration,
  location,
  memberCount,
  totalMembers,
  monthlyAmount,
  isOpen = true,
  onJoinNow,
}) => {
  const progressPercentage = (memberCount / totalMembers) * 100;

  return (
    <div className="border border bg-white p-4 rounded-xl">
      <div className="flex justify-between items-start mb-2">
        <div className="flex flex-col gap-1">
          <div className="text-slate-800 text-base font-bold leading-6">
            {title}
          </div>
          <div className="text-slate-500 text-sm leading-[21px]">
            Duration: {duration}
          </div>
          <div className="text-slate-500 text-sm leading-[21px]">
            Location: {location}
          </div>
        </div>
        {isOpen && (
          <div className="text-[#1FAF38] text-xs leading-[18px] bg-[rgba(31,175,56,0.10)] px-2.5 py-1 rounded-2xl">
            Open
          </div>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <div className="text-slate-500 text-sm leading-[21px]">Members</div>
          <div className="text-slate-800 text-sm font-bold leading-[21px]">
            {memberCount}/{totalMembers}
          </div>
        </div>
        <ProgressBar progress={progressPercentage} />
        <div className="flex justify-between items-center">
          <div className="text-slate-800 text-base font-bold leading-6">
            {monthlyAmount}/month
          </div>
          <button
            className="bg-indigo-600 text-white text-sm leading-[21px] px-4 py-2 rounded-lg"
            onClick={onJoinNow}
          >
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActiveGroupCard;
