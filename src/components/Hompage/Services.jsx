import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BiDish } from "react-icons/bi";
import { GiJourney } from "react-icons/gi";
import { FaChevronRight } from "react-icons/fa6";

// Variants for motion elements
const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
};

const imageVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 }
};

const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.3 } }
};

const Services = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.section
            className="container-padding space-y-6 md:space-y-8 lg:space-y-10 md:grid md:grid-cols-2 gap-8 items-center bg-secondary"
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={staggerContainer} // Apply stagger animation
        >
            {/* Text Content Section */}
            <div className="space-y-6">
                {/* Heading and Description */}
                <div className="space-y-4">
                    <motion.p
                        variants={imageVariants}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="sub-heading"
                    >
                        Savor
                    </motion.p>
                    <motion.p
                        variants={textVariants}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="heading"
                    >
                        Discover Unmatched Culinary Brilliance
                    </motion.p>
                    <motion.p
                        variants={textVariants}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="text-base sm:text-lg leading-relaxed"
                    >
                        At our restaurant, we blend tradition with innovation to
                        create unforgettable dishes. Our passion for quality
                        ingredients and authentic flavors sets us apart.
                    </motion.p>
                </div>

                {/* Services Section */}
                <div className="space-y-6 md:space-y-0 md:flex md:gap-8">
                    {/* Service 1 */}
                    <motion.div
                        variants={textVariants}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="space-y-2 md:text-left"
                    >
                        <BiDish className="text-3xl sm:text-4xl text-accent" />
                        <p className="font-recoleta text-lg lg:text-xl font-semibold">
                            Signature Dishes
                        </p>
                        <p className="text-sm sm:text-base text-gray-700">
                            Indulge in our chef's special pasta, crafted with
                            love and fresh, local ingredients.
                        </p>
                    </motion.div>
                    {/* Service 2 */}
                    <motion.div
                        variants={textVariants}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="space-y-2 md:text-left"
                    >
                        <GiJourney className="text-3xl sm:text-4xl text-accent" />
                        <p className="font-recoleta text-lg lg:text-xl font-semibold">
                            Culinary Journey
                        </p>
                        <p className="text-sm sm:text-base text-gray-700">
                            Join us for a delightful fusion of flavors that will
                            tantalize your taste buds.
                        </p>
                    </motion.div>
                </div>

                {/* Call-to-Actions */}
                <motion.div
                    variants={textVariants}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="flex flex-wrap gap-4 lg:gap-8 items-center"
                >
                    <Link
                        to="/about"
                        className="px-6 py-3 border-2 border-accent text-accent rounded-lg hover:bg-accent/20 transition duration-300"
                        aria-label="Learn More"
                    >
                        Learn More
                    </Link>
                    <Link
                        to="/reservation"
                        className="flex items-center gap-2 text-gray-900 hover:text-accent cursor-pointer"
                    >
                        <p className="font-medium">Reserve</p>
                        <FaChevronRight />
                    </Link>
                </motion.div>
            </div>

            {/* Image Section */}
            <motion.div
                variants={imageVariants}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full h-auto"
            >
                <img
                    src="/images/home-services.webp"
                    alt="Culinary experience"
                    loading="lazy"
                    className="w-full h-auto object-cover rounded-lg shadow-lg"
                />
            </motion.div>
        </motion.section>
    );
};

export default Services;
