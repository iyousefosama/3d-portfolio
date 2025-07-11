import { useRef, useState, FormEvent, ChangeEvent } from "react";
import emailjs from "@emailjs/browser";
import TitleHeader from "../components/common/TitleHeader";
import Lottie from "lottie-react";
import contactAnimation from "../assets/animations/contact.json";
import React from "react";
import { motion, useAnimation, useInView } from "framer-motion"
import { sectionTitleVariant } from "../lib/motionVariants";

// Rename FormData interface to ContactFormData
interface ContactFormData {
    name: string;
    email: string;
    message: string;
}

const Contact: React.FC = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
    const controls = useAnimation();

    React.useEffect(() => {
        if (isInView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [isInView, controls])

    const [loading, setLoading] = useState<boolean>(false);
    const [form, setForm] = useState<ContactFormData>({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        try {
            if (!formRef.current) return;

            await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            // Reset form and stop loading
            setForm({ name: "", email: "", message: "" });
        } catch (error) {
            console.error("EmailJS Error:", error);
        } finally {
            setLoading(false); // Always stop loading, even on error
        }
    };

    return (
        <section ref={sectionRef} id="contact" className="flex-center py-20 section-padding">
            <motion.div
                className="w-full h-full md:px-10 px-5"
                initial="hidden"
                animate={controls}
                variants={sectionTitleVariant}
            >
                <TitleHeader
                    title="Get in Touch – Let's Connect"
                    sub="💬 Have questions or ideas? Let's talk! 🚀"
                />
                <div className="grid-12-cols mt-16">
                    <div className="xl:col-span-5">
                        <div className="flex-center card-border rounded-xl p-10">
                            <form
                                ref={formRef}
                                onSubmit={handleSubmit}
                                className="w-full flex flex-col gap-7"
                            >
                                <div>
                                    <label htmlFor="name">Your name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        placeholder="What's your good name?"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email">Your Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="What's your email address?"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message">Your Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange}
                                        placeholder="How can I help you?"
                                        rows={5}
                                        required
                                        className="resize-none"
                                    />
                                </div>

                                <button type="submit" className={"btn"}>
                                    <p className="text">
                                        {loading ? "Sending..." : "Send Message"}
                                    </p>
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="xl:col-span-7 min-h-96 hidden xl:block">
                        <div className="bg-[#cd7c2e] w-full h-full rounded-3xl overflow-hidden">
                            <Lottie animationData={contactAnimation} loop autoplay className="max-h-[400px] w-full" />
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact; 