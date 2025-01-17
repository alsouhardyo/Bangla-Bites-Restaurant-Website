import { useRef } from "react";
import { useForm } from "react-hook-form";
import { useInView } from "framer-motion";
import { toast } from "react-toastify";

const ReservationForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();
    const onSubmit = (data) => {
        // You can send data to your backend API or perform other actions
        reset(); // Reset form after submission
        toast.success("👍 Form submitted successfully", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    };

    // Animation Hook Initialization
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section className="px-4 md:px-8 lg:px-16 py-12 md:py-14 lg:py-16 space-y-10 md:space-y-16 lg:mt-5">
            <div
                ref={ref}
                style={{
                    opacity: isInView ? 1 : 0,
                    transform: isInView
                        ? "translateX(0)"
                        : "translateX(-100px)",
                    transition: "all 0.6s ease-in-out 0.5s"
                }}
                className="bg-slate-900 rounded-lg shadow-lg p-6 md:p-10 xl:w-[80vw] xl:mx-auto"
            >
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Using react-hook-form for input fields */}
                    <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:justify-between md:items-center md:gap-6">
                        <div className="space-y-2">
                            <label
                                className="label text-white"
                                htmlFor="firstName"
                            >
                                First Name:
                            </label>
                            <input
                                className="input w-full"
                                type="text"
                                id="firstName"
                                {...register("firstName", { required: true })}
                                placeholder="Abdullah"
                            />
                            {errors.firstName && (
                                <span className="text-red-500">
                                    This field is required
                                </span>
                            )}
                        </div>
                        <div className="space-y-2">
                            <label
                                className="label text-white"
                                htmlFor="lastName"
                            >
                                Last Name:
                            </label>
                            <input
                                className="input w-full"
                                type="text"
                                id="lastName"
                                {...register("lastName", { required: true })}
                                placeholder="Al Mahmud"
                            />
                            {errors.lastName && (
                                <span className="text-red-500">
                                    This field is required
                                </span>
                            )}
                        </div>
                    </div>
                    {/* ... rest of the form fields similarly using ...register */}
                    <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:justify-between md:items-center md:gap-6">
                        <div className="space-y-2">
                            <label
                                className="label text-white"
                                htmlFor="phoneNumber"
                            >
                                Phone Number:
                            </label>
                            <input
                                className="input w-full"
                                type="tel"
                                id="phoneNumber"
                                {...register("phoneNumber", { required: true })}
                                placeholder="0123456789"
                            />
                            {errors.phoneNumber && (
                                <span className="text-red-500">
                                    This field is required
                                </span>
                            )}
                        </div>
                        <div className="space-y-2">
                            <label className="label text-white" htmlFor="email">
                                Email:
                            </label>
                            <input
                                className="input w-full"
                                type="email"
                                id="email"
                                {...register("email", {
                                    required: true,
                                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                                })}
                                placeholder="example@example.com"
                            />
                            {errors.email && (
                                <span className="text-red-500">
                                    Please enter a valid email
                                </span>
                            )}
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label
                            className="label text-white"
                            htmlFor="numberOfGuests"
                        >
                            Number of Guests:
                        </label>
                        <input
                            className="input w-full"
                            type="number"
                            id="numberOfGuests"
                            {...register("numberOfGuests", {
                                required: true,
                                min: 1
                            })}
                            min="1"
                            placeholder="1"
                        />
                        {errors.numberOfGuests && (
                            <span className="text-red-500">
                                Please enter a valid number of guests
                            </span>
                        )}
                    </div>
                    <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:justify-between md:items-center md:gap-6">
                        <div className="space-y-2">
                            <label className="label text-white" htmlFor="date">
                                Date:
                            </label>
                            <input
                                className="input w-full"
                                type="date"
                                id="date"
                                {...register("date", { required: true })}
                            />
                            {errors.date && (
                                <span className="text-red-500">
                                    This field is required
                                </span>
                            )}
                        </div>
                        <div className="space-y-2">
                            <label className="label text-white" htmlFor="time">
                                Time:
                            </label>
                            <input
                                className="input w-full"
                                type="time"
                                id="time"
                                {...register("time", { required: true })}
                            />
                            {errors.time && (
                                <span className="text-red-500">
                                    This field is required
                                </span>
                            )}
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label
                            className="label text-white"
                            htmlFor="additionalInfo"
                        >
                            Additional Info:
                        </label>
                        <textarea
                            id="additionalInfo"
                            name="additionalInfo"
                            rows={3}
                            cols={3}
                            className="input w-full h-24 md:h-48"
                            placeholder="Type Your message..."
                            {...register("additionalInfo")}
                        ></textarea>
                    </div>
                    <div className="space-y-2 flex-center-x">
                        <button
                            type="submit"
                            className="px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition duration-300 w-full"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ReservationForm;
