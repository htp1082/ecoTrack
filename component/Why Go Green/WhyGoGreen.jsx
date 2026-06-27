import React from 'react';
import earth from '../../assets/planet-earth.png'
const WhyGoGreen = () => {
    return (
        <div className='bg-green-100'>
            <h2 className='text-center heading-section'>Why go green</h2>
            <p className=' text-justify lg:text-center max-w-8/12 mx-auto'>Going green means making simple, eco-friendly choices that benefit both people and the planet. By reducing waste, conserving resources, and adopting sustainable habits, we can protect nature, improve our communities, and build a healthier future for generations to come.</p>
            <div className='w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-2'>

                <div className='flex items-center gap-3 p-5'>
                    <img className='w-14' src={earth} alt="" />
                    <h3 className=' text-[var(--secondary)]'>Reduce pollution and protect natural resources.</h3>
                </div>

                <div className='flex items-center gap-3 p-5'>
                    <img className='w-14' src={earth} alt="" />
                    <h3 className=' text-[var(--secondary)]'>Save energy, water, and everyday expenses.</h3>
                </div>
                <div className='flex items-center gap-3 p-5'>
                    <img className='w-14' src={earth} alt="" />
                    <h3 className=' text-[var(--secondary)]'>Improve personal health and well-being.</h3>
                </div>

                <div className='flex items-center gap-3 p-5'>
                    <img className='w-14' src={earth} alt="" />
                    <h3 className=' text-[var(--secondary)]'>Reduce your carbon footprint</h3>
                </div>

                <div className='flex items-center gap-3 p-5'>
                    <img className='w-14' src={earth} alt="" />
                    <h3 className=' text-[var(--secondary)]'>Create a cleaner and healthier community.</h3>
                </div>

                <div className='flex items-center gap-3 p-5'>
                    <img className='w-14' src={earth} alt="" />
                    <h3 className=' text-[var(--secondary)]'>Help build a sustainable future for generations.</h3>
                </div>


            </div>
        </div>
    );
};

export default WhyGoGreen;