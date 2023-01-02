import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';





const Navbar = () => {

    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className="fixed w-full h-30 shadow-xl z-[100] bg-slate-600">
            <div className="flex justify-between items-center w-full 2xl:px-1">
                <Image
                    src="toplogo.svg"
                    alt="The Fullstack Scientist"
                    width="100"
                    height="100"
                    className="fill-none"
                />
                <h2 className="text-green-400 hidden xl:flex">
                    The Fullstack Scientist
                </h2>
                <div>
                    <ul className="hidden md:flex">
                        <Link href="/">
                            <li className="text-slate-200 ml-10 text-md uppercase hover:border-b p-2">
                                Home
                            </li>
                        </Link>
                        <Link href="/">
                            <li className="text-slate-200 ml-10 text-md uppercase hover:border-b p-2">
                                About
                            </li>
                        </Link>
                        <Link href="/">
                            <li className="text-slate-200 ml-10 text-md uppercase hover:border-b p-2">
                                Skills
                            </li>
                        </Link>
                        <Link href="/">
                            <li className="text-slate-200 ml-10 text-md uppercase hover:border-b p-2">
                                Science
                            </li>
                        </Link>
                        <Link href="/">
                            <li className="text-slate-200 ml-10 text-md uppercase hover:border-b p-2">
                                CV
                            </li>
                        </Link>
                        <Link href="/">
                            <li className="text-slate-200 ml-10 text-md uppercase hover:border-b p-2 mr-10">
                                Contact
                            </li>
                        </Link>
                    </ul>
                    <div onClick={handleNav} className="md:hidden">
                        <AiOutlineMenu size={35} className="mr-10" />
                    </div>
                </div>
            </div>

            <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
                <div className={nav ? 'fixed left-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white' : 'hidden'}>
                    <div>
                        <div className='flex w-[90%] items-center justify-between mt-3'>
                            <Image src='topLogo.svg' alt='/' width={150} height={35} />
                            <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                                <AiOutlineClose />
                            </div>
                        </div>
                        <div className='border-b border-grey-300 mx-4 items-center flex justify-center text-center text-lg font-bold'>
                            <p> Lets build something together</p>
                        </div>
                    </div>
                    <div className='mx-10 mt-10'>
                        <ul>
                            <Link href='/'>
                                <li className='py-4 text-lg'>Home</li>
                            </Link>
                            <Link href='/'>
                                <li className='py-4 text-lg'>About</li>
                            </Link>
                            <Link href='/'>
                                <li className='py-4 text-lg'>Skills</li>
                            </Link>
                            <Link href='/'>
                                <li className='py-4 text-lg'>Science</li>
                            </Link>
                            <Link href='/'>
                                <li className='py-4 text-lg'>CV</li>
                            </Link>
                            <Link href='/'>
                                <li className='py-4 text-lg'>Contact</li>
                            </Link>
                        </ul>
                        <div className='pt-40'>
                            <p className='tracking-widest uppercase'>Lets Connect</p>
                            <div className='flex items-center justify-between my-4 mb-4 w-full sm:w-[80%]'>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 text-center cursor-pointer hover-scale:105 ease-in  duration-300'>
                                    <FaLinkedin size={30} />
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 text-center cursor-pointer hover-scale:105 ease-in  duration-300'>
                                    <FaGithub size={30} />
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 text-center cursor-pointer hover-scale:105 ease-in  duration-300'>
                                    <AiOutlineMail size={30} />
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 text-center cursor-pointer hover-scale:105 ease-in  duration-300'>
                                    <BsFillPersonLinesFill size={30} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};
export default Navbar;
