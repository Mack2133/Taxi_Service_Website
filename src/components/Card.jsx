import React from 'react'

const Card = ({cars}) => {
  
  return (
    <div className='container flex flex-col justify-center'>
      <h1 className='title'>Vehicles</h1>
      <div className='grid grid-cols-3 gap-3 md:grid-cols-2 lg:grid-cols-3 xxs:max-md:grid-cols-2'>
       { Object.values(cars).map((car, index) => (
        <div className="" key={index}>
          <img src={car} width={600} />
        </div>
       ))}
    </div>
    </div>
  )
}

export default Card
