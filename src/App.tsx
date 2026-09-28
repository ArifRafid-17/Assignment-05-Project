import "./App.css";
import { Suspense } from "react";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Technologies from "./components/Technologies";
import type { TechType } from "./types";

const fetchData = async (): Promise<TechType[]> => {
  const res = await fetch("/data.json");
  if (!res.ok) {
    throw new Error(`Failed to load data: ${res.statusText}`);
  }
  return res.json();
};

// Created once outside the render cycle
const techPromise = fetchData();

function App() {
  return (
    <div>
      <Nav />
      <Banner />
      <Suspense fallback={<div>Loading....</div>}>
        <Technologies techPromise={techPromise} />
      </Suspense>
    </div>
  );
}

export default App;