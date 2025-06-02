import { social } from "../../constants";

const Footer = () => {
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
                        <a key={index} className="icon" href={social.link} target="_blank">
                            <img src={social.imgPath} alt={social.name} />
                        </a>
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