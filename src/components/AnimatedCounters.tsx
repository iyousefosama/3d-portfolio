import { counterItems } from "../../constants/index";
import CountUp from "react-countup";

const AnimatedCounters: React.FC = () => (
    <div id={"counters"} className={"padding-x-lg mt-32 lg:mt-0"}>
        <div className={"mx-auto grid-4-cols"}>
            {counterItems.map((item, key) => (
                <div className={"flex flex-col justify-center bg-zinc-900 p-10 rounded-lg"} key={key}>
                    <div key={key} className={"counter-number text-white text-5xl font-bold mb-2"}>
                        <CountUp end={item.value} suffix={item.suffix} />
                    </div>
                    <div className={"text-white-50 text-lg"}>
                        {item.label}
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default AnimatedCounters; 