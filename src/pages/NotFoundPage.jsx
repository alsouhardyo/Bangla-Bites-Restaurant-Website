import { useNavigate } from "react-router-dom";
import Header from "./../components/Homepage/Header";

const NotFoundPage = () => {
    const navigate = useNavigate();
    return (
        <main>
            <Header />
            <section className="container-padding grid grid-cols-1 md:grid-cols-2 gap-6 justify-center items-center">
                <div className="space-y-6">
                    <h1 className="heading">Oops, Wrong Turn...</h1>
                    <p className="text-lg lg:w-[75%]">
                        Looks like you've wandered off the beaten path. Let's
                        get you back on track and find what you are looking for
                    </p>
                    <button
                        onClick={() => navigate("/")}
                        className="px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition duration-300"
                    >
                        Go Back Home
                    </button>
                </div>
                <div>
                    <img
                        src="https://img.freepik.com/premium-vector/halftone-collage-404-error-page-design-with-retro-computer-broken-links-missing-pages_288819-491.jpg?w=826"
                        alt="image of the error png"
                        className="w-full h-full lg:h-[50vh] object-cover rounded-xl shadow-xl"
                        loading="lazy"
                    />
                </div>
            </section>
        </main>
    );
};

export default NotFoundPage;
