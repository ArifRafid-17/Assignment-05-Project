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

function App() {
  const [selectedTechs, setSelectedTechs] = useState<TechType[]>([]);

  return (
    <div>
      <Nav />
      <Banner />
      <Suspense fallback={<div>Loading....</div>}>
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