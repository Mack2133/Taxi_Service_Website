import React from 'react'
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import dayjs from 'dayjs';
import './Forms.css'

const Forms = () => {
  return (
    <div className='container min-h-[600px] py-10 flex flex-col justify-center items-center'>
        <h2 className='text-2xl font-semibold text-center text-zinc-900'>Looking for a taxi</h2>
        <h2 className='px-3 text-5xl font-semibold leading-snug text-center text-violet-600'>Make your booking</h2>
       <form className='flex flex-col py-10 md:w-[600px] xxs:min-w-[360px]'>
            <input type="text" placeholder="Name"/>
            <input type="number" placeholder="Passenger Count" min={1}/>
            <input type="email" placeholder="Email Address"/>
            <input type="tel" placeholder="Phone/Whatsapp"/>
            <input type="text" placeholder="Pickup Location"/>
            <input type="text" placeholder="Drop Location"/>
        <input type="date" />
        </form> 
        <button className='btn btn:hover'>Get Quote</button>
    </div>
  )
}


export default Forms