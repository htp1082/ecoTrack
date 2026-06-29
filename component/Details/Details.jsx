import React, { use } from 'react';
import { useLoaderData } from 'react-router';
import { IoMdArrowRoundBack } from "react-icons/io";
import { AuthContext } from '../../auth/AuthProvider';
import Swal from 'sweetalert2'
import { useState } from 'react';

const Details = () => {

    const challengUrl = useLoaderData()
    console.log(challengUrl)
    const { _id, title, target, category, createdBy, description, duration, imageUrl, startDate, endDate } = challengUrl

    const { user } = use(AuthContext)
    console.log(user?.email)

    const [participateCount, setParticipateCount] = useState(challengUrl.participants)
    const [loading, setLoading] = useState(false);
    const [joined, setjoined] = useState(false)

    const joinChallengeHandler = (e) => {

        e.preventDefault()
        setLoading(true)
        const joinData = {
            userId: user?.email
        }
        fetch(`http://localhost:3000/challenges/join/${_id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(joinData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.success === false) {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Something went wrong!",
                        footer: "<a href=\"#\">Why do I have this issue?</a>"
                    });
                    return;
                }
                Swal.fire({
                    title: "Save the data",
                    icon: "success",
                    draggable: true
                })
                if (data.modifiedCount > 0) {
                    setParticipateCount(pre => pre + 1)
                }
                setjoined(true)
            }).catch((eror) => {
                console.log(eror)
            }).finally(() => {
                setLoading(false)
            })
    }
    return (
        <div>

            <div className='w-11/12 mx-auto flex gap-5 mt-4'>
                {/* left side  */}
                <div className="left-side w-3/6">
                    <div className='w-full rounded-xl h-[500px] bg-green-400'>
                        <img className='bg-black image h-full w-fit object-cover' src={imageUrl} alt="" />
                    </div>
                    <div className='mt-3'>
                        <div>
                            <div className="divider"></div>
                            <p className='text-justify text-xl'>{description}</p>
                        </div>
                    </div>
                </div>

                {/* right side */}
                <div className='rigt-side w-3/6'>
                    <div>
                        <h2 className='text-2xl font-bold'><IoMdArrowRoundBack /> Back to Home</h2>
                    </div>
                    <div>
                        <h1 className='text-4xl mt-6'>{title}</h1>
                        <button className='btn rounded-3xl bg-purple-400 mt-4'>{category}</button>
                    </div>

                    <div className='p-5 bg-gray-200 mt-6 rounded-xl'>
                        <h2 className='text-[#4CAF50] text-2xl'>Time: {duration}</h2>
                        <h2 className='text-[#4CAF50] text-2xl'>StartDate: {startDate}</h2>
                        <h2 className='text-[#4CAF50] text-2xl'>EndDate: {endDate}</h2>
                    </div>

                    <div className='p-5 bg-gray-200 mt-6 rounded-xl space-y-2'>
                        <h2 className='font-bold'>createdBy:<span className='font-light'> {createdBy}</span></h2>
                        <h2 className='font-bold'>Target:<span className='font-light'> {target}</span></h2>
                        <h2 className='font-bold'>Participants:<span className='font-light'> {participateCount}</span></h2>
                    </div>

                    <div className='mt-5'>
                        <button onClick={joinChallengeHandler} className='btn btn-primary w-full' disabled={loading || joined} >
                            {
                                loading? "Joining...": joined?"Already Joind":"Join Challenge"
                            }
                        </button>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Details;