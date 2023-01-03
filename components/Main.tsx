import React from "react";
import Image from "next/image";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
const Main = () => {
    return (
        <div id='home' className='grid md:grid-cols-6 gap-0 pt-[10rem]'>
            < div className="pl-4 col-span-1 md:col-span-2" >
                {/* <source src="logomovie.mp4" type="video/mp4" /> */}
                < Image
                    src="logo.svg"
                    alt="The Fullstack Scientist"
                    width="750"
                    height="750"
                    className="fill-none object-bottom"
                />
            </div >
            <div className="col-span-1 md:col-span-4 m-auto pr-10">
                <h2 className="text-black text-center">Hi, I'm <span className="text-green-400">Jordan</span></h2>
                <h3 className="text-black text-center py-4 text-2xl">A fullstack scientist</h3>
                <p className="text-center max-w-[70%] m-auto text-xl"> I'm trained in both computational and experimental science! My expertise is data science, synthetic biology and deep learning and their application to <span className="text-green-400">antibody</span> and <span className='text-green-400'>vaccine</span> engineering</p>
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
        </div >
    )
}

export default Main