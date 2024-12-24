import { Puff } from "react-loader-spinner";
import { useLoading } from "../context/LoadingContext";

const Loader = () => {
    const { isLoading } = useLoading(); // Get isLoading from context
    return (
        <section
            className={`fixed inset-0 flex justify-center items-center bg-white z-50 ${
                isLoading
                    ? "block opacity-100 pointer-events-auto"
                    : "hidden opacity-0 pointer-events-none"
            }`}
        >
            <Puff
                height={80}
                width={80}
                color="#fa8a3d"
                ariaLabel="puff-loading"
            />
        </section>
    );
};

export default Loader;
