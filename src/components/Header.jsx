import React, { useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

export default function Header() {
    const [toggle, setToggle] = useState(false);

    return (
        <div className='bg-[#2699fb] px-14'>
            <div className='max-w-[1240px] py-5 items-center flex justify-between mx-auto'>
                <div className='text-2xl md:text-3xl font-bold'>
                    WsCube Tech
                </div>
                {
                    toggle ?
                        <AiOutlineClose onClick={() => setToggle(!toggle)} className='text-white text-2xl md:hidden block' />
                        :
                        <AiOutlineMenu onClick={() => setToggle(!toggle)} className='text-white text-2xl md:hidden block' />
                }
                <ul className='hidden md:flex text-white gap-10'>
                    <li>
                        <a href=''>Home</a>
                    </li>
                    <li>
                        <a href=''>Company</a>
                    </li>
                    <li>
                        <a href=''>Resources</a>
                    </li>
                    <li>
                        <a href=''>About</a>
                    </li>
                    <li>
                        <a href=''>Contact</a>
                    </li>
                </ul>

                <ul className={`duration-300 md:hidden w-full h-screen text-white fixed bg-black top-16 ${toggle ? 'left-[0]' : 'left-[-100%]'}`}>
                    <li className='p-4'>
                        <a href=''>Home</a>
                    </li>
                    <li className='p-4'>
                        <a href=''>Company</a>
                    </li>
                    <li className='p-4'>
                        <a href=''>Resources</a>
                    </li>
                    <li className='p-4'>
                        <a href=''>About</a>
                    </li>
                    <li className='p-4'>
                        <a href=''>Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
