import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
    const testimonialsData = [
        {
            id: 1,
            name: "John Doe",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
            img: "https://picsum.photos/101/101",
        },
        {
            id: 2,
            name: "Steve Smith",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
            img: "https://picsum.photos/102/102",
        },
        {
            id: 3,
            name: "Kristen",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
            img: "https://picsum.photos/104/104",
        },
        {
            id: 5,
            name: "Ariana",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
            img: "https://picsum.photos/103/103",
        }
    ];

    return (
        <section className="py-10 px-4 bg-secondary">
            <div className="text-center max-w-[600px] mx-auto mb-10 space-y-2">
                {/* Header Section */}
                <h1 className="sub-heading">OUR TESTIMONIALS</h1>
                <p className="heading">What Our Customers Say About Us</p>
            </div>
            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1360: { slidesPerView: 3 }
                }}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false
                }}
                pagination={{
                    clickable: true
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper h-[350px]"
            >
                {testimonialsData.map((testimonial) => (
                    <SwiperSlide key={testimonial.id}>
                        <div className="flex flex-col gap-4 p-8 shadow-lg mx-4 rounded-xl bg-white">
                            {/* Upper Section */}
                            <div className="flex items-center gap-5">
                                <img
                                    src={testimonial.img}
                                    alt={testimonial.name}
                                    className="w-16 h-16 rounded-full"
                                />
                                <div>
                                    <p className="text-xl font-bold text-gray-700">
                                        {testimonial.name}
                                    </p>
                                    <p className="text-gray-500">Customer</p>
                                </div>
                            </div>
                            {/* Bottom Section */}
                            <div className="py-6 space-y-4">
                                <p className="text-sm text-gray-600">
                                    {testimonial.text}
                                </p>
                                <p className="text-yellow-500">⭐⭐⭐⭐⭐</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Testimonials;
