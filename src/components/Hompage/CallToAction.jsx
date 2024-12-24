import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CallToAction = () => {
    // Variants for animations
    const textVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { delay: 0.8, duration: 0.6, ease: "easeInOut" }
        }
    };

    const imageVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { delay: 0.8, duration: 0.6, ease: "easeInOut" }
        }
    };

    return (
        <motion.section
            className="container-padding grid justify-between items-center md:grid-cols-2 gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            <motion.div
                variants={textVariants}
                className="space-y-6 text-center md:text-left"
            >
                <h1 className="font-recoleta text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
                    Reserve Your Table Today!
                </h1>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                    Indulge in our delicious dishes made from fresh ingredients
                    and unique flavors. Make a reservation now for an
                    unforgettable dining experience.
                </p>
                <div className="flex justify-center md:justify-start items-center gap-4">
                    <Link
                        to="/reservation"
                        className="px-6 py-3 bg-accent text-white font-medium rounded-lg shadow-md hover:bg-accent/90 transition duration-300"
                        aria-label="Reserve Now"
                    >
                        Reserve
                    </Link>
                    <Link
                        to="/menu"
                        className="px-6 py-3 border border-accent text-accent font-medium rounded-lg hover:bg-accent/40 hover:text-white transition duration-300"
                        aria-label="Order Now"
                    >
                        Order Now
                    </Link>
                </div>
            </motion.div>
            <motion.div
                variants={imageVariants}
                className="flex justify-center md:justify-end"
            >
                <img
                    src="https://media.istockphoto.com/id/1081422898/photo/pan-fried-duck.jpg?b=1&s=612x612&w=0&k=20&c=E5YZ31t5xyOIaZ48S4U1sTnbVChrPo6YdRH1oJtRk8g="
                    alt="Pan-fried duck on a plate"
                    loading="lazy"
                    className="w-full max-w-md md:max-w-lg rounded-lg object-cover shadow-lg"
                />
            </motion.div>
        </motion.section>
    );
};

export default CallToAction;
