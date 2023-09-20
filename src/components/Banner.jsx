import React from 'react';
import Typed from 'react-typed';

export default function Banner() {
  return (
    <div className='bg-blue-300 w-full py-24'>
       <div className='max-w-[1240px] text-center'>
         <div className='text-black font-bold text-2xl py-2'>
            Learn with us.
         </div>
         <div className='text-white font-bold md:text-5xl text-4xl py-2'>
            Grow with us.
         </div>
         <div className='text-gray-200 font-bold text-3xl py-2'>
            Learn <Typed 
              strings={['Web Development','Digital Marketing','Ethical Hacking']}
              typeSpeed={100}
              loop={true}
              backSpeed={50}
            />
         </div>
        <button className='bg-black text-white py-2 px-7 my-2 rounded-md'>Get Strated</button>
       </div>
    </div>
  )
}
