import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Cursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePosition({ x: event.clientX, y: event.clientY });
            setIsVisible(true);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    const outerVariants = {
        default: {
            x: mousePosition.x + 16, // Center the outer div based on its size
            y: mousePosition.y + 16
        }
    };

    return (
        isVisible && (
            <div className="hidden lg:block">
                <motion.div
                    className="border bg-gray-200/50 backdrop-blur-lg rounded-full w-8 h-8 fixed top-0 left-0 z-[5000] drop-shadow-2xl flex-center-x"
                    variants={outerVariants}
                    animate="default"
                >
                    <motion.div className="w-[25%] h-[25%] rounded-full bg-accent" />
                </motion.div>
            </div>
        )
    );
};

export default Cursor;
