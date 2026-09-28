import React, { use } from 'react';
import type { TechType } from "../types";

interface Props {
    techPromise: TechType;
}
const Technologies = ({techPromise}: props) => {
    const technologies = use(techPromise)

    return (
        <div>
            <div>
                <h2>Explore the Technologies</h2>
                <p>Pick one technology per category to build your ideal stack.</p>
            </div>

            <div>
                {
                    
                }
            </div>
        </div>
    );
};

export default Technologies;