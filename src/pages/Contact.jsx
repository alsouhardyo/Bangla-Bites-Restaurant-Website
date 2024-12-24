import Header from "./../components/Hompage/Header";
import ContactBanner from './../components/Contact/ContactBanner';
import FindUs from './../components/Contact/FindUs';
import ContactForm from './../components/Hompage/ContactForm';
import Map from './../components/Contact/Map';
import Footer from './../components/Hompage/Footer';

const Contact = () => {
    return (
        <>
            <Header />
            <ContactBanner />
            <FindUs />
            <ContactForm />
            <Map />
            <Footer />
        </>
    );
};

export default Contact;
