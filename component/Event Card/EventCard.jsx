import React from 'react';
import { TiLocation } from "react-icons/ti";
import { MdDateRange } from "react-icons/md";

const EventCard = ({sEvent}) => {
    console.log(sEvent);
    const {title,date,location,description} = sEvent
    return (
        <div>
            <div className="card mt-5">
                  <div className="card bg-base-100 w-96 shadow-sm">
                    <div className="card-body">
                      <h2 className="card-title font-[var(--heading-font)] text-[var(--accent)]">{title}</h2>

                      <p>{description.split(" ").length>8? description.split(" ").slice(0,8).join(" ")+"...": description}</p>

                      <div className='flex gap-2 items-center'>
                        <TiLocation />
                        <h2 className="card-title text-[var(--text-secondary)]">{location}</h2>
                      </div>

                        <div className='flex gap-2 items-center'>
                       <MdDateRange />
                        <h2 className="card-title text-[var(--text-secondary)]">{date}</h2>
                      </div>

                     
                      {/* <div className="card-actions justify-end">
                        <button className="button2">Preview</button>
                      </div> */}
                    </div>
                  </div>
                </div>
        </div>
    );
};

export default EventCard;