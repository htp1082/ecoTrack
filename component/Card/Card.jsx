import React from 'react';
import impact from '../../assets/impact.jpg'
import participate from '../../assets/group.png'

const Card = ({activeCard}) => {

    const {title,category,participants,impactMetric,imageUrl}=activeCard
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
     className='h-65 w-full'
      src={imageUrl}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-[var(--accent)] font-[var(--heading-font)] font-semibold">
      {title}
      <div className="badge badge-secondary h-10">{category}</div>
    </h2>
    <div className="card-actions flex-col">
      <div className="badge badge-outline">
        <img className='w-5' src={impact} alt="" />
        Participants:{participants}</div>
      <div className="badge badge-outline">
        <img className='w-5' src={participate}></img>
        Impact: {impactMetric}</div>
       <button className='challenge-btn2'>View Details</button>
    </div>
  </div>
</div>
  );
}

export default Card;
