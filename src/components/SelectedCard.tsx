import type { Dispatch, SetStateAction } from "react";
import type { TechType } from "../types";
import { Bounce, toast } from "react-toastify";

interface Props {
  selectedTechs: TechType[];
  setSelectedTechs: Dispatch<SetStateAction<TechType[]>>;
}

const SelectedCard = ({ selectedTechs, setSelectedTechs }: Props) => {
  const isEmpty = selectedTechs.length === 0;

 const handleRemove = (tech: TechType) => {
  setSelectedTechs(selectedTechs.filter((item) => item.id !== tech.id));
    toast.info(`${tech.name} removed from your stack`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  const handleRemoveAll = () => {
    setSelectedTechs([]);
    toast.error("All technologies removed", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  return (
    <div className="w-full rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <h3 className="text-base font-bold text-slate-900">Your Stack</h3>

      {/* Empty state */}
      {isEmpty && (
        <>
          <p className="mt-1 text-xs text-slate-400">
            No technologies selected yet.
          </p>
          <div className="mt-4 flex h-20 items-center justify-center rounded-xl border border-dashed border-gray-300">
            <p className="text-xs text-slate-400">Your stack is empty.</p>
          </div>
        </>
      )}

      {/* Filled state */}
      {!isEmpty && (
        <>
          <p className="mt-1 text-xs text-slate-400">
            {selectedTechs.length} Technology Selected
          </p>

          <div className="mt-4 flex flex-col gap-2">
            {selectedTechs.map((tech) => (
              <div
                key={tech.id}
                className="flex items-center justify-between rounded-lg border border-gray-200 px-3 py-2"
              >
                <div className="flex items-center gap-3">
                  <img src={tech.icon} alt={tech.name} className="h-7 w-7" />
                  <div>
                    <p className="text-xs font-bold text-slate-900">
                      {tech.name}
                    </p>
                    <p className="text-[10px] text-slate-400">
                      {tech.category}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleRemove(tech)}
                  className="text-lg text-slate-400 hover:text-slate-700 cursor-pointer"
                  aria-label={`Remove ${tech.name}`}
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={handleRemoveAll}
            className="mt-6 w-full rounded-lg border border-red-200 py-2 text-sm font-semibold text-red-600 hover:bg-red-50 cursor-pointer"
          >
            Remove All
          </button>
        </>
      )}
    </div>
  );
};

export default SelectedCard;
