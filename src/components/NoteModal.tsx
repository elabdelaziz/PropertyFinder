import { Dispatch, SetStateAction } from "react";

type Props = {
  setOpenNote: Dispatch<SetStateAction<boolean>>;
};
export default function ({ setOpenNote }: Props) {
  return (
    <>
      <div
        onClick={() => setOpenNote(false)}
        className="absolute z-[3] overlay w-[100vw] h-[100vh] bg-black bg-opacity-[0.5]"
      ></div>
      <div className="absolute flex items-center justify-center w-[100vw] h-[100vh]">
        <div className="rounded-[10px] text-center z-[4] flex flex-col p-[2rem] bg-white w-[100%] max-w-[30rem] max-h-[60rem] h-[fit]">
          <div className="justify-center flex items-center m-0">
            <strong className="mr-[5px]">Note:</strong>
            <span className="font-[500]">This App Is Still In Development</span>
          </div>
          Enjoy
          {" :)"}
          <span className="text-[200] flex justify-center text-[14px] block">
            {"(Press Anywhere To Exit)"}
          </span>
        </div>
      </div>
    </>
  );
}
