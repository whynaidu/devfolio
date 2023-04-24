import React from "react";
import { BiHomeAlt2 } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { HiOutlinePaintBrush,  } from "react-icons/hi2";
import { HiOutlineMail } from "react-icons/hi";
import { SlSocialTwitter } from "react-icons/sl";


import Link from "next/link";

export default function NavigationBar() {
  return (
    <div className="flex justify-center z-50  mt-[-100px] fixed bottom-5 left-0 right-0">
      <div className="flex w-fit p-2  bg-[#34343480] backdrop-blur-lg border border-[#ffffff25] rounded-2xl">
        <div className="space-x-3 mb-[-6px] flex items-center">
          <Link href="/">
            <div className="tooltip w-fit px-2 py-2  border border-[#ffffff25] rounded-xl HiOutlinePaintBrush">
              <span className="tooltiptext bg-[#272626]">Home</span>
              <BiHomeAlt2 style={{ fontSize: "22px" }} />
            </div>
          </Link>
          <Link href="/projects">
            <div className=" tooltip w-fit px-2 py-2  border border-[#ffffff25] rounded-xl">
              <span className="tooltiptext bg-[#272626]">Projects</span>
              <HiOutlinePaintBrush style={{ fontSize: "22px" }} />
            </div>
          </Link>
          <Link href="/about">
            <div className="tooltip w-fit px-2 py-2  border border-[#ffffff25] rounded-xl">
              <span className="tooltiptext bg-[#272626]">Profile</span>
              <CgProfile style={{ fontSize: "22px" }} />
            </div>
          </Link>
          <a href="https://twitter.com/whynaidu" target="_blank">
            <div className="tooltip w-fit px-2 py-2  border border-[#ffffff25] rounded-xl">
              <span className="tooltiptext bg-[#272626]">Twitter</span>
              <SlSocialTwitter style={{ fontSize: "22px" }} />
            </div>
          </a>
          <a href="mailto:naiduvedant@gmail.com" target="_blank">
            <div className="tooltip w-fit px-2 py-2  border border-[#ffffff25] rounded-xl">
              <span className="tooltiptext bg-[#272626]">Mail</span>
              <HiOutlineMail style={{ fontSize: "22px" }} />
            </div>
          </a>
        </div>
      </div>

      <div></div>
    </div>
  );
}
