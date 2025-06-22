import { abilities } from "../../constants/index";

const FeatureCards: React.FC = () => (
  <div className="w-full padding-x-lg">
    <div className="mx-auto grid-3-cols">
      {abilities.map(({ imgPath, title, desc }) => (
        <div
          key={title}
          className="bg-gradient-to-br from-white/10 to-zinc-900/50 backdrop-blur-sm border border-white/2 rounded-xl p-8 flex flex-col gap-4 hover:brightness-105 hover:to-white/10 transition duration-300"
        >
          <div className="size-14 flex items-center justify-center rounded-full">
            <img src={imgPath} alt={title} className="size-12" />
          </div>
          <h3 className="text-white text-2xl font-semibold mt-2">{title}</h3>
          <p className="text-white-50 text-lg">{desc}</p>
        </div>
      ))}
    </div>
  </div>
);

export default FeatureCards; 