import React from "react";
import ProgressBar from "../ui/ProgressBar";

interface GroupCardProps {
  title: string;
  duration: string;
  memberCount: number;
  totalMembers: number;
  monthlyAmount: string;
  nextPayout: string;
  onViewDetails?: () => void;
}

const GroupCard: React.FC<GroupCardProps> = ({
  title,
  duration,
  memberCount,
  totalMembers,
  monthlyAmount,
  nextPayout,
  onViewDetails,
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
        </div>
        <button
          className="bg-indigo-600 text-white text-xs leading-[18px] px-3 py-1.5 rounded-md"
          onClick={onViewDetails}
        >
          View Details
        </button>
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
          <div className="text-slate-500 text-sm leading-[21px]">
            Next Payout: {nextPayout}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupCard;
