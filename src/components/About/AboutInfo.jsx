import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const AboutInfo = () => {
    const imageVariants = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0 }
    };

    const textVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
    };

    const staggerContainer = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.3 } }
    };

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, threshold: 0.3 });

    return (
        <motion.section
            ref={ref}
            className="bg-secondary px-4 md:px-8 lg:px-16 py-8 md:py-10 lg:py-16 grid md:grid-cols-2 justify-between items-center gap-12"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={staggerContainer}
            viewport={{ once: true, amount: 0.3 }}
        >
            <motion.img
                src="./src/assets/images/call-image.jpg"
                alt="About info"
                loading="lazy"
                className="w-full h-full object-cover rounded-xl shadow-xl"
                variants={imageVariants}
                transition={{ delay: 2, duration: 0.5, ease: "easeInOut" }}
            />
            <div className="space-y-4">
                <motion.p
                    variants={textVariants}
                    transition={{
                        delay: 2.3,
                        duration: 0.5,
                        ease: "easeInOut"
                    }}
                    className="sub-heading"
                >
                    Flavors of Tradition, Served with Love
                </motion.p>
                <motion.h1
                    variants={textVariants}
                    transition={{
                        delay: 2.3,
                        duration: 0.5,
                        ease: "easeInOut"
                    }}
                    className="heading"
                >
                    Welcome to Bangla Bites - A Culinary Journey Through
                    Bangladesh
                </motion.h1>
                <motion.div
                    variants={textVariants}
                    transition={{
                        delay: 2.3,
                        duration: 0.5,
                        ease: "easeInOut"
                    }}
                    className="space-y-2"
                >
                    <p className="text-sm lg:text-base text-gray-700">
                        At Bangla Bites, we celebrate the rich culinary heritage
                        of Bangladesh. Our menu features authentic dishes
                        crafted with traditional recipes and vibrant flavors.
                        From aromatic biryanis to delicious curries and sweet
                        treats, every bite reflects the essence of Bangladeshi
                        cuisine.
                    </p>
                    <p className="text-sm lg:text-base text-gray-700">
                        We use only the freshest ingredients and carefully
                        blended spices to ensure every dish is packed with
                        flavor. Whether it’s a classic hilsa curry or a
                        delightful dessert like roshogolla, our food is a
                        journey into the heart of Bangladesh.
                    </p>
                    <p className="text-sm lg:text-base text-gray-700">
                        At Bangla Bites, we offer a warm, welcoming space to
                        enjoy a meal with family and friends. Join us to explore
                        the diverse flavors of Bangladesh and savor an
                        unforgettable dining experience!
                    </p>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default AboutInfo;
