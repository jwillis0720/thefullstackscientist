import React from "react";
import Image from "next/image";
const Main = () => {
    return (
        <div className="w-full h-screen text-center">
            <div className='max-w-[1240px] w-full h-full  mx-auto pt-[10rem] flex justify-center items-center'>
                <div>
                    <Image
                        src="logo.svg"
                        alt="The Fullstack Scientist"
                        width="750"
                        height="750"
                        className="fill-none"
                    />

                </div>
            </div>
        </div>
    )
}

export default Main