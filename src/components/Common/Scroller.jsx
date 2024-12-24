import { FaChevronUp } from "react-icons/fa";
import { useState, useEffect } from "react";

const Scroller = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 200) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });

    return (
        <div
            className={
                isScrolled
                    ? `bg-yellow-500 hover:bg-yellow-500/75 shadow-xl text-white w-14 h-14 rounded-full fixed top-[450px] right-10 z-[20000] flex items-center justify-center cursor-pointer`
                    : "hidden"
            }
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
            <FaChevronUp size={20} className="font-bold" />
        </div>
    );
};

export default Scroller;
