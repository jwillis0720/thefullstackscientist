import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';





const Navbar = () => {

    const [nav, setNav] = useState(false)
    const [shadow, setShadow] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY > 100) {
                setShadow(true)
            } else {
                setShadow(false)
            }
        }
        window.addEventListener('scroll', handleShadow)
    }, [])

    return (
        <div className={shadow ? "fixed w-full h-30 shadow-xl z-[100] bg-slate-600" : 'fixed w-full h-30 z-[100] bg-slate-600'}>
            <div className="flex justify-between items-center w-full 2xl:px-1">
                <Link href='/'>
                    <Image
                        src="toplogo.svg"
                        alt="The Fullstack Scientist"
                        width="100"
                        height="100"
                        className="cursor-pointer"
                    />
                </Link>
                <div>
                    <ul className="hidden md:flex">
                        <Link href="#home">
                            <li className="text-slate-200 ml-10 text-md uppercase hover:border-b p-2">
                                Home
                            </li>
                        </Link>
                        <Link href="#about">
                            <li className="text-slate-200 ml-10 text-md uppercase hover:border-b p-2">
                                About
                            </li>
                        </Link>
                        <Link href="#skills">
                            <li className="text-slate-200 ml-10 text-md uppercase hover:border-b p-2">
                                Skills
                            </li>
                        </Link>
                        <Link href="#science">
                            <li className="text-slate-200 ml-10 text-md uppercase hover:border-b p-2">
                                Science
                            </li>
                        </Link>
                        <Link href="#cv">
                            <li className="text-slate-200 ml-10 text-md uppercase hover:border-b p-2">
                                CV
                            </li>
                        </Link>
                        <Link href='https://www.linkedin.com/in/jwillis0720' target='_blank'>
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
                            <Link href='/'>
                                <Image src='topLogo.svg' alt='/' width={150} height={35} />
                            </Link>
                            <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                                <AiOutlineClose />
                            </div>
                        </div>
                        <div className='border-b border-grey-300 mx-4 items-center flex justify-center text-center text-lg font-bold'>
                            <p> The Fullstack Scientist </p>
                        </div>
                    </div>
                    <div className='mx-10 mt-10'>
                        <ul>
                            <Link href='#home'>
                                <li onClick={() => setNav(false)} className='py-4 text-lg'>Home</li>
                            </Link>
                            <Link href='#about'>
                                <li onClick={() => setNav(false)} className='py-4 text-lg'>About</li>
                            </Link>
                            <Link href='#skills'>
                                <li onClick={() => setNav(false)} className='py-4 text-lg'>Skills</li>
                            </Link>
                            <Link href='#science'>
                                <li onClick={() => setNav(false)} className='py-4 text-lg'>Science</li>
                            </Link>
                            <Link href='#cv'>
                            </Link>
                            <Link href='https://www.linkedin.com/in/jwillis0720' target='_blank'>
                                <li onClick={() => setNav(false)} className='py-4 text-lg'>Contact</li>
                            </Link>
                        </ul>
                        <div className='pt-4'>
                            <p className='tracking-widest uppercase'>Lets Connect</p>
                            <div className='flex items-center justify-between my-4 mb-4 w-full sm:w-[80%]'>
                                <Link href='https://www.linkedin.com/in/jwillis0720' target='_blank'>
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 text-center cursor-pointer hover-scale:105 ease-in  duration-300'>
                                        <FaLinkedin size={30} />
                                    </div>
                                </Link>
                                <Link href='https://github.com/jwillis0720' target='_blank'>
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 text-center cursor-pointer hover-scale:105 ease-in  duration-300'>
                                        <FaGithub size={30} />
                                    </div>
                                </Link>
                                <Link href='mailto:jordan@jordanrwillis.com' target='_blank'>
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 text-center cursor-pointer hover-scale:105 ease-in  duration-300'>
                                        <AiOutlineMail size={30} />
                                    </div>
                                </Link>
                                <Link href='https://scholar.google.com/citations?user=Vxreil0AAAAJ&hl=en' target='_blank'>
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 text-center cursor-pointer hover-scale:105 ease-in  duration-300'> <BsFillPersonLinesFill size={30} />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div >
                </div >
            </div >
        </div >
    );
};
export default Navbar;
