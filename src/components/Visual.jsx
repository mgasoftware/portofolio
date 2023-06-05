import Image from 'next/image';
import React from 'react';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

import Navbar from './Navbar';

export default function Visual({ title, techs, descriptions, image, codeLink, demoLink }) {
  const listTechs = techs?.map(tech => (
    <p key={tech} className='text-gray-600 py-2 flex items-center'>
      <RiRadioButtonFill className='pr-1' /> {tech}
    </p>
  ))

  const listDescriptions = descriptions?.map((description, key) => (
    <p key={key} className='mb-4 py-2 text-gray-700'>
      {description}
    </p>
  ))

  return (
    <div className='flex flex-col w-full'>
      <Navbar />
      <div className="flex flex-col w-screen h-[50vh] overflow-hidden items-center justify-center ">
        <div className="flex flex-colz-10 p-4">
          <h2 className="text-4xl font-bold leading-tight mb-2">{title}</h2>
        </div>
        <Image
          width={500}
          height={800}
          className="object-contain rounded-lg "
          src={image}
          alt=""
        />
      </div>
      <div className='mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4 max-w-6xl'>
          <p className='font-bold'>Project</p>
          <h2 className='my-4'>Overview</h2>
          <div className='mb-6'>
            {listDescriptions}
          </div>
          <div className='flex flex-wrap mb-4'>
            <a
              href={codeLink}
              target='_blank'
              rel='noreferrer'
              className='mr-4'
            >
              <button className='px-8 py-2 bg-gray-200 text-gray-800 hover:bg-gray-300 focus:bg-gray-300 rounded-lg shadow-md transition-colors duration-300'>Code</button>
            </a>
            <a
              href={demoLink}
              target='_blank'
              rel='noreferrer'
            >
              <button className='px-8 py-2 bg-gray-200 text-gray-800 hover:bg-gray-300 focus:bg-gray-300 rounded-lg shadow-md transition-colors duration-300'>Demo</button>
            </a>
          </div>
        </div>
        <div className='col-span-4 md:col-span-1 bg-white rounded-lg shadow-xl'>
          <div className='p-4'>
            <p className='text-lg font-bold mb-4'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1 gap-4'>
              {listTechs}
            </div>
          </div>
        </div>
        <div className='col-span-1 flex items-end'>
          <Link href='/#projects'>
            <p className='text-gray-600 underline cursor-pointer'>Back</p>
          </Link>
        </div>
      </div>
    </div>
  );
};