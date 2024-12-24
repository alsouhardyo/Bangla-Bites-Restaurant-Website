import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLoading } from "../context/LoadingContext.jsx";

const HeroBanner = () => {
    const { isLoading } = useLoading();

    // Variants for animations
    const textVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -50 }
    };

    const buttonVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: 50 }
    };

    const imageVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 100 }
    };

    return (
        <section className="container-padding">
            <div className="mx-auto space-y-8">
                {/* Banner Text */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
                    <motion.div
                        initial="hidden"
                        animate={isLoading ? "hidden" : "visible"}
                        exit="exit"
                        variants={textVariants}
                        transition={{
                            delay: 0.5,
                            duration: 0.6,
                            ease: "easeInOut"
                        }}
                        className="space-y-4"
                    >
                        <p className="text-sm lg:text-lg font-medium text-accent uppercase tracking-wider">
                            Flavors That Inspire Memories
                        </p>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 font-recoleta leading-tight">
                            Experience the Authentic Taste of Bangladesh
                        </h1>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        animate={isLoading ? "hidden" : "visible"}
                        exit="exit"
                        variants={buttonVariants}
                        transition={{
                            delay: 0.5,
                            duration: 0.6,
                            ease: "easeInOut"
                        }}
                        className="space-y-8"
                    >
                        <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                            Immerse yourself in a culinary journey through the
                            rich and diverse flavors of Bangladesh. Our
                            traditional recipes are crafted with authentic
                            spices and modern techniques to bring you an
                            unforgettable dining experience.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link
                                to="/reservation"
                                className="px-6 py-3 bg-accent text-white font-medium rounded-lg shadow-lg hover:bg-accent/90 transition duration-300"
                                aria-label="Explore Menu"
                            >
                                Reserve
                            </Link>
                            <Link
                                to="/about"
                                className="px-6 py-3 border-2 border-accent text-accent font-medium rounded-lg hover:bg-accent/20 transition duration-300"
                                aria-label="Make Reservation"
                            >
                                Learn More
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* Image Section */}
                <motion.div
                    initial="hidden"
                    animate={isLoading ? "hidden" : "visible"}
                    exit="exit"
                    variants={imageVariants}
                    transition={{
                        delay: 0.8,
                        duration: 0.6,
                        ease: "easeInOut"
                    }}
                    className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-lg"
                >
                    <img
                        src="/images/hero-banner.webp"
                        alt="Bangladeshi Cuisine"
                        className="w-full h-full object-cover"
                        loading="lazy"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default HeroBanner;
