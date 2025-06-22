import { useEffect, useState, type ReactElement } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
    buttonField: string
    message: string | ReactElement
};

const Giftbutton = ({ buttonField, message }: Props) => {
    const [dropDown, setDropDown] = useState(false);

    useEffect(() => {
        if (dropDown) {
            const clear = setTimeout(() => {
                setDropDown(false);
                clearTimeout(clear)
            }, 5000);

            return () => clearTimeout(clear);
        }
    }, [dropDown]);

    return (
        <span className="block relative">
            <AnimatePresence>
                {dropDown && (
                    <motion.span
                        key="gift-button"
                        variants={{
                            hidden: { opacity: 0, y: -30 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: {
                                    type: "spring",
                                    stiffness: 120,
                                    damping: 20,
                                    when: "beforeChildren",
                                    staggerChildren: 0.05,
                                },
                            },
                            exit: {
                                opacity: 0,
                                y: -30,
                                transition: {
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 25,
                                    when: "afterChildren",
                                    staggerChildren: 0.03,
                                    staggerDirection: -1,
                                },
                            },
                        }}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="block fixed top-1 left-1/2 origin-left -translate-x-1/2 z-30"
                    >
                        <motion.span
                            variants={{
                                hidden: { opacity: 0, y: -10 },
                                visible: { opacity: 1, y: 0 },
                                exit: { opacity: 0, y: -10 },
                            }}
                            className="block min-h-[70px] sm:min-h-[136px] h-auto min-w-[204px] sm:min-w-[404px] w-auto bg-[#80808066] backdrop-blur-[40px] rounded-b-[20px] p-2 sm:p-4">
                            <p
                                className="font-main text-[12px] sm:text-[20px] text-[#FFFFFF] text-center font-normal leading-normal tracking-normal whitespace-normal text-wrap "
                            >
                                {message}
                            </p>
                        </motion.span>
                    </motion.span>
                )}
            </AnimatePresence>
            <motion.button
                onClick={() => setDropDown(true)}
                initial={{ opacity: 0, scale: 0.8, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 12px rgba(236, 72, 153, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
                className="font-main text-[9px] sm:text-[16px] text-[#000000] text-center font-normal leading-[100%] tracking-normal whitespace-pre text-nowrap h-[30px] w-[50px] sm:w-[86px] sm:h-[41px] md:w-[97px] bg-[#FFFFFF] hover:border hover:border-pink-600  rounded-[5px] sm:rounded-[10px] shadow-md shadow-[rgba(236, 72, 153, 0.5)] cursor-pointer">
                <>
                    {!dropDown ?
                        <motion.span
                            animate={{
                                scale: [1, 1.2, 1],
                                rotate: [0, 10, -10, 0],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                repeatType: "loop",
                                ease: "easeInOut",
                            }}
                            className="inline-block"
                        >
                            🎁
                        </motion.span> :
                        <span className="inline-block">🎁</span>
                    }
                </>
                {buttonField}
            </motion.button>
        </span>
    );
};

export default Giftbutton;

