import { useRef, useState, type ReactElement } from "react";
import useClickOutSide from "../hooks/useClickOutSide";

type Props = {
    buttonField: string
    message: string | ReactElement
};

const Buttonwithdropdown = ({ buttonField, message }: Props) => {
    const [dropDown, setDropDown] = useState(false);
    const dropDownRef = useRef<HTMLElement>(null);
    useClickOutSide(dropDownRef, () => setDropDown(false));

    return <span
        ref={dropDownRef}
        className="block relative">
        <span            
            className={`${dropDown ? "block" : "hidden"} fixed top-2 left-1/2 -translate-x-1/2 z-30`}>
            <span className="block min-h-[70px] sm:min-h-[136px] h-auto min-w-[204px] sm:min-w-[404px] w-auto bg-[#80808066] backdrop-blur-[40px] rounded-b-[20px] shadow-2xl shadow-inherit p-2 sm:p-4">
                <p className="font-main text-[12px] sm:text-[20px] text-[#FFFFFF] text-center font-normal leading-normal tracking-normal whitespace-normal text-wrap ">
                    {message}
                </p>
            </span>
        </span>
        <button
            onClick={() => setDropDown(!dropDown)}
            className="font-main text-[9px] sm:text-[16px] text-[#000000] text-center font-normal leading-[100%] tracking-normal whitespace-pre text-nowrap h-[30px] w-[50px] sm:h-[41px] sm:w-[97px] bg-[#FFFFFF] rounded-[5px] sm:rounded-[10px] shadow cursor-pointer">
            {buttonField}
        </button>
    </span>
}

export default Buttonwithdropdown;