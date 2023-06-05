import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

import contactImg from '../../public/assets/contact.jpg'

export default function Contact() {
    return (
        <div id='contact' className='w-full lg:h-screen'>
            <div className='max-w-[1240px] m-auto px-2 py-16 w-full '>
                <h2 className='py-4 text-xl tracking-widest uppercase text-[#8a8235]'>
                    Contact
                </h2>
                <div className='grid lg:grid-cols-5 gap-8'>
                    <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                        <div className='lg:p-4 h-full '>
                            <div>
                                <Image
                                    className='rounded-xl hover:scale-105 ease-in duration-300'
                                    src={contactImg}
                                    alt='/'
                                    height={300}
                                />
                            </div>
                            <div>
                                <h2 className='py-6'>Macire GASSAMA</h2>
                                <p>Full Stack Developer</p>
                                <p className='py-4'>
                                    I am available for freelance. <br />
                                    Contact me and let&apos;s talk.
                                </p>
                            </div>
                            <div>
                                <p className='uppercase pt-8'>Connect With Me</p>
                                <div className='flex items-center justify-between py-4'>
                                    <a
                                        href='https://github.com/mgasoftware'
                                        target='_blank'
                                        rel='noreferrer'
                                    >
                                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                            <FaGithub />
                                        </div>
                                    </a>
                                    <a href="mailto: macire.gassama@outlook.com">
                                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                            <AiOutlineMail />
                                        </div>
                                    </a>
                                    <Link href='../../assets/MACIRE_GASSAMA.pdf'>
                                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                            <BsFillPersonLinesFill />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                        <div className='p-4'>
                            <form
                                action='https://getform.io/f/0911f002-4389-44fd-a308-7b36ec323a18'
                                method='POST'
                                encType='multipart/form-data'
                            >
                                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2'>Name</label>
                                        <input
                                            className='border-2 rounded-lg p-3 flex border-gray-300'
                                            type='text'
                                            name='name'
                                        />
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2'>
                                            Phone Number
                                        </label>
                                        <input
                                            className='border-2 rounded-lg p-3 flex border-gray-300'
                                            type='text'
                                            name='phone'
                                        />
                                    </div>
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Email</label>
                                    <input
                                        className='border-2 rounded-lg p-3 flex border-gray-300'
                                        type='email'
                                        name='email'
                                    />
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Subject</label>
                                    <input
                                        className='border-2 rounded-lg p-3 flex border-gray-300'
                                        type='text'
                                        name='subject'
                                    />
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Message</label>
                                    <textarea
                                        className='border-2 rounded-lg p-3 border-gray-300'
                                        rows='10'
                                        name='message'
                                    ></textarea>
                                </div>
                                <button className='w-full p-4 text-gray-100 mt-4'>
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center py-12'>
                    <Link href='/'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <HiOutlineChevronDoubleUp
                                className='text-[#8a8235]'
                                size={30}
                            />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
