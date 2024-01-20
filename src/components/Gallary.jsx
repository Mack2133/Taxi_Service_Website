import React from 'react';
import reviews from '../assets/index'; 

const Gallary = () => {
  return (
    <div className='container flex flex-col justify-center pb-10'>
      <h1 className='title'>Happy Customers</h1>
      <div className='px-5'>
      <div className='grid gap-2 md:grid-cols-2 lg:grid-cols-3 xxs:max-md:grid-cols-1'>
        {Object.values(reviews).map((review, index) => ( 
          <div key={index} className='m-1 overflow-hidden rounded-md shadow-sm'>
            <img src={review} 
            width={600}
            />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Gallary;
