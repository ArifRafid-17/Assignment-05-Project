import "./App.css";
import { Suspense } from "react";
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
  return (
    <div>
      <Nav />
      <Banner />
      <Suspense fallback={<div>Loading....</div>}>
        <Technologies techpromise={techPromise} />
      </Suspense>
    </div>
  );
}

export default App;
