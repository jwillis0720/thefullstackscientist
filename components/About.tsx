import Link from 'next/link';
import React from 'react'
import Image from 'next/image'
const About = () => {
    return (
        <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
                <div className='col-span-2'>
                    <p className='uppercase text-xl tracking-widest text-white'>
                        About
                    </p>
                    <h2 className='py-4 text-green-400'>Who I Am</h2>
                    <p className='py-2 text-justify'>
                        In graduate school for life sciences, two paths are generally presented. One, the wet-lab, sometimes called an &apos;experimentalist&apos; is traditionally what you think of when you think of a scientist. You are in a laboratory surrounded by cool equipment conducting experiments like you are on CSI: beakers, fume hoods, chemicals, DNA gels and million dollar machines. The other, the dry-lab, is typically what one thinks of as a computationalist. They spend their time conducting experiments <i>in silico</i>, running calculations to bolster the experimentalist. They are different worlds with their own set of language. In fact, I urge you to spend sometime in a room with a classic wet-lab and dry-lab person trying to communicate their science. Fun stuff.
                    </p>
                    <p className='py-2 text-justify'>
                        In 2008, right when I started grad school, machine-learning was just making strides. There was no such thing as Deep learning yet, but there was an incredibly cool concept called &apos;protein design&apos; where you could have the computer help redesign a protein (say an antibody) to make it a better thereapeutic. I thought that was so cool. But...I didn&apos;t want to hand off my designs to some snobby experimentalist. I wanted to learn how to make proteins on my own. Thus began my dual mentorship with a world renowned computationalist and immunologist. I set my career path to insersect those two worlds.
                    </p>
                    <p className='py-2 text-justify'>
                        Here I am today. A fullstack scientist. In case you don&apos;t know that is, it&apos;s a play on the term &apos;fullstack developer&apos; who a code engineer who can work on both the front end (i.e the pretty websites) and the backend (crunching data to feed the websites). I am a fullstack scientist who can work on both the computational and experimental side of science. I design and build <span className='text-green-400'>vaccines</span> and <span className='text-green-400'>antibody</span> thereapeutics. <span className='text-green-400'>I am a scientist who can compute. I am a computationalist that can do science.</span>
                    </p>
                    <Link href='https://scholar.google.com/citations?user=Vxreil0AAAAJ&hl=en'>
                        <p className='py-2 text-green-400 underline cursor-pointer'>
                            Check out some of my latest publications.
                        </p>
                    </Link>
                </div>
                <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                    <Image
                        src="/IMG_2038.png"
                        alt="The Fullstack Scientist"
                        width="750"
                        height="750"
                        className="fill-none object-bottom"
                    />

                </div>
            </div>
        </div>
    );
};


export default About