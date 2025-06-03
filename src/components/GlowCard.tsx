import { useRef, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { debounce } from "../lib/utils";

interface ExpCard {
    review: string;
    imgPath: string;
    logoPath: string;
    title: string;
    date: string;
    responsibilities: string[];
}

interface GlowCardProps {
    card: ExpCard;
    index: number;
    children: React.ReactNode;
}

const GlowCard: React.FC<GlowCardProps> = ({ card, index, children }) => {
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const isLowEndDevice = useMediaQuery({ query: '(prefers-reduced-motion)' }) || 
                          navigator.hardwareConcurrency <= 4;

    useEffect(() => {
        // Skip glow effect on mobile or low-end devices
        if (isMobile || isLowEndDevice) return;
        
        const card = cardRefs.current[index];
        if (!card) return;
        
        // Set initial angle
        card.style.setProperty("--start", "60");
        
        return () => {
            // Cleanup
        };
    }, [index, isMobile, isLowEndDevice]);

    // Debounce the mouse move handler to improve performance
    const handleMouseMove = (index: number) => {
        // Skip on mobile or low-end devices
        if (isMobile || isLowEndDevice) return () => {};
        
        return debounce((e: React.MouseEvent<HTMLDivElement>) => {
            const card = cardRefs.current[index];
            if (!card) return;

            const rect = card.getBoundingClientRect();
            const mouseX = e.clientX - rect.left - rect.width / 2;
            const mouseY = e.clientY - rect.top - rect.height / 2;

            let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
            angle = (angle + 360) % 360;

            card.style.setProperty("--start", `${angle + 60}`);
        }, 10); // 10ms debounce
    };

    return (
        <div
            ref={(el) => {
                cardRefs.current[index] = el;
            }}
            onMouseMove={handleMouseMove(index)}
            className="card card-border timeline-card rounded-xl p-10 mb-5 break-inside-avoid-column"
        >
            {/* Only render glow effect on desktop */}
            {!isMobile && !isLowEndDevice && <div className="glow"></div>}
            
            <div className="flex items-center gap-1 mb-5">
                {Array.from({ length: 5 }, (_, i) => (
                    <img key={i} src="/images/star.png" alt="star" className="size-5" loading="lazy" />
                ))}
            </div>
            <div className="mb-5">
                <p className="text-white-50 text-lg">{card.review}</p>
            </div>
            {children}
        </div>
    );
};

export default GlowCard; 
