import React from 'react'

export default function NewsLetter() {
    return (
        <div className='w-full bg-[#2699fb] px-14'>
            <div className='max-w-[1240px] md:flex justify-between mx-auto py-16'>
                <div className='m-2'>
                    <h1 className='md:text-4xl text-2xl text-white font-bold'> Want to learn latest I.T Skills?</h1>
                    <span className='text-white'>Sign up to our newsletters and stay up to date.</span>
                </div>
                <div className='m-2'>
                    <input type='text' className='p-3 mr-2 text-slate-300 rounded' placeholder='Email' />
                    <button className='bg-black text-white py-2 px-7 my-2 rounded'>Get Strated</button>
                    <br />
                    <p className='text-white'>
                        We care about the protection of your data. Read our <br /> <a href='' className='text-black'>Privacy Policy</a>
                    </p>
                </div>
            </div>
        </div>
    )
}
