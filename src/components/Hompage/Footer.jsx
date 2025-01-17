import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { useForm } from 'react-hook-form';
import { toast } from "react-toastify";

const Footer = () => {
    const quickLinks = ["Home", "About", "Menu", "Reservation", "Contact"];
    const customerServices = ["Support", "Tracking", "FAQ", "Contact"];
    const socialMedia = [
        { name: "Facebook", icon: <FaFacebook /> },
        { name: "Instagram", icon: <FaInstagram /> },
        { name: "Twitter", icon: <FaXTwitter /> },
        { name: "Youtube", icon: <FaYoutube /> },
    ];
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();
    const onSubmit = (data) => {
        // You can send data to your backend API or perform other actions
        reset(); // Reset form after submission
        toast.success("👍 Email Sent Successfully", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    };
    return (
        <footer className="container-padding space-y-4 md:space-y-6">
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
                <div className="mb-6 lg:mb-0 space-y-2">
                    {" "}
                    <div className="space-y-2">
                        <h2 className="text-2xl font-bold font-recoleta">
                            Bangla Bites
                        </h2>
                        <p className="text-sm text-gray-700">
                            Stay updated with our latest features and offers.
                        </p>
                    </div>
                    <div className="space-y-2">
                        <div>
                            <form
                                onSubmit={handleSubmit(onSubmit)}
                                className="flex flex-col md:flex-row md:justify-start md:items-center md:gap-4"
                            >
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="input block w-full mb-2 md:w-[60vw] lg:w-[25vw] md:mb-0"
                                    {...register("email", {
                                        required: true,
                                        pattern:
                                            /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                                    })}
                                />
                                <button
                                    type="submit"
                                    className="border border-accent hover:bg-accent text-accent hover:text-white font-bold py-2 px-4 rounded w-full md:w-auto"
                                >
                                    Join
                                </button>
                            </form>
                        </div>
                        <p className="text-sm text-gray-700">
                            By subscribing, you consent to our Privacy Policy
                            and receive updates.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center lg:gap-12">
                    {["Quick Links", "Customer Services", "Social Media"].map(
                        (sectionTitle, index) => (
                            <div key={index} className="space-y-2">
                                <p className="font-bold text-lg font-recoleta">
                                    {sectionTitle}
                                </p>
                                <ul className="space-y-2">
                                    {(index === 0
                                        ? quickLinks
                                        : index === 1
                                        ? customerServices
                                        : socialMedia.map((item, i) => ({
                                              ...item,
                                              key: i,
                                          }))
                                    ).map((item, i) => (
                                        <li key={i} className="block">
                                            {index === 2 ? (
                                                <Link
                                                    to="#"
                                                    className="flex items-center gap-2 hover:text-accent btn-transition"
                                                >
                                                    <p>{item.icon}</p>
                                                    <p>{item.name}</p>
                                                </Link>
                                            ) : (
                                                <Link
                                                    to={
                                                        index === 0 &&
                                                        item === "Home"
                                                            ? "/"
                                                            : index === 0
                                                            ? `/${item.toLowerCase()}`
                                                            : null
                                                    }
                                                    className="hover:text-accent btn-transition"
                                                >
                                                    {item}
                                                </Link>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )
                    )}
                </div>
            </div>
            <div className="w-full mt-6">
                <div className="text-center">
                    <hr className="border-gray-300 mb-4" />
                    <p className="text-sm text-gray-600">
                        &copy; {new Date().getFullYear()}{" "}
                        <span className="font-semibold text-gray-800">
                            Bangla Bites
                        </span>
                        . All rights reserved.
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                        Taste the tradition, savor the flavor.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
