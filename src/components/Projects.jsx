import Image from "next/image";
import React from "react";
import image from "../../public/7a734bfde011875d0284dfbcb787ce4d.jpg";

export default function Projects() {
  return (
    <div className="p-5 flex justify-center">
      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6 max-w-[1200px] ">
        <div className="project-card bg-white bg-opacity-10 backdrop-blur-lg border flex flex-col border-[#ffffff1a] h-fit rounded-3xl p-4 relative">
          <div className="gap-2 flex flex-col">
            <Image
              src={image}
              className="overflow-hidden h-[300px] lg:h-[450px] w-full rounded-lg "
            />
            <div className="flex flex-col gap-2 mt-3">
              <h1 className="text-white text-2xl  ">Rootx</h1>
              <p className="text-[#6e6e6e] text-md ">
                Bio Tree is a Platfoem for Creators
              </p>
            </div>
            <div className="tags  flex space-x-3">
              <div className="border border-[#ffffff1a] w-fit h-fit px-2  py-1 rounded-md text-[0.8rem] text-[#dadada]">
                Creator
              </div>
              <div className="border border-[#ffffff1a] w-fit h-fit px-2  py-1 rounded-md text-[0.8rem] text-md text-[#dadada]">
                <p>Creator</p>
              </div>
            </div>
          </div>
        </div>

        <div className="project-card bg-white bg-opacity-10 backdrop-blur-lg border flex flex-col border-[#ffffff1a] h-fit rounded-3xl p-4  relative">
          <div className="gap-2 flex flex-col">
            <Image
              src={image}
              className="overflow-hidden h-[300px] lg:h-[450px] w-full rounded-lg "
            />
            <div className="flex flex-col gap-2 mt-3">
              <h1 className="text-white text-2xl ">Wallzy</h1>
              <p className="text-[#6e6e6e] text-md ">
                Bio Tree is a Platfoem for Creators
              </p>
            </div>
            <div className="tags  flex space-x-3">
              <div className="border border-[#ffffff1a] w-fit h-fit px-2  py-1 rounded-md text-[0.8rem] text-[#dadada]">
                Creator
              </div>
              <div className="border border-[#ffffff1a] w-fit h-fit px-2  py-1 rounded-md text-[0.8rem] text-md text-[#dadada]">
                <p>Creator</p>
              </div>
            </div>
          </div>
        </div>

        <div className="project-card bg-white bg-opacity-10 backdrop-blur-lg border flex flex-col border-[#ffffff1a] h-fit rounded-3xl p-4 relative">
          <div className="gap-2 flex flex-col">
            <Image
              src={image}
              className="overflow-hidden h-[300px] lg:h-[450px] w-full rounded-lg "
            />
            <div className="flex flex-col gap-2 mt-3">
              <h1 className="text-white text-2xl  ">Devfolio</h1>
              <p className="text-[#6e6e6e] text-md ">
                Bio Tree is a Platform for Creators
              </p>
            </div>
            <div className="tags  flex space-x-3">
              <div className="border border-[#ffffff1a] w-fit h-fit px-2  py-1 rounded-md text-[0.8rem] text-[#dadada]">
                Creator
              </div>
              <div className="border border-[#ffffff1a] w-fit h-fit px-2  py-1 rounded-md text-[0.8rem] text-md text-[#dadada]">
                <p>Creator</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
