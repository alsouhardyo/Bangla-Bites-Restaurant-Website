import { useRef} from "react";
import { motion, useInView } from "framer-motion";

const Specialities = () => {
    const specialities = [
        {
            number: 7,
            speciality: "Years of experience"
        },
        {
            number: 1283,
            speciality: "Cases Completed"
        },
        {
            number: 3,
            speciality: "Awards Won"
        },
        {
            number: 7,
            speciality: "Expert Consultant"
        }
    ];
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
        <section
            className="container-padding grid grid-cols-2 md:grid-cols-4 justify-between lg:justify-center items-center gap-4"
            ref={ref}
        >
            {specialities.map((item, index) => (
                <motion.div
                    key={index}
                    className="space-y-2"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{
                        opacity: isInView ? 1 : 0,
                        y: isInView ? 0 : 50
                    }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                    <motion.p
                        className="text-center text-2xl md:text-3xl font-bold text-accent"
                        variants={{
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: { duration: 0.5, ease: "easeInOut" }
                            },
                            hidden: { opacity: 0, y: 50 }
                        }}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        {isInView ? item.number : 0}{" "}
                    </motion.p>
                    <p className="text-center font-semibold text-gray-600 lg:uppercase">
                        {item.speciality}
                    </p>
                </motion.div>
            ))}
        </section>
    );
};

export default Specialities;
