import React from "react";
import Image from "next/image";
import image from "../../public/Untitled design.png";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineBriefcase } from "react-icons/hi";
import { HiOutlineMail } from "react-icons/hi";
import { SlSocialTwitter } from "react-icons/sl";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import { FaBootstrap } from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
} from "react-icons/si";

import { IoLogoJavascript, IoLogoReact, IoLogoNodejs } from "react-icons/io5";

export default function ProfileCard() {
  return (
    <div>
      <div className="p-5 flex justify-center">
        <div className="max-w-[1100px] w-full first-letter:flex gap-6">
          <div className="lg:fixed ">
            <div className="bg-white bg-opacity-10 backdrop-blur-lg border flex flex-col border-[#ffffff1a] h-fit lg:w-[480px] rounded-3xl p-4 ">
              <div className="gap-2 flex flex-col">
                <Image
                  src={image}
                  className="overflow-hidden lg:h-[450px] w-full rounded-lg "
                />
                <div className="flex flex-col gap-2 mt-3">
                  <h1 className="text-white text-2xl  ">Hey again 👋 </h1>
                  <p className="text-[#6e6e6e] text-sm max-w-[450px] typewriter">
                    When I'm not designing, I love to explore the outdoors.
                    Hiking and camping are two of my favorite activities, and
                    I'm always looking for new trails to conquer or campsites to
                    set up in. I'm also an amateur
                  </p>
                </div>
                <div className="tags  flex space-x-3">
                  <div className="border border-[#ffffff1a] w-fit h-fit px-2  py-1 rounded-md text-[0.8rem] text-[#dadada] flex items-center">
                    <HiOutlineLocationMarker className="mr-1" />
                    INDIA, Mumbai
                  </div>
                  <div className="border border-[#ffffff1a] w-fit h-fit px-2  py-1 rounded-md text-[0.8rem] text-md text-[#dadada] flex items-center">
                    <HiOutlineBriefcase className="mr-1" />
                    <p>SlashRTC</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col  gap-4 self-end lg:ml-[calc(100%-54%)] mt-5 lg:mt-0">
            <div className="bg-white bg-opacity-10 backdrop-blur-lg border flex flex-col border-[#ffffff1a] h-fit rounded-2xl p-4">
              <div className="gap-2 flex flex-col">
                <div className="flex flex-col gap-2 mt-3">
                  <h1 className="text-white text-2xl  ">Vedant Naidu </h1>
                  <p className="text-[#6e6e6e] text-md ">
                    is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy
                    text ever since the 1500s, when an unknown printer took a
                    galley of type and scrambled it to make a type specimen
                    book. It has survived not only five centuries, but also the
                    leap into electronic typesetting, remaining essentially
                    unchanged. It was popularised in the 1960s with the release
                    of Letraset sheets containing Lorem Ipsum passages, and more
                    recently with desktop publishing software like Aldus
                    PageMaker including versions of Lorem Ipsum.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-lg border flex flex-col border-[#ffffff1a] h-fit rounded-2xl p-4">
              <div className="gap-1 flex flex-col">
                <div className="flex flex-col gap-2 mt-2">
                  <h1 className="text-white text-2xl  ">Education </h1>
                  <div className="border-b  border-[#ffffff25] pb-2">
                    <div>
                      <h1 className="text-white lg:text-lg text-base">
                        Master's in Computer Application
                      </h1>
                      <p className="lg:text-base text-sm ">
                        NCRD's Sterling Institute of Management Studies{" "}
                      </p>

                      <div className="flex font-extralight lg:text-base text-sm ">
                        <p className=" ">Mumbai University</p>

                        <p className="mx-2">JAN 2021 - NOV 2022</p>
                      </div>
                    </div>
                  </div>
                  <div className="border-b border-[#ffffff25] pb-2">
                    <div>
                      <h1 className="text-white lg:text-lg text-base">
                        Bacholers in Computer Science
                      </h1>
                      <p className="lg:text-base text-sm">
                        Pillai HOC College of Arts, Science and Commerce{" "}
                      </p>

                      <div className="flex font-extralight lg:text-base text-sm ">
                        <p className=" ">Mumbai University</p>

                        <p className="mx-2">Aug 2017- Nov 2020</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-b border-[#ffffff25] pb-2">
                    <div>
                      <h1 className="text-white lg:text-lg text-base ">HSC</h1>
                      <p className="lg:text-base text-sm ">
                        New Bombay City Jr. College
                      </p>

                      <div className="flex font-extralight lg:text-base text-sm ">
                        <p className=" ">Mumbai University</p>

                        <p className="mx-2">AUG 2015- FEB 2017</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <h1 className="text-white lg:text-lg text-base">SSC</h1>
                      <p className="lg:text-base text-sm ">
                        St Paul High School{" "}
                      </p>

                      <div className="flex font-extralight lg:text-base text-sm ">
                        <p className=" ">Mumbai University</p>

                        <p className="mx-2">JUN 2014- JUN 2015</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-lg border flex flex-col border-[#ffffff1a] h-fit rounded-2xl p-4">
              <div className="gap-1 flex flex-col">
                <div className="flex flex-col gap-2 mt-2">
                  <h1 className="text-white text-2xl  ">Experience </h1>
                  <div className="border-b  border-[#ffffff25] pb-2">
                    <div>
                      <h1 className="text-white text-lg  ">SlashRTC</h1>
                      <div className="flex font-extralight">
                        <p className="text-md ">MERN Stack Developer</p>
                        <p className="mx-2">JAN 2023- PRESENT</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-[#6e6e6e] lg:text-md text-sm">
                        Working as a MERN Stack Developer at SlashRTC It was
                        popularised in the 1960s with the release of Letraset
                        sheets containing Lorem Ipsum passages, and more
                        recently with desktop publishing software like Aldus
                        PageMaker including versions of Lorem Ipsum.
                      </p>
                    </div>
                  </div>
                  <div className="">
                    <div>
                      <h1 className="text-white lg:text-lg text-md ">
                        Tectignis IT solutions
                      </h1>
                      <div className="flex font-extralight">
                        <p className="text-md ">Web Developer</p>
                        <p className="mx-2">Nov 2021- Nov 2022</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-[#6e6e6e] lg:text-md text-sm">
                        Worked as a Web Developer at Tectignis 60s with the
                        release of Letraset sheets containing Lorem Ipsum
                        passages, and more recently with desktop publishing
                        software like Aldus PageMaker including versions of
                        Lorem Ipsum.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-lg border flex flex-col border-[#ffffff1a] h-fit rounded-2xl p-4">
              <div className="gap-2 flex flex-col">
                <div className="flex flex-col gap-2 mt-3">
                  <h1 className="text-white text-2xl">Skills </h1>
                  <div className="grid grid-cols-5 place-items-center gap-5 bg-black py-5 rounded-xl text-3xl lg:text-5xl">
                    <div className="flex items-center rounded-lg">
                      <IoLogoHtml5 className=" hover:text-orange-500 hover:scale-125" />
                    </div>
                    <div className="flex items-center rounded-lg hover:scale-125">
                      <IoLogoCss3 className=" hover:text-blue-600 hover:scale-125" />
                    </div>
                    <div className="flex items-center rounded-lg">
                      <IoLogoJavascript className=" hover:text-yellow-400  hover:scale-125" />
                    </div>
                    <div className="flex items-center rounded-lg">
                      <FaBootstrap className=" hover:text-purple-900  hover:scale-125" />
                    </div>
                    <div className="flex items-center rounded-lg">
                      <SiTailwindcss className=" hover:text-sky-300  hover:scale-125" />
                    </div>
                    <div className="flex items-center rounded-lg">
                      <IoLogoReact className=" hover:text-sky-300  hover:scale-125" />
                    </div>
                    <div className="flex items-center rounded-lg">
                      <SiNextdotjs className=" hover:scale-125" />
                    </div>
                    <div className="flex items-center rounded-lg">
                      <IoLogoNodejs className="hover:text-green-500 hover:scale-125" />
                    </div>
                    <div className="flex items-center rounded-lg">
                      <SiExpress className="  hover:scale-125" />
                    </div>
                    <div className="flex items-center rounded-lg">
                      <SiMongodb className="hover:text-green-800 hover:scale-125" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-lg border flex flex-col border-[#ffffff1a] h-fit rounded-2xl p-4">
              <div className="gap-2 flex flex-col">
                <div className="flex flex-col gap-2 mt-2">
                  <h1 className="text-white text-2xl mb-4">Come and Say hi!</h1>
                  <a href="https://github.com/whynaidu" target="_blank">
                    <div className="bg-white bg-opacity-10 backdrop-blur-lg border flex border-[#ffffff1a] justify-center rounded-lg py-2 items-center hover:bg-black">
                      <BsGithub className="mx-2" />
                      <p>@whynaidu</p>
                    </div>
                  </a>
                  <a href="https://twitter.com/whynaidu" target="_blank">
                    <div className="bg-white bg-opacity-10 backdrop-blur-lg border flex border-[#ffffff1a] justify-center rounded-lg py-2 items-center hover:bg-sky-500">
                      <SlSocialTwitter className="mx-2" />
                      <p>@whynaidu</p>
                    </div>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/whynaidu/"
                    target="_blank"
                  >
                    <div className="bg-white bg-opacity-10 backdrop-blur-lg border flex border-[#ffffff1a] justify-center rounded-lg py-2 items-center hover:bg-blue-900">
                      <BsLinkedin className="mx-2" />
                      <p>@whynaidu</p>
                    </div>
                  </a>
                  <a href="mailto:naiduvedant@gmail.com" target="_blank">
                    <div className="bg-white bg-opacity-10 backdrop-blur-lg border flex border-[#ffffff1a] justify-center rounded-lg py-2 items-center hover:bg-red-500">
                      <HiOutlineMail className="mx-2" />
                      <p>naiduvedant@gmail.com</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
