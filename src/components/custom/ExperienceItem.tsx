import type React from "react"
import {
  Code2,
  Server,
  GitBranch,
  Gamepad2,
  CodepenIcon as Javascript,
  FileCode,
  Calendar,
  ArrowUpRight,
  Zap,
  CheckCircle,
} from "lucide-react"

interface ExpCard {
  review: string
  imgPath: string
  iconType: "react" | "nodejs" | "git" | "unity" | "javascript" | "typescript"
  title: string
  date: string
  responsibilities: string[]
  technologies: string[]
}

interface ExperienceItemProps {
  card: ExpCard
  index: number
  isLast: boolean
}

const iconMap = {
  react: Code2,
  nodejs: Server,
  git: GitBranch,
  unity: Gamepad2,
  javascript: Javascript,
  typescript: FileCode,
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ card, index }) => {
  const isEven = index % 2 === 0
  const IconComponent = iconMap[card.iconType]

  const accentColors = [
    {
      primary: "text-cyan-400",
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/20",
      glow: "shadow-cyan-500/20",
    },
    {
      primary: "text-orange-400",
      bg: "bg-orange-500/10",
      border: "border-orange-500/20",
      glow: "shadow-orange-500/20",
    },
    {
      primary: "text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20",
      glow: "shadow-emerald-500/20",
    },
  ]

  const currentAccent = accentColors[index % accentColors.length]

  return (
    <div className="relative group">


      {/* Main Content */}
      <div className={`relative z-10 flex items-center justify-center min-h-[400px] py-16`}>
        <div
          className={`w-full max-w-5xl flex items-center gap-12 ${isEven ? "flex-row" : "flex-row-reverse"} lg:flex-row`}
        >
          {/* Content Side */}
          <div className={`flex-1 ${isEven ? "text-left" : "text-right lg:text-left"}`}>
            <div className="space-y-6">
              {/* Header */}
              <div className="space-y-3">
                <div
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${currentAccent.bg} ${currentAccent.border} border`}
                >
                  <Calendar className={`w-4 h-4 ${currentAccent.primary}`} />
                  <span className="text-gray-300 text-sm font-medium">{card.date}</span>
                </div>

                <h3 className="text-3xl lg:text-4xl font-bold text-white leading-tight">{card.title}</h3>
              </div>

              {/* Technologies */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Zap className={`w-5 h-5 ${currentAccent.primary}`} />
                  <span className={`font-semibold ${currentAccent.primary}`}>Tech Stack</span>
                </div>
                <div className={`flex flex-wrap gap-2 ${isEven ? "justify-start" : "justify-end lg:justify-start"}`}>
                  {card.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-900 text-gray-300 rounded-lg text-sm border border-gray-800 hover:border-gray-700 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Responsibilities */}
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-gray-200 flex items-center gap-2">
                  <CheckCircle className={`w-5 h-5 ${currentAccent.primary}`} />
                  Key Achievements
                </h4>
                <ul className="space-y-3">
                  {card.responsibilities.map((responsibility, idx) => (
                    <li
                      key={idx}
                      className={`flex items-start gap-3 text-gray-400 leading-relaxed ${isEven ? "" : "flex-row-reverse lg:flex-row text-right lg:text-left"}`}
                    >
                      <div className={`w-2 h-2 ${currentAccent.bg} rounded-full mt-2 flex-shrink-0`} />
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Review */}
              <div
                className={`relative p-6 bg-gray-950 border border-gray-800 rounded-2xl ${currentAccent.glow} shadow-2xl`}
              >
                <div className="absolute -top-2 -left-2 w-4 h-4 bg-gray-900 border border-gray-700 rounded-full" />
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-gray-900 border border-gray-700 rounded-full" />
                <p className="text-gray-300 italic leading-relaxed">"{card.review}"</p>
              </div>
            </div>
          </div>

          {/* Icon Side */}
          <div className="flex-shrink-0 hidden lg:block">
            <div className="relative">
              {/* Main Icon Container */}
              <div
                className={`w-32 h-32 ${currentAccent.bg} rounded-3xl border-2 ${currentAccent.border} flex items-center justify-center group-hover:scale-110 transition-all duration-500 ${currentAccent.glow} shadow-2xl`}
              >
                <IconComponent className={`w-16 h-16 ${currentAccent.primary}`} />
              </div>

              {/* Floating Elements */}
              <div
                className={`absolute -top-3 -right-3 w-6 h-6 ${currentAccent.bg} rounded-full border ${currentAccent.border} flex items-center justify-center`}
              >
                <ArrowUpRight className={`w-3 h-3 ${currentAccent.primary}`} />
              </div>

              {/* Status Indicator */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 flex items-center gap-2 bg-green-900/50 px-3 py-1 rounded-full border border-green-700/50">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-300 text-xs font-medium">Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-radial from-gray-700 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-gradient-radial from-gray-600 to-transparent rounded-full blur-3xl" />
      </div>
    </div>
  )
}

export default ExperienceItem
