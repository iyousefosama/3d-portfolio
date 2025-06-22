import { ChevronDown } from "lucide-react"

const ScrollSection = () => {
    return (
        <div className="absolute top-80 right-4 min-h-[70vh] p-4 z-20 opacity-60 rounded-md flex flex-col items-center justify-center md:hidden">
            <span>
                S
            </span>
            <span>
                C
            </span>
            <span>
                R
            </span>
            <span>
                O
            </span>
            <span>
                L
            </span>
            <span>
                L
            </span>
            <span>
                <ChevronDown className="w-4 h-4 opacity-100 relative top-8 animate-bounce" />
            </span>
        </div>
    )
}

export default ScrollSection