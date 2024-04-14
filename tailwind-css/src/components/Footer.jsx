import React from 'react'

function Footer() {
    return (
       <div className='mainContainer  border py-5 bg-slate-100 flex justify-between px-72'>
        <div>
            <p>@2024 Taqqadus Zahra <span>All Rights Reserved</span></p>
        </div>
        <div className='space-x-5'>
        <a href='/about' className='hover:underline'>About</a>
        <a href='/policy' className='hover:underline'>Privacy Policy</a>
        <a href='/licensing' className='hover:underline'>Licensing</a>
        <a href='/contact' className='hover:underline'>Contact</a>
        </div>
       
          

       </div>
    )
}

export default Footer
