import React from 'react';

import ProjectItem from '@/components/ProjectItem';
import hrnet from '../../public/assets/projects/hrnet.png'

export default function Projects() {
    return (
        <div id='projects' className='w-full'>
            <div className='max-w-[1240px] mx-auto px-2 py-16'>
                <h2 className='py-4 uppercase text-xl tracking-widest text-[#8a8235]'>Projects</h2>
                <div className='grid md:grid-cols-2 gap-8'>
                    <ProjectItem
                        title='HRnet'
                        backgroundImg={hrnet}
                        projectUrl='/property'
                        tech='React JS'
                    />
                    <ProjectItem
                        title='Crypto App'
                        backgroundImg={hrnet}
                        projectUrl='/property'
                        tech='React JS'

                    />
                </div>
            </div>
        </div>
    );
};
