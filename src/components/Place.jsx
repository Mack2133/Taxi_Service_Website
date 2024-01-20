import React from 'react';

const Place = ({ place }) => {
  const { img, name } = place;

  return (
    <div className='max-w-full m-2 overflow-hidden border-2 rounded-md shadow-sm border-zinc-100'>
      <img
        src={img}
        className='object-cover w-full h-[300px] xxs:w-full xxs:h-[300px] sm:h-[450px] md:min-h-[450px]'
        alt={name}
      />
      <div className='absolute left-0 right-0 p-2 text-2xl font-black text-center text-white bottom-10'>
        {name}
      </div>
    </div>
  );
};

export default Place;
