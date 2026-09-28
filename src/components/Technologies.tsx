import { use } from "react";
import type { TechType } from "../types";
import TechCard from "./TechCard";

interface Props {
  techPromise: Promise<TechType[]>;
}

const Technologies = ({ techPromise }: Props) => {
  const technologies = use(techPromise);

  return (
    // px-4 on mobile, px-6 on tablet, px-8 on laptop
    <section
      id="technologies"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-12 lg:pb-20"
    >
      {/* Heading part */}
      <div className="mb-6 lg:mb-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
          Explore the{" "}
          <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-slate-400">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      {/* Cards grid: 1 column on mobile, 2 on tablet, 3 on laptop */}
      <div className="grid grid-cols-1 items-start gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
        {technologies.map((tech: TechType, ind: number) => {
          return <TechCard tech={tech} key={ind} />;
        })}
      </div>
    </section>
  );
};

export default Technologies;