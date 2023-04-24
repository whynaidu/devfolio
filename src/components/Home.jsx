import Image from "next/image";
import React from "react";
import imagee from "../../public/7a734bfde011875d0284dfbcb787ce4d.jpg"

export default function HomePage() {
    return (
      <div className="main-card h-full flex justify-center items-center text-center text-3xl font-semibold">
        <>
          <div className=" bg-white bg-opacity-10 backdrop-blur-lg border border-[#ffffff1a] w-fit p-5 rounded-2xl h-fit z-50">
            <div className="flex items-center">
              <h1>Hey, I am </h1>
              <div className="bg-purple-500 mx-2 px-3 py-1 rounded-md">
                <h1>Vedant Naidu</h1>
              </div>
            </div>
            <div className="flex items-center mt-5">
              <h1>I'm a </h1>
              <div className="bg-orange-400 mx-2 px-3 py-1 rounded-md">
                <h1>Web Developer ,</h1>
              </div>
            </div>
            <div className="flex items-center mt-5">
              <h1>Currently at </h1>
              <div className="bg-green-500 mx-2 px-4 py-1 rounded-md">
                <h1>SlashRTC</h1>
              </div>
            </div>
          </div>
{/* 
          <div className="card-container absolute h-[13rem] w-[25rem]">
            <div className="card-topRight bg-red-300 ">Top Right</div>
            <div className="card-topLeft bg-red-300 ">Top Left</div>
            <div className="card-bottomLeft bg-red-300 ">Bottom Left</div>
            <div className="card-bottomRight bg-red-300 ">Bottom Left</div>
          </div> 
          
          */}
        </>
        {/* <Image className="bg-white absolute h-20 w-20" src={imagee} /> */}
        {/* <div className="card top-left">Top Left</div>
        <div className="card top-right">Top Right</div>{" "}
        <div className="card bottom-right">Bottom Right</div>{" "}
        <div className="card bottom-left">Bottom Right</div> */}
      </div>
    );
}
