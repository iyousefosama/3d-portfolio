import { social } from "../../../constants";
import SocialButton from "@/components/custom/SocialButton.tsx";
import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="flex flex-col justify-center">
                    <p>
                        💖 Let's connect and build something amazing together!
                    </p>
                </div>
                <div className="socials">
                    {social.map((social, index) => (
                        <SocialButton key={index} icon={social.icon} link={social.link} />
                    ))}
                </div>
                <div className="flex flex-col justify-center">
                    <p className="text-center md:text-end">
                        © {new Date().getFullYear()} Yousef osama. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 