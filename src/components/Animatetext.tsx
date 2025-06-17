import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, type ReactElement } from "react";


type Props = {
    lines: (string |ReactElement)[]
    ref: React.RefObject<HTMLElement | null>
    className: string,
    once: boolean
}

const Animatetext = ({ ref, lines, className, once }: Props) => {
    const inView = useInView(ref, { once, margin: "-100px" }); // play again when in view
    const controls = useAnimation();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [inView, controls]);

    return (
        <motion.span
            ref={ref}
            className={className}
            initial="hidden"
            animate={controls}
            exit="hidden"
            variants={{
                hidden: {},
                visible: {
                    transition: {
                        staggerChildren: 0.4
                    }
                }
            }}
        >
            {lines.map((text, i) => (
                <motion.span
                    key={i}
                    variants={
                        {
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
                        }
                    }
                    className="block"
                >
                    {text}
                </motion.span>
            ))}
        </motion.span>
    );
};

export default Animatetext;
