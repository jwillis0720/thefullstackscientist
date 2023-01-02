import React from "react";
import Image from "next/image";
const Main = () => {
    return (
        <div className='grid md:grid-cols-6 gap-2 pt-[10rem]'>
            <div className="col-span-2">
                <Image
                    src="logo.svg"
                    alt="The Fullstack Scientist"
                    width="750"
                    height="750"
                    className="fill-none object-bottom"
                />
            </div>
            <div className="col-span-4 m-auto pr-10">
                <h2 className="text-black text-center">Hi, my name is <span className="text-green-400">Jordan</span></h2>
                <h3 className="text-black text-center pt-4 text-2xl">I am the fullstack scientist, trained in both computational and experimental science! This is my portfolio</h3>
            </div>
        </div>
    )
}

export default Main