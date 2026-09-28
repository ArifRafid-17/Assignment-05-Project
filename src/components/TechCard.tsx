import type { TechType } from "../types";

interface Props {
  tech: TechType;
}

const badgeColors: Record<string, string> = {
  Popular: "bg-sky-50 text-sky-500 border-sky-200",
  Versatile: "bg-emerald-50 text-emerald-600 border-emerald-200",
  Fast: "bg-orange-50 text-orange-500 border-orange-200",
  Standard: "bg-emerald-50 text-emerald-600 border-emerald-200",
  "Top SQL": "bg-blue-50 text-blue-500 border-blue-200",
  Cache: "bg-red-50 text-red-500 border-red-200",
  Ubiquitous: "bg-yellow-50 text-yellow-600 border-yellow-200",
  Essential: "bg-blue-50 text-blue-500 border-blue-200",
  Robust: "bg-blue-50 text-blue-500 border-blue-200",
  Modern: "bg-cyan-50 text-cyan-600 border-cyan-200",
  Containers: "bg-sky-50 text-sky-500 border-sky-200",
};

const TechCard = ({ tech }: Props) => {
  const badgeStyle =
    badgeColors[tech.badge] || "bg-gray-50 text-gray-500 border-gray-200";

  return (
    <div className="card bg-base-100 w-full border border-gray-200 shadow-sm">
      <div className="card-body p-5 gap-0">
        {/* Top row: icon on the left, badge on the right */}
        <div className="flex items-start justify-between">
          <img src={tech.icon} alt={tech.name} className="w-7 h-7" />
          <span className={`badge badge-sm rounded-full border ${badgeStyle}`}>
            {tech.badge}
          </span>
        </div>

        {/* Name */}
        <h2 className="card-title mt-4 text-lg font-bold text-slate-900">
          {tech.name}
        </h2>

        {/* Description */}
        <p className="mt-2 text-xs leading-relaxed text-slate-400">
          {tech.description}
        </p>

        {/* Info row: category, difficulty, rating */}
        <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3 text-xs">
          <span className="badge badge-sm badge-ghost rounded-md bg-slate-100 text-slate-600">
            {tech.category}
          </span>
          <span className="text-slate-400">{tech.difficulty}</span>
          <span className="flex items-center gap-1 font-medium text-slate-700">
            <span className="text-yellow-400">★</span>
            {tech.rating}
          </span>
        </div>

        {/* Button */}
        <button className="btn btn-neutral mt-4 w-full rounded-lg bg-slate-900 text-white">
          Add to Stack
        </button>
      </div>
    </div>
  );
};

export default TechCard;