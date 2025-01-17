import Header from "./../components/Hompage/Header";
import ReservationBanner from './../components/Reservation/ReservationBanner';
import ReservationForm from './../components/Reservation/ReservationForm';
import FAQ from './../components/About/FAQ';
import Footer from './../components/Hompage/Footer';
import { ToastContainer } from "react-toastify";

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
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    );
};

export default Reservation;
