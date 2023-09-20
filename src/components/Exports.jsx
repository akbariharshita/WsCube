import React from 'react';
import laptop from '../assets/laptop.jpg'

function Exports() {
  return (
    <div className='max-w-[1240px] mx-auto p-4 my-10 md:grid grid-cols-2'>
       <div className='col-span-1 md:w-[80%] text-center'>
        <img src={laptop} alt='' className='inline'/>
       </div>
       <div className='col-span-1 flex flex-col justify-center'>
         <h1 className='text-lime-400 font-bold py-2 text-xl'>LEARN FROM EXPORTS</h1>
         <p className='py-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum qui eveniet omnis, atque exercitationem placeat repellendus tenetur nihil dolorum eius tempore labore nostrum eaque voluptatem reprehenderit veritatis, ipsum maxime corrupti?
         </p>
         <button className=' inline bg-black w-[50%] text-white py-2 px-7 my-2 rounded-md'>Get Strated</button>
       </div>
    </div>
  )
}

export default Exports
