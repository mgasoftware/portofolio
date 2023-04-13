import Image from 'next/image';
import React from 'react';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

export default function property({title, tech, description, propertyImg, codeLink, demoLink}) {
  return (
    <div className='w-full'><div className="relative w-screen h-[50vh] overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-black/70 z-10" />
      <Image
        className="absolute inset-0 object-cover z-0"
        src={propertyImg}
        alt=""
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-4 text-white">
        <h2 className="text-4xl font-bold leading-tight mb-2">{title}</h2>
        <h3 className="text-xl leading-tight">{tech}</h3>
      </div>
    </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p className='font-bold'>Project</p>
          <h2 className='my-4'>Overview</h2>
          <p className='mb-4'>
            {description}
          </p>
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
              href='https://property-finder-development.web.app/'
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
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> React
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Tailwind
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> JavaScript
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Firebase
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Google API
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Zillow API
              </p>
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