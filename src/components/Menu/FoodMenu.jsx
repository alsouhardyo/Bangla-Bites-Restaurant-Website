import { useState, useRef } from "react";
import { FaStar } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { useLoading } from "../context/LoadingContext.jsx";

const FoodMenu = () => {
    const { isLoading } = useLoading();
    const dishes = [
        {
            name: "Shorshe Ilish",
            description:
                "Hilsa fish in mustard paste, served with steamed rice.",
            price: "৳499",
            category: "Lunch",
            imageSrc:
                "https://images.squarespace-cdn.com/content/v1/5ea5f3913b0ccf06d0ec2563/1647632824420-2U3SJU6ZYW3L8DJQE9GW/Pohela+Boishakh+2021+-+The+Spice+Odyssey+%2850%29.jpg?format=2500w",
        },
        {
            name: "Kacchi Biryani",
            description: "Basmati rice with marinated mutton and spices.",
            price: "৳399",
            category: "Lunch",
            imageSrc:
                "https://foodfusion.com/wp-content/uploads/2019/01/Kachay-Gosht-ki-Biryani-Recipe-by-Food-fusion-2.jpg",
        },
        {
            name: "Beef Rezala",
            description: "Tender beef cooked in yogurt and spices.",
            price: "৳449",
            category: "Dinner",
            imageSrc:
                "https://i.ytimg.com/vi/QzW-oiAxaK0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCANNLW5cgR05SJ7K5MiSujTDP-pg",
        },
        {
            name: "Mishti Doi",
            description: "Creamy, sweetened yogurt with a caramelized flavor.",
            price: "৳99",
            category: "Dessert",
            imageSrc:
                "https://images.pexels.com/photos/3026801/pexels-photo-3026801.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            name: "Chingri Malai Curry",
            description: "Prawns in a coconut milk-based curry.",
            price: "৳459",
            category: "Dinner",
            imageSrc:
                "https://pikturenama.com/wp-content/uploads/2020/01/with-logo-Chingri-Malaikari-2.jpg",
        },
        {
            name: "Bhuna Khichuri",
            description: "Lentil khichuri with slow-cooked beef curry.",
            price: "৳349",
            category: "Lunch",
            imageSrc:
                "https://www.flavourstreat.com/wp-content/uploads/2020/08/dal-khichdi-recipe-05.jpg",
        },
        {
            name: "Panta Bhat",
            description: "Fermented rice served with fried hilsa and onions.",
            price: "৳199",
            category: "Breakfast",
            imageSrc:
                "https://i.pinimg.com/736x/c0/0e/a8/c00ea83059d5bc11f6f0ebf73d30e751.jpg",
        },
        {
            name: "Firni",
            description: "Creamy rice pudding flavored with cardamom.",
            price: "৳129",
            category: "Dessert",
            imageSrc:
                "https://rumkisgoldenspoon.com/wp-content/uploads/2023/04/Phirni.jpg",
        },
        {
            name: "Aloo Paratha",
            description: "Flatbread stuffed with spiced mashed potatoes.",
            price: "৳159",
            category: "Breakfast",
            imageSrc:
                "https://www.maggi.in/sites/default/files/styles/home_stage_944_531/public/srh_recipes/9cc96dc3b0168582c17fe2d98218026a.jpg?h=0de9e9a9&itok=hcOAM3kP",
        },
        {
            name: "Sorshe Bata Mach",
            description: "Fish in a tangy mustard sauce, served with rice.",
            price: "৳349",
            category: "Lunch",
            imageSrc:
                "https://www.scratchingcanvas.com/wp-content/uploads/2018/06/Parshe-Macher-Shorshe-Jhal.1.jpg",
        },
        {
            name: "Macher Jhol",
            description:
                "Traditional fish curry with potatoes, tomatoes, and spices.",
            price: "৳299",
            category: "Lunch",
            imageSrc:
                "https://sinfullyspicy.com/wp-content/uploads/2021/02/14.jpg",
        },
        {
            name: "Chingri Bhorta",
            description:
                "Mashed prawns mixed with mustard oil and green chilies.",
            price: "৳229",
            category: "Dinner",
            imageSrc:
                "https://ayshasrecipe.com/wp-content/uploads/2021/06/kucho-chingri-vorta-recipe.jpg",
        },
    ];
    const rating = [1, 2, 3, 4, 5];
    const foodCategory = ["All", "Breakfast", "Lunch", "Dinner", "Dessert"];
    const [hoveredIndex, setHoveredIndex] = useState(0);
    const [filteredDishes, setFilteredDishes] = useState(dishes);
    const filterMenu = (category) => {
        if (category === "All") {
            setFilteredDishes(dishes); // Show all dishes
        } else {
            setFilteredDishes(
                dishes.filter((dish) => dish.category === category)
            ); // Filter by category
        }
    };
    // Animation Initialization
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
        <section className="px-4 md:px-8 lg:px-16 py-12 md:py-14 lg:py-16 space-y-10 md:space-y-16 lg:mt-5">
            <div>
                <motion.h2
                    initial={{ opacity: 0, y: -50 }}
                    animate={
                        isLoading
                            ? { opacity: 0, y: -50 }
                            : { opacity: 1, y: 0 }
                    }
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="heading text-center mx-auto md:w-[50vw]"
                >
                    Savor the Flavors: Explore Our Culinary Delights!
                </motion.h2>
            </div>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                {foodCategory.map((item, index) => {
                    return (
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={
                                isLoading
                                    ? { opacity: 0, x: -100 }
                                    : { opacity: 1, x: 0 }
                            }
                            transition={{
                                duration: 0.5,
                                ease: "easeInOut",
                                delay: index * 0.1
                            }}
                            key={index}
                            className={`border border-gray-400 px-6 md:px-8 py-2 rounded-full text-center btn-transition cursor-pointer ${
                                hoveredIndex === index
                                    ? "bg-accent text-white border-none"
                                    : "hover:bg-accent hover:text-white hover:border-none"
                            }`}
                            onClick={() => filterMenu(item)}
                        >
                            {item}
                        </motion.div>
                    );
                })}
            </div>
            <motion.div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
                {filteredDishes.map((dish, index) => (
                    <motion.div
                        key={index}
                        className="bg-white rounded-3xl shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl"
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
                                <div className="px-4 py-2 bg-accent text-white rounded-full hover:bg-accent/80 btn-transition cursor-pointer">
                                    Order Now
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default FoodMenu;
