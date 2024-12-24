import Header from "./../components/Hompage/Header";
import ReservationBanner from './../components/Reservation/ReservationBanner';
import ReservationForm from './../components/Reservation/ReservationForm';
import FAQ from './../components/About/FAQ';
import Footer from './../components/Hompage/Footer';

const Reservation = () => {
    return (
        <>
            <Header />
            <ReservationBanner />
            <ReservationForm />
            <div className="bg-secondary">
                <FAQ />
            </div>
            <Footer />
        </>
    );
};

export default Reservation;
