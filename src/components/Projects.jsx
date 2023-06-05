import React from 'react';
import { useRouter } from 'next/router';

import ProjectItem from '@/components/ProjectItem';
import hrnet from '../../public/assets/projects/hrnet.png'
import { projectsData } from '@/data/dataFeatures';

export default function Projects() {
    const router = useRouter();

    const listProjects = projectsData.map((project, key) => (
        <ProjectItem
            key={key}
            title={project.title}
            backgroundImg={project.image}
            projectUrl={project.id - 1}
            framework={project.framework}
        />
    ))
    return (
        <div id='projects' className='w-full'>
            <div className='max-w-[1240px] mx-auto px-2 py-16'>
                <h2 className='py-4 uppercase text-xl tracking-widest text-[#8a8235]'>Projects</h2>
                <div className='grid md:grid-cols-2 gap-8'>
                    {listProjects}
                </div>
            </div>
        </div>
    );
};
