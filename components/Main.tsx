import React from "react";
import Image from "next/image";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
const Main = () => {
    return (
        <div className='grid md:grid-cols-6 gap-2 pt-[10rem]'>
            <div className="pl-3 col-span-1 md:col-span-2">
                {/* <source src="logomovie.mp4" type="video/mp4" /> */}
                <Image
                    src="logo.svg"
                    alt="The Fullstack Scientist"
                    width="750"
                    height="750"
                    className="fill-none object-bottom"
                />
            </div>
            <div className="col-span-1 md:col-span-4 m-auto pr-10">
                <h2 className="text-black text-center">Hi, my name is <span className="text-green-400">Jordan</span></h2>
                <h3 className="text-black text-center pt-4 text-2xl">I am the fullstack scientist, trained in both computational and experimental science! This is my portfolio</h3>
                <div className='flex items-center justify-between px-[10rem] pt-7 w-full m-auto'>
                    <a
                        href='https://www.linkedin.com/in/jwillis0720'
                        target='_blank'
                        rel='noreferrer'
                    >

                        <div className='rounded-full text-white bg-slate-700 shadow-lg shadow-gray-400 p-3 text-center cursor-pointer hover-scale:105 ease-in  duration-300'>
                            <FaLinkedin size={25} />
                        </div>
                    </a>
                    <a
                        href='https://www.github.com/jwillis0720'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <div className='rounded-full text-white shadow-lg bg-slate-700 shadow-gray-400 p-3 text-center cursor-pointer hover-scale:105 ease-in  duration-300'>
                            <FaGithub size={25} />
                        </div>
                    </a>
                    <div className='rounded-full text-white shadow-lg bg-slate-700 shadow-gray-400 p-3 text-center cursor-pointer hover-scale:105 ease-in  duration-300'>
                        <AiOutlineMail size={25} />
                    </div>
                    <div className='rounded-full text-white bg-slate-700 shadow-lg shadow-gray-400 p-3 text-center cursor-pointer hover-scale:105 ease-in  duration-300'>
                        <BsFillPersonLinesFill size={25} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main