import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ProjectItem({ title, backgroundImg, framework, projectUrl }) {
    return (
        <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group ]">
            <Image
                width={1000}
                height={1000}
                className="rounded-xl group-hover:opacity-10"
                src={backgroundImg}
                alt=""
            />
            <div className="hidden group-hover:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <h3 className="text-2xl text-[#8a8235] font-bold tracking-wider text-center">
                    {title}
                </h3>
                <p className="pb-4 pt-2 text-[#8a8235] text-center">{framework}</p>
                <Link href={`/project/${projectUrl}`}>
                    <button className="px-6 py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer hover:bg-gray-200">
                        More Info
                    </button>
                </Link>
            </div>
        </div>
    )
}
