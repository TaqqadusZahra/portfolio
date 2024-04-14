import React, { useEffect, useRef } from 'react'
import bannerimg1 from "../assets/profile.jpeg"
import bannerimg2 from "../assets/banner_wallpaper.svg";
import Typed from "typed.js";

function Banner() {

    const el=useRef(null);
    useEffect(()=>{
        const typed = new Typed(el.current, {
            strings: ["Student", "Web Developer", "Frontend Developer", ], // Strings to display
            // Speed settings, try diffrent values untill you get good results
            startDelay: 100,
            typeSpeed: 50,
            backSpeed: 10,
            backDelay: 100,
            loop:true
          });
      
          // Destropying
          return () => {
            typed.destroy();
          };

    },[]);
    return (
        <>
        <div style={
                {
                  backgroundImage:`url(${bannerimg2})`,
                  backgroundSize:"cover"
                }
            }s className='main-conatiner flex  items-center'>
           
            {/* text */}
            <div
             className="w-full flex  iyems-center justify-center text-white">
                <div className='w-2/3'>
                <h3 className='  text-3xl font-semibold'>Hi , I am</h3>
                <h1 className=' mt-4 text-5xl font-bold'> Taqqadus Zahra </h1>
                <h2 className=' mt-4 text-2xl'>  I am <span className='font-bold' ref={el}></span></h2>
                <p className='mt-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus veniam minus sunt quo illo quisquam corrupti, dolorem ipsam minima soluta aspernatur deserunt atque fugiat qui omnis nemo. Reiciendis, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ducimus commodi obcaecati ut similique expedita sequi a numquam necessitatibus accusantium, doloribus culpa cum nam, vel ipsum magni! Reprehenderit, dolore amet?</p>
                {/* icons */}
                <div className='icon-container space-x-5 flex mt-4'>

               <a className=' border hover:bg-orange-500 cursor-pointer w-14 h-14 rounded-full  px-2 flex justify-center items-center bg-gray-900'><i class="fa-brands  text-4xl flex fa-facebook"></i></a> 
               <a className= ' border hover:bg-orange-500 cursor-pointer w-14 h-14 rounded-full   flex justify-center items-center bg-gray-900'> <i class="fa-brands  text-4xl fa-instagram"></i></a>
                <a className='  border hover:bg-orange-500 cursor-pointer w-14 h-14 rounded-full flex justify-center items-center bg-gray-900'><i class="fa-brands   text-4xl fa-youtube"></i></a>
               <a className='  border hover:bg-orange-500 cursor-pointer w-14 h-14 rounded-full flex justify-center items-center bg-gray-900'> <i class="fa-brands   text-4xl fa-twitter"></i></a>
                </div>
                <br/>
                <a className=' text-1xl px-3 py-2 bg-orange-500 rounded-full shadow-lg' href="/contact">Contact Me</a></div>
            </div>
            {/* image */}
            <div className='w-full flex justify-center'>
                <img className='rounded-full shadow-lg my-2 w-2/3 mt-24' src={bannerimg1}></img>
            </div>
        </div>
        </>


    )
}

export default Banner
