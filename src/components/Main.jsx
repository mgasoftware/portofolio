import Link from 'next/link'
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'

export default function Main() {
    return (
        <main className='w-full h-screen text-center'>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div>
                    <p className='uppercase text-sm tracking-widest text-gray-600'>Let&apos;s build something together</p>
                    <h1 className='py-4'>
                        Hi, I&apos;m <span className='text-[#8a8235]'>Macire</span>
                    </h1>
                    <h1 className='py-2'>
                        A Full Stack Developper
                    </h1>
                    <p className='py-4 text-gray-700 max-w-[70%] m-auto'>
                        I have been passionate about programming since I was young and I chose to specialize in Python and Javascript development, which allows me to work on both the frontend and the backend of an application. With my years of experience, I have acquired a solid knowledge in these languages.
                    </p>
                    <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                        <a
                            href='https://github.com/mgasoftware'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <FaGithub />
                            </div>
                        </a>

                        <Link href='mailto: macire.gassama@outlook.com'>
                            <div
                                className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'
                            >
                                <AiOutlineMail />
                            </div>
                        </Link>
                        <Link href='../../assets/MACIRE_GASSAMA.pdf'>
                            <div
                                className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'
                            >
                                <BsFillPersonLinesFill />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
}
