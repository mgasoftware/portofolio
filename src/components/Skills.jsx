import React from 'react'

import html from '../../public/assets/skills/html.png'
import aws from '../../public/assets/skills/aws.png'
import css from '../../public/assets/skills/css.png'
import github from '../../public/assets/skills/github.png'
import javascript from '../../public/assets/skills/javascript.png'
import mongo from '../../public/assets/skills/mongo.png'
import nextjs from '../../public/assets/skills/nextjs.png'
import node from '../../public/assets/skills/node.png'
import python from '../../public/assets/skills/python.png'
import react from '../../public/assets/skills/react.png'
import tailwind from '../../public/assets/skills/tailwind.png'
import django from '../../public/assets/skills/django.png'
import SkillItem from './SkillItem'

export default function Skills() {
    return (
        <div id='skills' className='w-full lg:h-screen p-2'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
                <h2 className='py-4 uppercase text-xl tracking-widest text-[#8a8235]'>Skills</h2>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    <SkillItem image={python} title="Python" />
                    <SkillItem image={javascript} title="JavaScript" />
                    <SkillItem image={html} title="HTML" />
                    <SkillItem image={css} title="CSS" />
                    <SkillItem image={django} title="Django" />
                    <SkillItem image={react} title="React JS" />
                    <SkillItem image={github} title="Github" />
                    <SkillItem image={mongo} title="Mongo DB" />
                    <SkillItem image={node} title="NODE JS" />
                    <SkillItem image={aws} title="Amazon WS" />
                    <SkillItem image={nextjs} title="NEXT JS" />
                    <SkillItem image={tailwind} title="Tailwind" />
                </div>
            </div>
        </div>
    )
}
