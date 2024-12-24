import { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa6";

const FAQ = () => {
    const faq = [
        {
            question: "What are your popular dishes?",
            answer: "Our restaurant is known for its signature Bangladeshi dishes, including flavorful Biriyani, traditional Hilsha Fish Curry, Bhuna Khichuri paired with beef or fried eggplants, and Panta Bhat served with Ilish Fry and pickles. Each dish is prepared with fresh, locally sourced ingredients to deliver an authentic taste of Bangladesh."
        },
        {
            question: "Do you offer home delivery?",
            answer: "Yes, we offer home delivery services across the city. You can easily place your order through our website, where you can browse the full menu and track your delivery. Alternatively, you can call us directly for a personalized ordering experience. Delivery times depend on your location but typically range from 30 to 60 minutes."
        },
        {
            question: "Do you have vegetarian options?",
            answer: "Absolutely! We take pride in offering a variety of vegetarian dishes to suit all dietary preferences. Some of our favorites include Shorshe Begun (eggplants in mustard sauce), Aloo Bharta (mashed potatoes with mustard oil and chilies), Chingri Malai Curry (vegetarian version available), and Dal Tadka. These dishes are rich in traditional Bangladeshi flavors and prepared with utmost care for our vegetarian customers."
        },
        {
            question: "What are your opening hours?",
            answer: "We are open seven days a week, from 11:00 AM to 11:00 PM. Whether you’re stopping by for lunch, dinner, or a light snack, our team is ready to serve you. On special occasions and public holidays, we may extend our hours. Stay updated by following our social media pages or subscribing to our newsletter!"
        }
    ];
    const [openIndexes, setOpenIndexes] = useState([0]); // Initialize with the first item open

    const toggleAccordion = (index) => {
        if (openIndexes.includes(index)) {
            setOpenIndexes(openIndexes.filter((i) => i !== index));
        } else {
            setOpenIndexes([index]);
        }
    };

    return (
        <section className="container-padding flex-center-x">
            <div className="lg:w-[75vw]">
                <div className="space-y-6">
                    <div className="space-y-2">
                        <p className="sub-heading text-center">
                            Your Questions, Answered!
                        </p>
                        <h1 className="heading text-center">
                            Frequently Asked Questions
                        </h1>
                        <p className="text-gray-700 text-center">
                            Everything you need to know about our food,
                            services, and experience.
                        </p>
                    </div>
                    <div className="space-y-4 lg:space-y-6">
                        {faq.map((item, index) => {
                            const isOpen = openIndexes.includes(index);
                            return (
                                <div key={index} className="space-y-4">
                                    <div
                                        className="bg-secondary px-6 py-4 rounded-full shadow-xl flex-between-x hover:bg-accent hover:text-white btn-transition cursor-pointer font-semibold"
                                        onClick={() => toggleAccordion(index)}
                                    >
                                        <h2 className="text-sm md:text-base">
                                            {item.question}
                                        </h2>
                                        {isOpen ? (
                                            <FaChevronUp className="cursor-pointer block" />
                                        ) : (
                                            <FaChevronDown className="cursor-pointer block" />
                                        )}
                                    </div>
                                    <div
                                        className={`overflow-hidden transition-[max-height] duration-500 ease-in-out`}
                                        style={{
                                            maxHeight: isOpen
                                                ? "200px" /* Adjust based on expected content height */
                                                : "0px"
                                        }}
                                    >
                                        <p className="text-sm md:text-base px-4 text-gray-800">
                                            {item.answer}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
