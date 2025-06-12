import { useRef, useState } from "react";
import ham_icon from "../assets/ham.svg";
import useClickOutSide from "../hooks/useClickOutSide";
import useAutoNavigate from "../hooks/useAutoNavigate";

type Props = {
    homeSectionRef: React.RefObject<HTMLElement | null>
    ourStorySectionRef: React.RefObject<HTMLElement | null>
};

const Responsivenav = ({homeSectionRef, ourStorySectionRef}:Props) => {
    const [dropDown, setDropDown] = useState(false);
    const dropDownRef = useRef<HTMLElement>(null);
    useClickOutSide(dropDownRef, () => setDropDown(false));
    const autoNavigate = useAutoNavigate();

    return <>
        {/* Tab navs */}
        <span className="flex-1 hidden sm:flex">
            <ul className="flex-1 hidden sm:flex justify-evenly items-center font-main font-normal text-[18px] md:text-[24px] text-[#FFFFFF] text-center leading-[100%] tracking-normal whitespace-pre text-nowrap min-h-[53px] h-auto rounded bg-white/5 backdrop-blur-[12px] shadow">
                <li>
                    <button
                        onClick={() => autoNavigate(homeSectionRef.current)}
                        className="cursor-pointer"
                    >
                        Home
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => autoNavigate(ourStorySectionRef.current)}
                        className="cursor-pointer"
                    >
                        Our Story
                    </button>
                </li>
            </ul>
        </span>

        {/* Mobile nav */}
        <span
            ref={dropDownRef}
            className="relative flex-1 flex justify-end items-center sm:hidden">
            <ul className={`${dropDown ? "flex" : "hidden"} flex-col justify-evenly items-center 
        absolute top-2 right-8
        font-main font-normal italic leading-[100%] tracking-normal text-[16px] text-[#FFFFFF] text-center whitespace-pre text-nowrap
        min-h-[178px] h-auto min-w-[91px] w-auto bg-[#80808066] backdrop-blur-[40px]
        rounded shadow-2xl shadow-inherit`}>
                <li>
                    <button
                        onClick={() => autoNavigate(homeSectionRef.current)}
                        className="cursor-pointer"
                    >
                        Home
                    </button>
                </li>
                <li>
                    <button
                        className="cursor-pointer"
                        onClick={() => autoNavigate(ourStorySectionRef.current)}
                    >
                        Our Story
                    </button>
                </li>
            </ul>
            {/* Hamburger button */}
            <button
                className="cursor-pointer"
                onClick={() => setDropDown(!dropDown)}
            >
                <img
                    src={ham_icon}
                    alt="small screen ham"
                    className="h-auto w-auto object-cover object-center"
                />
            </button>
        </span>
    </>
}

export default Responsivenav;