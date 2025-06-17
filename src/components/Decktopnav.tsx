import { motion } from "framer-motion";
import { useState } from "react";
import useAutoNavigate from "../hooks/useAutoNavigate";

type Props = {
    navLinks: {
        content: string;
        ref: React.RefObject<HTMLElement | null>;
    }[]
};

const Decktopnav = ({ navLinks }: Props) => {
    const [active, setActive] = useState("Home");
    const autoNavigate = useAutoNavigate();
    
    return <span className="flex-1 hidden sm:flex">
        <ul className="flex-1 hidden sm:flex justify-evenly items-center font-main font-normal text-[18px] md:text-[24px] text-[#FFFFFF] text-center leading-[100%] tracking-normal whitespace-pre text-nowrap min-h-[53px] h-auto rounded bg-white/5 backdrop-blur-[12px] shadow">
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
    </span>;
};

export default Decktopnav