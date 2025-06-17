import { motion } from "framer-motion";
import { useRef, useState } from "react";
import useAutoNavigate from "../hooks/useAutoNavigate";
import ham_icon from "../assets/ham.svg";

type Props = {   
    navLinks: {
        content: string;
        ref: React.RefObject<HTMLElement | null>;
    }[]
};

const Mobilenav = ({ navLinks }: Props) => {
    const dropDownRef = useRef<HTMLElement>(null);
    const [dropDown, setDropDown] = useState(false);
    const [active, setActive] = useState("Home");
    const autoNavigate = useAutoNavigate();

    return <span
        ref={dropDownRef}
        className="relative flex-1 flex justify-end items-center sm:hidden">
        <ul
            className={`${dropDown ? "flex" : "hidden"} flex-col justify-evenly items-center absolute top-2 right-8 font-main font-normal italic leading-[100%] tracking-normal text-[16px] text-[#FFFFFF] text-center whitespace-pre text-nowrap min-h-[178px] h-auto min-w-[91px] w-auto bg-[#80808066] backdrop-blur-[40px] rounded shadow-2xl shadow-inherit`}
        >
            {
                navLinks.map(nav =>
                    <motion.li
                        key={nav.content}
                        onClick={() => setActive(nav.content)}
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative cursor-pointer"
                    >
                        <button
                            onClick={() => autoNavigate(nav.ref.current)}
                            className={`${active === nav.content ? "text-pink-600" : ""} cursor-pointer`}
                        >
                            {nav.content}
                        </button>
                        {active === nav.content && (
                            <motion.span
                                layoutId="underline"
                                className="inline-block absolute left-0 right-0 h-[3px] bg-pink-400 rounded-full -bottom-1"
                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            />
                        )}
                    </motion.li>
                )
            }
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
    </span>;
};

export default Mobilenav;
