import { useEffect } from "react";
import { motion } from "framer-motion";
import { Outlet, useLocation } from "react-router-dom";
import { useLoading } from "../context/LoadingContext"; // Import the context hook
import Loader from "./Loader";

const Layout = () => {
    const { isLoading, setIsLoading } = useLoading(); // Get isLoading and setIsLoading from context
    const location = useLocation();

    useEffect(() => {
        const handleRouteChange = async () => {
            setIsLoading(true); // Set isLoading in the context
            await new Promise((resolve) => setTimeout(resolve, 1500));
            setIsLoading(false); // Set isLoading in the context
        };

        handleRouteChange();
    }, [location, setIsLoading]); // Include setIsLoading in the dependency array

    const variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 0.5, delay: 0.3, ease: "easeInOut" }
        }
    };

    return (
        <>
            {isLoading && <Loader />}  {/* No need to pass isLoading prop */}
            <motion.div
                key={location.pathname}
                variants={variants}
                initial="hidden"
                animate={isLoading ? "visible" : "visible"}
            >
                <Outlet />
            </motion.div>
        </>
    );
};

export default Layout;