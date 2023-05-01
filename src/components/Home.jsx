import Image from "next/image";
import React, { useEffect, Suspense } from "react";
import imagee from "../../public/7a734bfde011875d0284dfbcb787ce4d.jpg";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Model } from "./Model";

export default function HomePage() {
  // useEffect(() => {
  //   // canvas size: [width, height]
  //   const canvas_size = [500, 500];
  //   // camera: new THREE.PerspectiveCamera(viewing angle, aspect ratio, shooting start, shooting end)
  //   const camera = new THREE.PerspectiveCamera(
  //     45,
  //     canvas_size[0] / canvas_size[1],
  //     1,
  //     10000
  //   );
  //   // lights: [new THREE.AmbientLight(color, intensity)] multiple lights can be added here
  //   const lights = [new THREE.AmbientLight(0xffffff, 3.8)];
  //   // GLTF or GLB file path
  //   const gltf_glb_path = "tibetan-sand-fox.glb";

  //   window.addEventListener(
  //     "DOMContentLoaded",
  //     mouse_follower(canvas_size, camera, lights, gltf_glb_path)
  //   );
  // }, []);

  return (
    <>
      <div className=" hidden lg:block">
        <Canvas className="">
          <ambientLight />
          <directionalLight position={[10, 10, 10]} />
          <Suspense fallback={null}>
            <Model position={[0, 1, 0]} />
          </Suspense>
        </Canvas>
      </div>

      <div className="flex justify-center items-center mx-auto absolute lg:top-1/2 lg:left-[40%]  top-1/3 left-[1.3rem]">
        <div className="h-fit flex items-center text-center text-2xl lg:text-3xl font-semibold mx-2">
          <div className="main-card flex justify-center w-full">
            <div className="card-wrapper">
              <div className="card-container hidden lg:flex">
                <div className="card-topRight bg-red-300 h-40 w-48 rounded-xl flex ">
                  <Image src={imagee} className="rounded-xl h-full" />
                </div>
                <div className="card-topLeft absolute bg-red-300 h-40 w-48 rounded-xl ">
                  <Image src={imagee} className="rounded-xl h-full" />
                </div>
                <div className="card-bottomLeft absolute bg-red-300 h-40 w-48 rounded-xl ">
                  <Image src={imagee} className="rounded-xl h-full" />
                </div>
                <div className="card-bottomRight absolute bg-red-300 h-40 w-48 rounded-xl  ">
                  <Image src={imagee} className="rounded-xl h-full" />
                </div>
              </div>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
