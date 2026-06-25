import React from 'react';
import { FaArrowAltCircleDown } from "react-icons/fa";
const HeroBannar = () => {
    return (
        <div>
            <div className="carousel w-full bg-gradient-to-r from-[#d2ede5] via-[#9de0b7] to-[#7beda5]">

                {/* slide 01 */}
                <div id="slide1" className="carousel-item relative w-full">
                    <div className="hero min-h-60 ">
                        <div className="hero-content w-full  flex-col lg:flex-row">
                            <img
                                src="https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                className="w-6/12 rounded-lg shadow-2xl "
                            />
                            <div>
                                <h3 className='text-green-700 font-semibold mb-3'>Featured challenge <FaArrowAltCircleDown /></h3>
                                <h1 className="text-5xl font-bold font-[var--heading-font] text-white"> Zero Waste Challenge</h1>
                                <p className="py-6 font-[var--body-font] text-xl">
                                    Reduce waste, recycle smarter, and track your daily sustainable actions with EcoTrack.
                                </p>
                                <button className="btn w-80 bg-green-400 font-bold  text-red-500 rounded-2xl">View Challenge</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>

                {/* slide 02 */}
                <div id="slide2" className="carousel-item relative w-full">
                    <div className="hero-content w-full  flex-col lg:flex-row">
                        <img
                            src="https://t3.ftcdn.net/jpg/11/11/76/76/360_F_1111767661_wiydhBN5NiiP9Lxe3WWOdzGYcYI9AgXm.jpg"
                            className="w-6/12 rounded-lg shadow-2xl "
                        />
                        <div>
                            <h3 className='text-green-700 font-semibold mb-3'>Featured challenge <FaArrowAltCircleDown /></h3>
                            <h1 className="text-5xl font-bold font-[var--heading-font] text-white"> Tree Plantation Drive</h1>
                            <p className="py-6 font-[var--body-font]">
                                Plant a tree, share your contribution, and take one step toward a healthier planet.
                            </p>
                            <button className="btn w-80 bg-green-400 font-bold  text-red-500 rounded-2xl">View Challenge</button>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>

                {/* slide 03 */}
                <div id="slide3" className="carousel-item relative w-full">
                    <div className="hero-content w-full  flex-col lg:flex-row">
                        <img
                            src="https://www.tu-untangle.com/cdn/shop/articles/optimized_Plastic_free_week_Shopify.webp?v=1767692758"
                            className="w-6/12 rounded-lg shadow-2xl "
                        />
                        <div>
                            <h3 className='text-green-700 font-semibold mb-3'>Featured challenge <FaArrowAltCircleDown /></h3>
                            <h1 className="text-5xl font-bold text-white">Plastic Free Week</h1>
                            <p className="py-6">
                                Avoid single-use plastic for 7 days and build eco-friendly habits for a cleaner future.
                            </p>
                            <button className="btn w-80 bg-green-400 font-bold  text-red-500 rounded-2xl">View Challenge</button>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HeroBannar;