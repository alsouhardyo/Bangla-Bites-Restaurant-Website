import { FaMapMarkerAlt } from "react-icons/fa";
import { FaHeadphonesSimple } from "react-icons/fa6";
import { IoMailUnread } from "react-icons/io5";

const FindUs = () => {
    return (
        <section className="py-6 md:py-10 px-4 space-y-6 md:grid md:grid-cols-2 lg:grid-cols-3 lg:space-y-0 md:gap-6 md:justify-between md:items-center">
            {/* Location */}
            <div
                className="flex-center-y gap-4 bg-slate-900 text-white py-6 rounded-lg shadow-lg md:col-span-2 lg:col-span-1"
            >
                {" "}
                {/* Occupies 2 columns on md, 1 on lg */}
                <div className="bg-accent p-4 rounded-lg shadow-lg">
                    <FaMapMarkerAlt size={34} />
                </div>
                <p className="text-center text-accent font-recoleta font-semibold text-2xl">
                    Our Location
                </p>
                <p className="text-center text-gray-300">
                    Bangla Bites, 1 Nawabbari Rd, Bogura
                </p>
            </div>

            {/* Contact */}
            <div className="flex-center-y gap-4 bg-slate-900 text-white py-6 rounded-lg shadow-lg">
                <div className="bg-accent p-4 rounded-lg shadow-lg">
                    <FaHeadphonesSimple size={34} />
                </div>
                <p className="text-center text-accent font-recoleta font-semibold text-2xl">
                    Our Contact
                </p>
                <p className="text-center text-gray-300">+88 0191 234 5678</p>
                <p className="text-center text-gray-300">+88 0191 234 5679</p>
            </div>

            {/* Mail */}
            <div className="flex-center-y gap-4 bg-slate-900 text-white py-6 rounded-lg shadow-lg">
                <div className="bg-accent p-4 rounded-lg shadow-lg">
                    <IoMailUnread size={34} />
                </div>
                <p className="text-center text-accent font-recoleta font-semibold text-2xl">
                    Mail Us
                </p>
                <p className="text-center text-gray-300">
                    helloworld897@gmail.com
                </p>
                <p className="text-center text-gray-300">
                    thinkponder1121@gmail.com
                </p>
            </div>
        </section>
    );
};

export default FindUs;
