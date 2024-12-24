import { FaChevronRight } from "react-icons/fa6";
const AboutBanner = () => {
    return (
        <section>
            <div className="relative">
                <img
                    src="/images/about-banner.jpg"
                    alt="Beautiful restaurant interior"
                    loading="lazy"
                    className="w-full h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px] object-cover"
                />
                <div className="absolute bottom-8 left-8 lg:bottom-16 lg:left-16 space-y-2 lg:space-y-4">
                    <div className="flex justify-start items-center gap-2">
                        <p className="text-white font-semibold">Bangla Bites</p>
                        <FaChevronRight className="text-white font-semibold" />
                        <p className="text-white font-semibold">About</p>
                    </div>
                    <h1 className="font-recoleta text-4xl xl:text-5xl font-bold text-accent">
                        About US
                    </h1>
                </div>
            </div>
        </section>
    );
};

export default AboutBanner;
