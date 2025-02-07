"use client"
// import cap from "../../public/image/cap.png";
import Image from 'next/image';
import Link from 'next/link';
import { motion } from "framer-motion";
import React, { createContext } from 'react';

export default function NavbarBottem() {
  return (
    <>
      <div className='bg-white h-[100%]'>
        <br />
        <div className="container mt-5">
          <div className='row'>
            <div className="col-lg-5 col-md-12">
              <motion.h1
                className='text-5xl text-[#ff5c00] leading-tight font-text ml-[40px]'
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Easy access to menus via QR codes!
              </motion.h1>
              <motion.p
                className='text-black font-text text-sm mt-4 leading-relaxed ml-[40px]'
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Discover A seamless solution for customers to scan QR codes and instantly view menus on a website.
              </motion.p>
              <br />
              <Link href={"/category"}>
                <motion.button
                  className='bg-[#ff5c00] px-4 py-2 mt-2 text-white hover:bg-black font-text text-sm ml-[40px]'
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  Explore Now
                </motion.button>
              </Link>
            </div>
            <div className="col-lg-1"></div>
            <div id='Cap' className="col-lg-6">
              <div style={{ marginTop: "-135px" }} className='flex justify-center align-center'>
                <motion.div
                  className="box"
                  initial={{ opacity: 0, x:-400 }}
                  animate={{ opacity: 1, x:0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01]
                  }}
                >
                  {/* <Image src={cap} alt="cap" width={440} /> */}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
