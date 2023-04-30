import { Dispatch, SetStateAction, useState } from "react";

type DoubleSwitchButtonProps = {
  onLeftClick: () => void;
  onRightClick: () => void;
  isLeftActive: boolean;
  setIsLeftActive: Dispatch<SetStateAction<boolean>>;
};

const DoubleSwitchButton: React.FC<DoubleSwitchButtonProps> = ({
  onLeftClick,
  onRightClick,
  isLeftActive,
  setIsLeftActive,
}) => {
  const handleLeftClick = () => {
    if (!isLeftActive) {
      setIsLeftActive(true);
      onLeftClick();
    }
  };

  const handleRightClick = () => {
    if (isLeftActive) {
      setIsLeftActive(false);
      onRightClick();
    }
  };

  return (
    <div className="flex items-center justify-between w-[135px] ml-[10px] h-[30px] rounded-[30px] p-[0_15px] bg-[#ecf4ff] relative">
      <div
        className={`relative left-0 cursou-pointer z-[1] ${
          isLeftActive
            ? "bg-[#3151b7] text-white absolute flex items-center justify-center left-[-15px] w-[83px] h-[40px] top-[-5] rounded-[40px] shadow-[0_5px_24px_rgba(31,37,59,.15)]"
            : "relative text-[#817f96]"
        }`}
        onClick={handleLeftClick}
      >
        Rent
      </div>
      <div
        className={`relative right-0 cursou-pointer z-[1] ${
          !isLeftActive
            ? "bg-[#3151b7] text-white absolute flex items-center justify-center left-[calc(100%-90px)] w-[78px] h-[40px] top-[-5] rounded-[40px] shadow-[0_5px_24px_rgba(31,37,59,.15)]"
            : "relative text-[#817f96]"
        }`}
        onClick={handleRightClick}
      >
        Buy
      </div>
    </div>
  );
};

export default DoubleSwitchButton;
