import React from 'react'
import Image from 'next/image'
import computerImage from '../../public/assets/about.png'
import Link from 'next/link'

export default function About() {
    return (
        <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
                <div className='col-span-2'>
                    <h2 className='uppercase text-xl tracking-widest text-[#8a8235]'>About Me</h2>
                    <p className='py-2 text-gray-700'>
                        As far back as I can remember, programming has been my biggest passion. As a young child, I was fascinated with how technology could change the world, and I knew that I wanted to be a part of it. Fast forward to today, and I am thrilled to say that I specialize in Python and Javascript development, which allows me to bring my technical skills to both the frontend and backend of an application.
                        <br /><br />
                        Through years of experience and hard work, I have gained an extensive knowledge base in these languages. But more than just mastering the technical side of things, I am a meticulous problem solver who loves taking on challenging projects. I believe in pushing myself to find innovative solutions that will exceed my clients expectations.
                        <br /><br />
                        I am flexible and adapt quickly to the needs of my clients, delivering work on time and with clear communication throughout the project. If you are looking for a fullstack developer to bring your project to life, look no further. 
                        <br /><br />
                        I would love to hear from you and help you realize your vision.
                        <br /><br />
                    </p>
                    <Link href='/#projects'><p className='py-2 text-gray-700 underline cursor-pointer'>Check out some of my latest projects.</p></Link>
                </div>
                <div className='w-full h-auto m-auto flex items-center justify-center p-4 hover:scale-110 ease-in duration-300'>
                    <Image className='rounded-xl shadow-xl shadow-gray-400' src={computerImage} alt="computer" />
                </div>
            </div>
        </div>
    )
}
