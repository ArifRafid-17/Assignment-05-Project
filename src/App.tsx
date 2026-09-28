import "./App.css";
import { Suspense, useState } from "react";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Technologies from "./components/Technologies";
import type { TechType } from "./types";

const fetchdata = async (): Promise<TechType[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};



const techPromise = fetchdata();

const LoadingFallback = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-32">
      {/* Spinning circle */}
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-pink-600" />

      {/* Loading text */}
      <p className="text-sm font-medium text-slate-400">
        Loading{" "}
        <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent font-semibold">
          Technologies
        </span>
        ...
      </p>
    </div>
  );
};

function App() {
  const [selectedTechs, setSelectedTechs] = useState<TechType[]>([]);

  return (
    <div>
      <Nav />
      <Banner />
      <Suspense fallback={<LoadingFallback/>}>
        <Technologies
          techPromise={techPromise}
          selectedTechs={selectedTechs}
          setSelectedTechs={setSelectedTechs}
        />
      </Suspense>
    </div>
  );
}

export default App;