import React from 'react'
import Rocket from '../assets/rocket.png'
import Profile from '../assets/profile-crop.jpg'
import Map from '../assets/map.png'
import  Github from '../assets/github.png'
import  Discord from '../assets/discord.png'
import  Twitter from '../assets/twitter.png'
import  Telegram from '../assets/telegram.png'

export default function Hero() {
    return(
        <>
            <div className='flex justify-center items-center font my-11 gap-5 mx-10'>

                <section className='grid grid-cols-3 grid-rows-2 gap-3 w-1/2 '>

                    <div className='col-span-3 bg-gray text-white p-2 pl-5 rounded-md flex-col justify-between'>
                        <h2 className='text-3xl font-bold mb-5'>Bring Ideas <br />To Life Through  <br /> Front-End Web Development</h2>
                        <button className=' bg-violet-600 p-2 rounded-xl font-bold'>Hire me 👋</button>
                    </div>

                    <div className='bg-green-400 p-3 rounded-md flex flex-col justify-center items-center text-white'>
                        <h3 className='text-3xl font-extrabold'>3+</h3>
                        <p className='text-md font-bold'>Years Of Experience</p>
                    </div>

                    <div className='bg-yellow-400 p-3 rounded-md flex flex-col justify-center items-center text-black'>
                        <h3 className='text-3xl font-extrabold'>53+</h3>
                        <p className='text-md font-bold'>Projects Handled</p>
                    </div>

                    <div className='bg-red-400 p-3 rounded-md flex flex-col justify-center items-center text-white'>
                        <h3 className='text-3xl font-extrabold'>53+</h3>
                        <p className='text-md font-bold'>Clients</p>
                    </div>

                </section>

                <section className='grid grid-col-2 grid-row-4 gap-3 w-1/2 font-bold text-white'>

                    <div className='col-span-2 bg-gray p-3 rounded-md flex justify-between items-center'>
                        <h2 className='text-slate-300 font-extrabold'>Stains <span className='text-white'>Leto</span></h2>
                        <img  className='w-10' src={Rocket} />
                    </div>

                    <div className='row-span-3 rounded-md mr-[-110px]'>
                        <img className='rounded-md w-64 ' src={Profile} />
                    </div>

                    <div className='bg-gray p-3 rounded-md flex justify-between items-center '>
                        <p className='text-slate-300'>Name :</p>
                        <p>STAINS K S MAULT</p>

                    </div>

                    <div className='bg-gray p-3 rounded-md flex flex-col justify-center'>
                        <div className='flex justify-between mb-5'>
                            <p className='text-slate-300'>City : </p>
                            <p className='text-slate-300'>Marthandam, India </p>
                        </div>

                        <img className='rounded-md w-28' src={Map} />
                    </div>

                    <div className=' bg-gray p-3 rounded-md flex justify-evenly items-center'>
                        <img className='rounded-md w-7' src={Github} />
                        <img className='rounded-md w-7' src={Discord} />
                        <img className='rounded-md w-7' src={Twitter} />
                        <img className='rounded-md w-7' src={Telegram} />
                    </div>

                </section>
            </div>
        </>
    )
}