import { scrollToElementById } from "@/lib/utils";

interface ButtonProps {
    text?: string;
    className?: string;
    id?: string;
}

/**
 * A reusable CTA button component.
 * When clicked, it scrolls smoothly to the section with ID "counter",
 * with a small offset from the top for better visual placement.
 */

const Button = ({ text, className="", id="#hero" }: ButtonProps) => {
  return (
    <a
      onClick={(e) => {
        e.preventDefault(); // Stop the link from jumping instantly

        scrollToElementById(id);
      }}
      className={`${className} cta-wrapper`} // Add base + extra class names
    >
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/icons/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </a>
  );
};

export default Button;