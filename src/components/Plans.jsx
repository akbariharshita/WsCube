import React from 'react';
import Single from '../assets/single.png';
import Double from '../assets/double.png';
import Triple from '../assets/triple.png'

export default function Plans() {
    return (
        <div className='py-28 w-full px-4 bg-white'>
            <div className='max-w-[1240px] mx-auto md:grid grid-cols-3 gap-10'>
                <div className='shadow-xl w-full flex flex-col p-4 my-4 hover:scale-105 duration-[300ms]'>
                    <img src={Single} className='w-24 mx-auto mt-[-3rem] bg-white' alt='/' />
                    <h2 className='text-2xl font-bold text-center py-8'>Web Development</h2>
                    <p className='text-center text-4xl font-bold'>$149</p>
                    <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>Lorem ipsum dolor sit.</p>
                    <p className='py-2 border-b mx-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <p className='py-2 border-b mx-8'>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <button className='bg-[#00df9a] w-52 rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
                </div>
                <div className='shadow-xl bg-gray-100 w-full flex flex-col p-4 my-4 hover:scale-105 duration-[300ms]'>
                    <img src={Double} className='w-24 mx-auto mt-[-3rem] bg-white' alt='/' />
                    <h2 className='text-2xl font-bold text-center py-8'>Digital Marketing</h2>
                    <p className='text-center text-4xl font-bold'>$149</p>
                    <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>Lorem ipsum dolor sit.</p>
                    <p className='py-2 border-b mx-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <p className='py-2 border-b mx-8'>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <button className='bg-[#00df9a] w-52 rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
                </div>
                <div className='shadow-xl w-full flex flex-col p-4 my-4 hover:scale-105 duration-[300ms]'>
                    <img src={Triple} className='w-24 mx-auto mt-[-3rem] bg-white' alt='/' />
                    <h2 className='text-2xl font-bold text-center py-8'>App Development</h2>
                    <p className='text-center text-4xl font-bold'>$149</p>
                    <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>Lorem ipsum dolor sit.</p>
                    <p className='py-2 border-b mx-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <p className='py-2 border-b mx-8'>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <button className='bg-[#00df9a] w-52 rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
                </div>
            </div>
        </div>
    )
}
