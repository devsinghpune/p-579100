import React from "react";

interface HeaderProps {
  userName: string;
  companyName: string;
  profileImage?: string;
  hasNotifications?: boolean;
  onNotificationClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({
  userName,
  companyName,
  profileImage = "https://cdn.builder.io/api/v1/image/assets/TEMP/77fa5b08d194f239ea566706827e847016c37b8f",
  hasNotifications = true,
  onNotificationClick,
}) => {
  return (
    <header className="border border bg-white flex items-center justify-between p-6">
      <div className="flex items-center gap-3">
        <img
          src={profileImage}
          alt="Profile"
          className="w-[40px] h-[40px] rounded-[20px]"
        />
        <div className="flex flex-col">
          <div className="text-slate-800 text-base font-bold leading-6">
            {companyName}
          </div>
          <div className="text-slate-500 text-sm leading-[21px]">
            Welcome back, {userName}
          </div>
        </div>
      </div>
      <div className="relative">
        <button
          className="w-10 h-10 bg-slate-50 flex items-center justify-center rounded-lg"
          onClick={onNotificationClick}
          aria-label="Notifications"
        >
          <div>
            <div
              dangerouslySetInnerHTML={{
                __html:
                  '<svg id="I2017:4081;2017:4075" layer-name="Frame" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[24px] h-[24px]"> <g clip-path="url(#clip0_2061_1116)"> <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="black" stroke-width="2"></path> <path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="black" stroke-width="2"></path> </g> <defs> <clipPath id="clip0_2061_1116"> <rect width="24" height="24" fill="white"></rect> </clipPath> </defs> </svg>',
              }}
            />
          </div>
        </button>
        {hasNotifications && (
          <div className="w-2 h-2 bg-[#1FAF38] absolute rounded-[33554400px] right-1 top-1" />
        )}
      </div>
    </header>
  );
};

export default Header;
