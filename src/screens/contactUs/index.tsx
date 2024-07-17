import HText from "@/shared/HText";

import { useForm } from "react-hook-form";
import { useEffect, useRef, useState } from 'react';



const ContactUs = () => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    const handleScroll = () => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const elementTop = rect.top;
            const elementBottom = rect.bottom;
            const elementHeight = rect.height;

            const topVisible = elementTop < windowHeight - elementHeight * 0.1;
            const bottomVisible = elementBottom > elementHeight * 0.1;

            if (topVisible && bottomVisible) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Check visibility on mount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const {
        register,
        trigger,
        formState: { errors }
    } = useForm();

    const onSubmit = async (e: any) => {
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault();
        }
    }

    return (
        <div 
            id="contactus" 
            className={`mx-auto w-5/6 pt-24 pb-32 md:flex md:gap-10 ${isVisible ? 'animate-fade-up animate-once animate-duration-1000' : 'opacity-0'}`}
            ref={ref}
        >
            {/* HEADING AND DESCRIPTION */}
            <div className=" w-full md:w-3/4">
                <HText>
                    <span>JOIN NOW </span>TO GET IN SHAPE
                </HText>
                <p className="mt-4 py-2">
                    Ready to transform your health and fitness journey? 
                    Join us now and take the first step towards achieving the best version of yourself. 
                    Our program is designed to cater to all fitness levels, offering personalized plans, 
                    expert guidance, and a supportive community. Whether you're looking to lose weight,
                    build muscle, or simply maintain a healthy lifestyle, we have everything you need to reach your goals.
                </p>
            </div>
            {/* FORM AND IMAGE */}
            <div className="mt-10 justify-between gap-8 md:flex">
                <div>
                    <form
                        target="_blank"
                        onSubmit={onSubmit}
                        action="https://formsubmit.co/rejuruhe@mailgolem.com"
                        method="POST"
                    >
                        <input 
                            className="w-full rounded-lg bg-red-300 px-5 py-3 placeholder-white mt-3"
                            type="text"
                            placeholder="NAME"
                            {...register("name", {
                                required: true,
                                maxLength: 100,
                            })}
                        />
                        {errors.name && (
                            <p className="mt-1 text-red-400">
                                {errors.name.type === "required" && "This field is required"}
                                {errors.name.type === "maxLength" && "Max Length is 100 characters"}
                            </p>
                        )}

                        <input 
                            className="w-full rounded-lg bg-red-300 px-5 py-3 placeholder-white mt-3"
                            type="text"
                            placeholder="EMAIL"
                            {...register("email", {
                                required: true,
                                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            })}
                        />
                        {errors.email && (
                            <p className="mt-1 text-red-400">
                                {errors.email.type === "required" && "This field is required"}
                                {errors.email.type === "pattern" && "Invalid Email Address"}
                            </p>
                        )}

                        <textarea 
                            className="w-full rounded-lg bg-red-300 px-5 py-3 placeholder-white mt-3"
                            placeholder="MESSAGE"
                            rows={4}
                            cols={50}
                            {...register("message", {
                                required: true,
                                maxLength: 2000,
                            })}
                        />
                        {errors.message && (
                            <p className="mt-1 text-red-400">
                                {errors.message.type === "required" && "This field is required"}
                                {errors.message.type === "maxLength" && "Max Length is 2000 characters"}
                            </p>
                        )}

                        <button
                            type="submit"
                            className="mt-5 rounded-lg bg-yellow-400 px-20 py-3 transition-duration-500 hover:text-white"
                        >
                            SUBMIT
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactUs;
