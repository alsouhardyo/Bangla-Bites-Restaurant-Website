import { motion } from "framer-motion";
import { useLoading } from "../context/LoadingContext.jsx";

const ReservationBanner = () => {
    const { isLoading } = useLoading();
    return (
        <motion.section
            className="px-4 md:px-8 lg:px-16 py-12 md:py-14 lg:py-16 space-y-10 md:space-y-16 lg:mt-5"
            initial={{ opacity: 0, y: 50 }}
            animate={isLoading ? { opacity: 0, y: 50 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isLoading ? { opacity: 0, scale: 0.9 } : { opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
            >
                <h2 className="heading text-center mx-auto md:w-[50vw]">
                    "Reserve Your Table Today – Experience Unforgettable Dining
                    Moments!"
                </h2>
            </motion.div>
            <motion.div
                className="grid md:grid-cols-3 justify-center items-start gap-4 border-t border-b border-t-gray-300 border-b-gray-300 py-6 md:py-10 md:w-[85vw] lg:w-[75vw] xl:w-[55vw] md:gap-0 mx-auto"
                initial={{ opacity: 0, y: 50 }}
                animate={isLoading ? { opacity: 0, y: 50 } : { opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut", delay: 0.4 }}
            >
                {/* Address Section */}
                <motion.div
                    className="space-y-4"
                    initial={{ opacity: 0, x: -50 }}
                    animate={isLoading ? { opacity: 0, x: -50 } : { opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut", delay: 0.6 }}
                >
                    <h2 className="font-recoleta font-semibold text-xl text-center">
                        Address
                    </h2>
                    <p className="text-center text-gray-600">
                        Bangla Bites, 1 Nawabbari Rd, Bogura
                    </p>
                    <p className="text-center text-gray-600">
                        Rajshahi Division – Bangladesh
                    </p>
                </motion.div>

                {/* Divider */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isLoading ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeInOut", delay: 0.8 }}
                >
                    <hr className="bg-gray-300 w-[1px] h-[40px] mx-auto md:h-[140px]" />
                </motion.div>

                {/* Hours Section */}
                <motion.div
                    className="space-y-4"
                    initial={{ opacity: 0, x: 50 }}
                    animate={isLoading ? { opacity: 0, x: 50 } : { opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut", delay: 1 }}
                >
                    <h2 className="font-recoleta font-semibold text-xl text-center">
                        Hours
                    </h2>
                    <div className="space-y-1">
                        <p className="text-center text-gray-600">
                            Sun - Wed (02:00 - 12:00 PM)
                        </p>
                        <p className="text-center text-gray-600">
                            Closed on Thursday
                        </p>
                    </div>
                </motion.div>
            </motion.div>
        </motion.section>
    );
};

export default ReservationBanner;
