import React, { useState } from 'react';
import { useEffect } from 'react';
import TipsCard from '../Tips Card/TipsCard'
const RecentTips = () => {
    const [tips, setTips] = useState([]);

    useEffect(() => {

        fetch('http://localhost:3000/tips/latestTips')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setTips(data)
            })

    }, [])

    return (
        <div className='bg-green-100 '>

            <h2 className='text-center heading-section'>Recent Tips</h2>
            <div className='w-11/12 mx-auto grid grid-cols-3 pb-10'>
                {
                    tips.map((sTips, index) => <TipsCard key={index} sTips={sTips}></TipsCard>)
                }
            </div>

        </div>
    );
};

export default RecentTips;