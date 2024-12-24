import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { FaStar } from "react-icons/fa";
const PopularDishes = () => {
    const dishes = [
        {
            name: "Shorshe Ilish",
            description:
                "Tender Hilsa fish simmered in a rich mustard seed paste and mustard oil, served with fragrant steamed rice.",
            price: "৳499",
            imageSrc:
                "https://atanurrannagharrecipe.com/wp-content/uploads/2024/06/Shorshe-Ilish-Recipe.jpg",
            delay: 0.2
        },
        {
            name: "Kacchi Biryani",
            description:
                "A festive favorite! Aromatic basmati rice cooked with marinated mutton, saffron, and spices, layered to perfection.",
            price: "৳399",
            imageSrc:
                "https://foodfusion.com/wp-content/uploads/2019/01/Kachay-Gosht-ki-Biryani-Recipe-by-Food-fusion-2.jpg",
            delay: 0.3
        },
        {
            name: "Bhuna Khichuri",
            description:
                "Comforting lentil khichuri paired with slow-cooked beef curry, infused with spices and caramelized onions.",
            price: "৳349",
            imageSrc:
            "https://rhcaterers.pk/wp-content/uploads/2024/06/BEEF-PULAO.png",
            delay: 0.4
        },
        {
            name: "Mishti Doi",
            description:
                "A traditional dessert of creamy, sweetened yogurt with a caramelized flavor, perfect to end your meal.",
            price: "৳99",
            imageSrc:
            "https://images.pexels.com/photos/3026801/pexels-photo-3026801.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            delay: 0.5
        }
    ];
    const rating = [1, 2, 3, 4, 5];

    // Animation
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const staggerContainer = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.3 } }
    };
    const textVariants = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 }
    };
    const Slideleft = (delay) => {
        return {
            initial: {
                opacity: 0,
                x: 100
            },
            animate: {
                opacity: 1,
                x: 0,
                transition: { delay: delay, duration: 0.3, ease: "easeInOut" }
            }
        };
    };
    return (
        <motion.section
            className="container-padding space-y-10 bg-gray-50"
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={staggerContainer}
        >
            <motion.div
                variants={textVariants}
                transition={{ delay: 0.3, duration: 0.5, ease: "easeInOut" }}
                className="text-center space-y-4"
            >
                <p className="sub-heading text-accent">OUR POPULAR DISHES</p>
                <h2 className="heading text-2xl md:text-3xl font-bold">
                    Experience the rich and vibrant flavors
                </h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
                {dishes.map((dish, index) => (
                    <motion.div
                        variants={Slideleft(dish.delay)}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.15)"
                        }}
                        transition={{ duration: 0, ease: "easeInOut" }}
                        key={index}
                        className="bg-white rounded-3xl shadow-lg overflow-hidden transform transition-all"
                    >
                        <div className="relative">
                            <img
                                src={dish.imageSrc}
                                alt={dish.name}
                                className="w-full h-48 object-cover"
                                lazy="loading"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                        </div>
                        <div className="p-6 space-y-4">
                            <div className="flex items-center space-x-1">
                                {rating.map((_, i) => (
                                    <FaStar
                                        key={i}
                                        className="text-yellow-500"
                                    />
                                ))}
                            </div>
                            <h3 className="font-recoleta font-bold text-xl text-gray-800">
                                {dish.name}
                            </h3>
                            <p className="text-gray-600 text-sm">
                                {dish.description}
                            </p>
                            <div className="flex justify-between items-center mt-4">
                                <p className="text-xl font-semibold text-accent">
                                    {dish.price}
                                </p>
                                <Link
                                    to="/menu"
                                    className="px-4 py-2 bg-accent text-white rounded-full hover:bg-accent/80 btn-transition"
                                >
                                    Order Now
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default PopularDishes;
