import Header from "../components/Hompage/Header";
import HeroBanner from "./../components/Hompage/HeroBanner";
import Services from "../components/Hompage/Services";
import Scroller from "../components/Common/Scroller";
import PopularDishes from "./../components/Hompage/PopularDishes";
import Testimonials from "./../components/Hompage/Testimonials";
import CallToAction from "./../components/Hompage/CallToAction";
import ContactForm from "./../components/Hompage/ContactForm";
import Footer from "./../components/Hompage/Footer";
import { ToastContainer } from "react-toastify";

const HomePage = () => {
    return (
        <>
            <Header />
            <HeroBanner />
            <Scroller />
            <Services />
            <PopularDishes />
            <Testimonials />
            <CallToAction />
            <ContactForm />
            <Footer />
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    );
};

export default HomePage;
