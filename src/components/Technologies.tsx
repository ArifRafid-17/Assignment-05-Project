import { use } from "react";
import type { Dispatch, SetStateAction } from "react";
import type { TechType } from "../types";
import TechCard from "./TechCard";
import SelectedCard from "./SelectedCard";

interface Props {
  techPromise: Promise<TechType[]>;
  selectedTechs: TechType[];
  setSelectedTechs: Dispatch<SetStateAction<TechType[]>>;
}

const Technologies = ({ techPromise, selectedTechs, setSelectedTechs }: Props) => {
  const technologies = use(techPromise);

  return (
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

      {/* Mobile: stacked. Laptop: cards (3 cols) + Your Stack (1 col) */}
      <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-4">
        {/* Cards grid */}
        <div className="grid grid-cols-1 items-start gap-4 sm:gap-5 md:grid-cols-2 lg:col-span-3 lg:grid-cols-3">
          {technologies.map((tech: TechType) => {
            return (
              <TechCard
                tech={tech}
                key={tech.id}
                selectedTechs={selectedTechs}
                setSelectedTechs={setSelectedTechs}
              />
            );
          })}
        </div>

        {/* Your Stack */}
        <div className="lg:col-span-1 lg:sticky lg:top-24">
          <SelectedCard
            selectedTechs={selectedTechs}
            setSelectedTechs={setSelectedTechs}
          />
        </div>
      </div>
    </section>
  );
};

export default Technologies;