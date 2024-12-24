import Header from "./../components/Hompage/Header";
import AboutBanner from "./../components/About/AboutBanner";
import AboutInfo from "./../components/About/AboutInfo";
import Specialities from "./../components/About/Specialities";
import Testimonials from "./../components/Hompage/Testimonials";
import FAQ from "./../components/About/FAQ";
import Footer from "./../components/Hompage/Footer";

const About = () => {
    return (
        <>
            <Header />
            <AboutBanner />
            <AboutInfo />
            <Specialities />
            <Testimonials />
            <FAQ />
            <div className="bg-secondary">
                <Footer />
            </div>
        </>
    );
};

export default About;
