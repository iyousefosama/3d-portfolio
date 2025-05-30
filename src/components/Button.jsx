const Button = ({ text, className, id }) => (
    <a className={`${className ?? ""} cta-wrapper`} id={id ?? ""}>
        <div className={"cta-button group"}>
            <div className={"bg-circle"}/>
            <p className={"text"}>
                {text}
            </p>
            <div className={"arrow-wrapper"}>
                <img src={"/images/arrow-down.svg"} alt={"arrow-down"}/>
            </div>
        </div>
    </a>
);

export default Button;