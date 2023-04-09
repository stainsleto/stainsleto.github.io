import React from 'react'

export default function About(){
    return(
        <>

        <div className='grid grid-cols-2 grid-rows-2 mx-10 justify-center items-center gap-5'>

            <div className='font bg-gray text-white p-2 rounded-md'>
                <h2 className='text-3xl font-bold mb-3'>Tech Stacks</h2>
            </div>

            <div className='font bg-gray text-white  p-4 rounded-md'>
                <h2 className='text-3xl font-bold mb-3'>About</h2>
                <p>
                    Aspiring Full-Stack Developer with strong understanding in technical principles of ReactJs, TailwindCss, Javascript, HTML5, CSS3, Git, MySql and Wordpress development.<br />
                    I got multiple opportunity with variety of clients to build desired application for their business and I strive to improve my skills and stay up-to-date with latest technologies.
                </p>
            </div>

        </div>
        
        </>
    )
}