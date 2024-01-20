import React from 'react'
import Whatsapp  from '../assets/img/Whatsapp.png'


const Footer = () => {
  return (
    <div>
        <div className='flex items-center justify-center w-full h-40 space-x-5 bg-violet-600'>
            <img src={Whatsapp} width={35} />
            <h1 className='font-bold text-white lg:text-4xl sm:text-2xl xxs:text-xl'>Whatsapp + 94 77 897 0 916</h1>
        </div>
        <div className='container grid w-full grid-cols-3 gap-5 pt-24 pb-20 md:space-x-20 text-white xxs:max-md:grid-cols-1 sm:min-h-[500px] place-items-start'>
        <div className='flex flex-col'>
            <h1 className='py-3 pb-8 text-2xl font-bold '>About Us</h1>
            <p className='font-bold leading-10 text-zinc-400'> Sri Lankan Taxi and Tours offer a comfortable way for friends and families to enjoy the wonders of this special part of the world.</p>
            
        </div>
        <div className='flex flex-col'>
            <h1 className='py-3 pb-8 text-2xl font-bold'>Services</h1>
            <ul className='space-y-5'>
                <li className='font-bold transition duration-300 cursor-pointer text-zinc-400 hover:text-gray-100 hover:underline'><a href="">All Island Tours</a></li>
                <li className='font-bold transition duration-300 cursor-pointer text-zinc-400 hover:text-gray-100 hover:underline'><a href=""></a>Safari Tours</li>
                <li className='font-bold transition duration-300 cursor-pointer text-zinc-400 hover:text-gray-100 hover:underline'><a href=""></a>Whale Watching</li>
                <li className='font-bold transition duration-300 cursor-pointer text-zinc-400 hover:text-gray-100 hover:underline'><a href=""></a>Airport Hires</li>
            </ul>
        </div>
        <div className='flex flex-col'>
            <h1 className='py-3 pb-8 text-2xl font-bold '>Contact Us</h1>
            <ul className='space-y-5'>
                <li className='font-bold transition duration-300 text-zinc-400'>+94 077 8970916</li>
                <li className='font-bold transition duration-300 text-zinc-400'>sample@gmail.com</li>
            </ul>
        </div>
    </div>
    </div>
  )
}

export default Footer