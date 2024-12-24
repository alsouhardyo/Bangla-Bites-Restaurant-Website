import { Link } from "react-router-dom";


const Button = () => {
    return (
        <div>
            <Link
                to="/menu"
                className="bg-accent text-white font-medium text-base px-4 py-2 rounded-full md:hidden xl:block hover:bg-opacity-85 btn-transition"
            >
                Order Now
            </Link>
        </div>
    );
};

export default Button;
