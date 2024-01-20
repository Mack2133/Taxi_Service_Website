import React from 'react'
import vehicle from "../assets/img/vehicles1.png"
import vehicelMobile from "../assets/img/mobile.png"

const Hero = ({id}) => {
  return (
    <section className='container flex flex-col items-center justify-center space-y-10 md:pt-32 xxs:pt-24'>
        <div>
            <h1 className='pb-5 font-bold lg:text-6xl xxs:text-5xl xxs:text-center text-violet-600'>Most Trusted & Cheapest Cab Service</h1>
            {/* <h2 className='pb-5 font-bold text-black lg:text-5xl xxs:text-4xl xxs:text-center'>in Sri Lanka</h2> */}
        </div>
        <div className='flex flex-col'>
            <img 
            src={vehicle}
            className='md:block xxs:hidden'
            />
            <img src={vehicelMobile} 
            className='md:hidden xxs:block sm:block' />
        </div>
        <div className='flex items-center justify-center'>
                <a href={`#${id}`} className='py-3 text-xl font-semibold text-white rounded-full xxs:px-10 md:px-20 bg-violet-600'>Book Your Vehicle Now</a>
            </div>
    </section>
  )
}

export default Hero;
