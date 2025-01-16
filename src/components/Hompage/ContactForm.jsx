import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

const ContactForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const onSubmit = () => {
        // You can send data to your backend API or perform other actions
        reset(); // Reset form after submission
    };

    // Animation Variants
    const fadeIn = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <motion.section
            className="bg-secondary container-padding flex-center-y gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            variants={fadeIn}
        >
            {/* Introduction Section */}
            <div className="space-y-2">
                <p className="sub-heading text-center">Connect however</p>
                <p className="heading text-center">Get in Touch</p>
                <p className="text-sm md:text-lg text-center">
                    We’re here to answer your questions and assist you.
                </p>
            </div>

            {/* Form Field Section */}
            <motion.div
                className="space-y-4 lg:w-[50vw]"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                variants={fadeIn}
            >
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* Name Input Section */}
                    <div className="grid grid-cols-2 justify-center items-center gap-4">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="first-name" className="label">
                                First Name:
                            </label>
                            <input
                                id="first-name"
                                {...register("first-name", { required: true })}
                                placeholder="First Name"
                                className="input"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="last-name" className="label">
                                Last Name:
                            </label>
                            <input
                                id="last-name"
                                {...register("last-name", { required: true })}
                                placeholder="Last Name"
                                className="input"
                            />
                        </div>
                    </div>

                    {/* Contact Information Section */}
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="email" className="label">
                                Email:
                            </label>
                            <input
                                id="email"
                                {...register("email", {
                                    required: true,
                                    pattern:
                                        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
                                })}
                                placeholder="example1234@example.com"
                                className="input w-full"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="phone" className="label">
                                Phone Number:
                            </label>
                            <input
                                id="phone"
                                {...register("phone", {
                                    required: true,
                                    pattern:
                                        /^\+?([0-9]{1,3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
                                })}
                                placeholder="Phone Number"
                                className="input w-full"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="select" className="label">
                                Choose a Topic
                            </label>
                            <select
                                id="select"
                                {...register("select", { required: true })}
                                className="w-full border border-gray-800 h-[40px] lg:h-[50px] lg:px-4 lg:py-2 rounded-sm p-2 focus:border-accent"
                            >
                                <option value="option1">Select One</option>
                                <option value="option2">Select One</option>
                                <option value="option3">Select One</option>
                            </select>
                        </div>

                        {/* Description Section */}
                        <div className="space-y-2">
                            <label htmlFor="description" className="label">
                                Which best describes you:
                            </label>
                            <div className="flex flex-wrap justify-between">
                                <div className="space-y-2">
                                    <input
                                        id="dinner"
                                        {...register("description")}
                                        type="radio"
                                        value="Dinner"
                                        className="mr-2"
                                    />
                                    <label htmlFor="dinner">Dinner</label>
                                    <br />
                                    <input
                                        id="event-planner"
                                        {...register("description")}
                                        type="radio"
                                        value="Event Planner"
                                        className="mr-2"
                                    />
                                    <label htmlFor="event-planner">
                                        Event Planner
                                    </label>
                                    <br />
                                    <input
                                        id="foodie"
                                        {...register("description")}
                                        type="radio"
                                        value="Foodie"
                                        className="mr-2"
                                    />
                                    <label htmlFor="foodie">Foodie</label>
                                </div>
                                <div className="space-y-2">
                                    <input
                                        id="business-owner"
                                        {...register("description")}
                                        type="radio"
                                        value="Business Owner"
                                        className="mr-2"
                                    />
                                    <label htmlFor="business-owner">
                                        Business Owner
                                    </label>
                                    <br />
                                    <input
                                        id="traveler"
                                        {...register("description")}
                                        type="radio"
                                        value="Traveler"
                                        className="mr-2"
                                    />
                                    <label htmlFor="traveler">Traveler</label>
                                    <br />
                                    <input
                                        id="other"
                                        {...register("description")}
                                        type="radio"
                                        value="Other"
                                        className="mr-2"
                                    />
                                    <label htmlFor="other">Other</label>
                                </div>
                            </div>
                        </div>

                        {/* Message Section */}
                        <div className="space-y-2">
                            <label htmlFor="message" className="label">
                                Message
                            </label>
                            <textarea
                                id="message"
                                {...register("message", { required: true })}
                                rows={3}
                                cols={3}
                                className="input w-full h-24"
                                placeholder="Type Your message..."
                            />
                        </div>

                        {/* Terms and Conditions Section */}
                        <div className="mt-4">
                            <div className="flex items-center">
                                <input
                                    id="terms"
                                    {...register("terms", { required: true })}
                                    type="checkbox"
                                    className="h-4 w-4 text-accent border-gray-300 rounded"
                                />
                                <label
                                    htmlFor="terms"
                                    className="ml-2 block text-sm text-gray-900"
                                >
                                    I accept the terms
                                </label>
                            </div>
                        </div>

                        {/* Submit Button Section */}
                        <div className="space-y-2 flex-center-x">
                            <button
                                type="submit"
                                className="px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition duration-300"
                            >
                                Send Message
                            </button>
                        </div>
                    </div>
                </form>
            </motion.div>
        </motion.section>
    );
};

export default ContactForm;
