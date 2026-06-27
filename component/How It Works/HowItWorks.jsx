import React from 'react';
import { GiProgression } from "react-icons/gi";
import { FaShare } from "react-icons/fa";
import { RiPlantFill } from "react-icons/ri";

const HowItWorks = () => {
    return (
        <div>
            <h2 className='text-[var(--accent)] text-center text-2xl font-semibold mt-5'>How It Works</h2>
            <div className='w-11/12 mx-auto flex flex-col lg:flex-row gap-8 items-center justify-around p-10 '>

                {/* card 01 */}
                <div className="card w-70 bg-base-100 card-md shadow-sm bg-green-100">
                    <div className="card-body">
                        <h2 className="card-title text-[var(--accent)]"><RiPlantFill />Join a Challenge</h2>
                        <p className='text-[var(--secondary)]'>Choose an eco challenge and participate.</p>
                        
                    </div>
                </div>

                {/* card 02 */}
                <div className="card w-70 bg-base-100 card-md shadow-sm bg-green-100">
                    <div className="card-body">
                        <h2 className="card-title text-[var(--accent)]"><GiProgression />Join a Challenge</h2>
                        <p className='text-[var(--secondary)]'>Update your progress regularly.</p>
                    </div>
                </div>

                {/* card 03 */}
                <div className="card w-70 bg-base-100 card-md shadow-sm bg-green-100">
                    <div className="card-body">
                        <h2 className="card-title text-[var(--accent)]"><FaShare />Share Tips</h2>
                        <p className='text-[var(--secondary)]'>Share eco-friendly ideas with the community.</p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default HowItWorks;