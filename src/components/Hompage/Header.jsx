import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { TiThMenuOutline } from "react-icons/ti";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import Button from "./Button";

const Header = () => {
    const navItems = ["Home", "About", "Menu", "Reservation", "Contact"];
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [sticky, setSticky] = useState(false);

    // Sticky Header
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    return (
        <header
            className={`w-full ${
                sticky ? "header-effect" : "bg-transparent shadow-none"
            }`}
        >
            <div className="md:flex-between-x px-8 py-4 md:px-16 md:py-6 lg:py-6">
                <div className="flex-between-x">
                    <Link
                        to={"/"}
                        className="font-recoleta text-xl lg:text-2xl font-medium cursor-pointer"
                    >
                        Bangla <span className="text-accent">Bites</span>
                    </Link>
                    {/* Mobile menu toggle */}
                    <div
                        onClick={toggleMobileMenu}
                        className="md:hidden relative"
                    >
                        <TiThMenuOutline
                            className={isMobileMenuOpen ? "hidden" : "block"}
                        />
                        <MdOutlineRestaurantMenu
                            className={
                                isMobileMenuOpen
                                    ? "block absolute top-0 right-0 z-40 text-xl"
                                    : "hidden"
                            }
                        />
                    </div>
                </div>
                {/* Navigation */}
                <nav
                    className={
                        isMobileMenuOpen
                            ? "absolute top-0 left-0 z-30 shadow-md w-full text-center py-8 bg-white/30 backdrop-blur-lg"
                            : "hidden md:block"
                    }
                >
                    <div className="xl:flex items-center justify-center gap-14 space-y-6 md:space-y-0">
                        <ul
                            className={
                                isMobileMenuOpen
                                    ? "space-y-4 font-semibold"
                                    : "md:flex items-center justify-center md:gap-8 lg:gap-12"
                            }
                        >
                            {navItems.map((item, index) => (
                                <li
                                    key={index}
                                    className={`hover:text-accent transition-colors duration-300 ${
                                        isMobileMenuOpen ? "text-2xl" : ""
                                    }`}
                                >
                                    <Link
                                        to={
                                            item === "Home"
                                                ? "/"
                                                : `/${item.toLowerCase()}`
                                        }
                                        className="text-sm lg:text-base"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <Button />
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
