
import React from 'react'
import Image, { StaticImageData } from 'next/image'

interface SkillProps {
    src: StaticImageData;
    name: string;
}

function Skill(props: SkillProps) {
    return (
        <div className='p-4 min-h-[8rem] shadow-xl rounded-xl hover:scale-105 hover:bg-green-400 ease-in duration-300 bg-slate-600'>
            <div className='grid grid-cols-2 gap-1 justify-center items-center'>
                <div className='m-auto'>
                    <Image src={props.src} width='100' height='100' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center align-middle'>
                    <h3 className='text-white md:text-2xl text-center align-top'>{props.name}</h3>
                </div>
            </div>
        </div>
    )
}

export default Skill
