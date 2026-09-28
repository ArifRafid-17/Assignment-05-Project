import React, { use } from 'react';
import type { TechType } from "../types";
import TechCard from './TechCard';

interface Props {
    techPromise: Promise <TechType[]>;
}
const Technologies = ({techPromise}: Props) => {
    const technologies = use(techPromise)

    return (
        <div>
            <div>
                <h2>Explore the Technologies</h2>
                <p>Pick one technology per category to build your ideal stack.</p>
            </div>

            <div>
                {
                   technologies.map( (tech : TechType , ind: number )=>{

                     return (
                        <TechCard tech = {tech} key ={ind}/>
                     )
                   })
                }
            </div>
        </div>
    );
};

export default Technologies;