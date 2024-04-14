import React from 'react'

function Services() {
    return (
        <div className='maincontainer   py-12'>
            <h1 className='text-5xl font-bold underline text-center'>My Services</h1>
            <div className='services-container  space-x-5 px-10 flex mt-12 '>
                <div className=' cursor-pointer hover:bg-gray-100 space-y-3 shadow-lg roundes-xl bg-slate-200 p-5 text-center'>
                    <i class=" text-4xl fa-brands fa-aws"></i>
                    <h1 className='text-4xl'>Web Development</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt officiis quia illo omnis magni rerum dolorum nam, suscipit, quis eum laboriosam fuga possimus nihil in accusantium voluptates quisquam similique eveniet.</p>
                <button className='px-3  py-2 bg-orange-500 text-2xl rounded-full'>Check</button>
                </div>
                <div className=' cursor-pointer hover:bg-gray-100 space-y-3 shadow-lg roundes-xl p-5 bg-slate-200 text-center '>
                    <i class=" text-4xl fa-solid fa-mobile"></i>
                    <h1 className='text-4xl'>Android Development</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt officiis quia illo omnis magni rerum dolorum nam, suscipit, quis eum laboriosam fuga possimus nihil in accusantium voluptates quisquam similique eveniet.</p>
                <button className='px-3  py-2 bg-orange-500 text-2xl rounded-full'>Check</button></div>
                <div className=' cursor-pointer  hover:bg-gray-100 space-y-3 shadow-lg roundes-xl text-center p-5 bg-slate-200'>
                    <i class=" text-4xl fa-solid fa-server"></i>
                    <h1 className='text-4xl'>Backend Development</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt officiis quia illo omnis magni rerum dolorum nam, suscipit, quis eum laboriosam fuga possimus nihil in accusantium voluptates quisquam similique eveniet.</p>
                <button className='px-3  py-2 bg-orange-500 text-2xl rounded-full'>Check</button></div>
            </div>
        </div>
    )
}

export default Services
