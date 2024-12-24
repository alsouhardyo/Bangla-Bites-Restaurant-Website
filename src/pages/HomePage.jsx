import Header from "../components/Hompage/Header";
import HeroBanner from "./../components/Hompage/HeroBanner";
import Services from "../components/Hompage/Services";
import Scroller from "../components/Common/Scroller";
import PopularDishes from "./../components/Hompage/PopularDishes";
import Testimonials from "./../components/Hompage/Testimonials";
import CallToAction from "./../components/Hompage/CallToAction";
import ContactForm from "./../components/Hompage/ContactForm";
import Footer from "./../components/Hompage/Footer";

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
        </>
    );
};

export default HomePage;
