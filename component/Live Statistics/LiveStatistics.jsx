import React from 'react';
import person from '../../assets/group.png'
import tree from '../../assets/tree plantation copy.png'
import plastic from '../../assets/plastic reduce copy.jpg'
import carbon from '../../assets/carbon.avif'
const LiveStatistics = () => {
    return (

        <div className='bg-gray-200 '>
            <h2 className='heading-section'>Live Statistics</h2>
            <div className='w-11/12 mx-auto  grid grid-cols-1 lg:grid-cols-4 gap-5  p-10 '>

                <div className='flex items-center gap-6 border-2 border-green-500 p-5 bg-white rounded-2xl'>
                    <img className='w-10' src={person} alt="person" />
                    <div className='font-[var--body-font] '>
                        <h2 className='text-[var(--accent)] text-xl font-semibold'>Total Community</h2>
                        <p>20</p>
                    </div>
                </div>

                <div className='flex items-center gap-6 border-2 border-green-500 p-5 bg-white rounded-2xl'>
                    <img className='w-15' src={carbon} alt="person" />
                    <div className='font-[var--body-font] '>
                        <h2 className='text-[var(--accent)] text-xl font-semibold'>Total CO₂ saved</h2>
                        <p>20</p>
                    </div>
                </div>

                <div className='flex items-center gap-6 border-2 border-green-500 p-5 bg-white rounded-2xl'>
                    <img className='w-15' src={plastic} alt="person" />
                    <div className='font-[var--body-font] font-semibold '>
                        <h2 className='text-[var(--accent)] text-xl'>Plastic reduced</h2>
                        <p>20</p>
                    </div>
                </div>

                <div className='flex items-center gap-6 border-2 border-green-500 p-5 bg-white rounded-2xl'>
                    <img className='w-15' src={tree} alt="person" />
                    <div className='font-[var--body-font] font-semibold'>
                        <h2 className='text-[var(--accent)] text-xl'>Total Trees Planted</h2>
                        <p>20</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default LiveStatistics;