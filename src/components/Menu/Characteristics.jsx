import React from "react";
import { FaBowlFood } from "react-icons/fa6";
import { SiCodefresh } from "react-icons/si";
import { LuSmilePlus } from "react-icons/lu";
import { PiMapPinAreaFill } from "react-icons/pi";
import { motion } from "framer-motion";

const Characteristics = () => {
    const characteristics = [
        {
            icon: <FaBowlFood className="text-accent" size={40} />,
            title: "All kinds of Foods",
            description:
                "lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, voluptas, quis, quos."
        },
        {
            icon: <SiCodefresh className="text-accent" size={40} />,
            title: "Fresh Foods",
            description:
                "lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, voluptas, quis, quos."
        },
        {
            icon: <LuSmilePlus className="text-accent" size={40} />,
            title: "Best Price",
            description:
                "lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, voluptas, quis, quos."
        },
        {
            icon: <PiMapPinAreaFill className="text-accent" size={40} />,
            title: "Best Location",
            description:
                "lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, voluptas, quis, quos."
        }
    ];

    return (
        <section className="container-padding bg-secondary space-y-6 md:space-y-10 relative">
            <div className="space-y-2">
                <p className="sub-heading">Our strength</p>
                <h1 className="heading capitalize">Why we are the Best</h1>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
                {characteristics.map((characteristic, index) => (
                    <motion.div
                        key={index}
                        className="space-y-2 lg:space-y-4"
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 50 }}
                        transition={{
                            duration: 0.5,
                            ease: "easeOut",
                            delay: index * 0.2
                        }}
                        viewport={{ once: true }}
                    >
                        <div>{characteristic.icon}</div>
                        <p className="text-xl md:text-2xl font-recoleta font-semibold">
                            {characteristic.title}
                        </p>
                        <p className="text-base md:text-lg text-gray-700">
                            {characteristic.description}
                        </p>
                    </motion.div>
                ))}
            </div>
            <motion.div
                className="hidden md:block absolute right-0 bottom-[330px] xl:bottom-[280px] z-10"
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <img
                    src="./src/assets/images/pizza-slice.png"
                    alt="image of a pizza slice"
                    loading="lazy"
                    className="w-[200px] lg:w-[250px] xl:w-[280px] h-auto object-cover"
                />
            </motion.div>
        </section>
    );
};

export default Characteristics;
