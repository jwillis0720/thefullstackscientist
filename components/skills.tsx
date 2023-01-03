import Image from 'next/image';
import React from 'react';
import Skill from './skill'
import MolBio from '../public/skills/Asset 1@2x.png';

const Skills = () => {
    return (
        <div id='skills' className='w-full lg:h-screen p-2'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
                <p className='text-xl tracking-widest uppercase text-white'>
                    Skills
                </p>
                <h2 className='py-4'>What I Can Do</h2>
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
                    <Skill src={MolBio} name='Molecular Biology' />
                    <Skill src={MolBio} name='Synthetic Biology' />
                    <Skill src={MolBio} name='JS' />
                    <Skill src={MolBio} name='React' />
                    <Skill src={MolBio} name='Tailwind' />
                    <Skill src={MolBio} name='Firebase' />
                    <Skill src={MolBio} name='Github' />
                    <Skill src={MolBio} name='NextJS' />
                </div>
            </div>
        </div>
    );
};

export default Skills;