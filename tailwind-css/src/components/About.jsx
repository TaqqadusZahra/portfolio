import React, { useState } from 'react'

import image from "../assets/profile.jpeg"

function About() {
   const[data,setData] =useState({
        image:image,
        title:"Java Developer & Android Developer" ,
        desc1:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore expedita voluptate quod deserunt eius. Ullam dolorum fugit inventore odio totam.
        `,
        desc2:`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, ipsum. Cumque quaerat ex aliquam nostrum quas, incidunt doloremque officia expedita ipsum tenetur iure laborum illum voluptates dignissimos maxime accusantium nobis!`,
         
actionbutton:{
    title:"Read More...",
    link:"/readmore"
}})
    return (
      <div className=' border bg-gray-100 py-16'>
        <h1 className='text-center pb-16 text-5xl underline font-bold '>About Me</h1>
        <div className='flex items-center '>
            {/* image-container */}
            <div className='w-full flex justify-center'>
                <img src={data.image} className='rounded-full w-2/3 ' ></img>
            </div>
            {/* text-container */}
            <div className='w-full  flex justify-center'>
                <div className=' space-y-5 w-2/3'>
                <h1 className='text-5xl font-semibold '>{data.title}</h1>
                <p>{data.desc1}
                </p>
                <p>{data.desc2}</p>
                <button className='bg-orange-500 text-2xl border px-3 py-2 rounded-full'>{data.actionbutton.title}</button></div>
            </div>
        </div>
        </div>
        
    )
}

export default About

