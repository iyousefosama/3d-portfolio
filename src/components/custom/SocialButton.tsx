import { Button } from "@/components/ui/button";
import { IconType } from "react-icons";

type SocialButtonProps = {
    link: string;
    icon: IconType; // this allows passing any react-icon
};

const SocialButton = ({ link, icon: Icon }: SocialButtonProps) => {
    return (
        <a href={link} className="hover:cursor-pointer" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="icon">
                <Icon className="h-8 w-8" />
            </Button>
        </a>
    );
};

export default SocialButton;
