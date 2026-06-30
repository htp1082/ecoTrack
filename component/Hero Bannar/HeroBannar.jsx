import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { FaArrowAltCircleDown } from "react-icons/fa";
const HeroBannar = () => {

    const [bannar, setBannar] = useState([])

    useEffect(() => {

        fetch('http://localhost:3000/challenges/')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setBannar(data.slice(0, 3))
            })

    }, [])
    return (
        <div className="carousel w-full bg-gradient-to-r from-[#dff6e4] via-[#a8e6b0] to-[#4CAF50]">
            {
                bannar.map((challenge,index) => (
                    console.log(challenge),
                    <div id={`slide${index + 1}`} key={index} className="carousel-item relative w-full">
                        <div className="hero min-h-60 ">
                            <div className="hero-content w-full  flex-col lg:flex-row">
                                <img
                                    src={challenge.imageUrl}
                                    alt={challenge.title}
                                    className="w-6/12 rounded-lg shadow-2xl "
                                />
                                
                                <div>
                                    <h3 className='text-green-700 font-semibold mb-3'>Featured challenge <FaArrowAltCircleDown /></h3>
                                    <h1 className="text-5xl font-bold font-[var--heading-font] text-[var(--primary)]">{challenge.title}</h1>
                                    <p className="py-6 font-[var--body-font] text-xl">
                                        {challenge.description}
                                    </p>
                                    <button className="challenge-btn">View Challenge</button>
                                </div>
                            </div>
                        </div>
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href={`#slide${index === 0 ? bannar.length : index}`} className="btn btn-circle">❮</a>
                            <a href={`#slide${index === bannar.length - 1 ? 1:index + 2}`} className="btn btn-circle">❯</a>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default HeroBannar;
