import React from 'react'
import bannerimg2 from "../assets/banner_wallpaper.svg";

function Experties() {
    return (
        <div className='mainContainer mt-2'>
            <h1 className='  mb-8 text-5xl font-bold underline text-center'>My Experties</h1>
            <div
            
            style={
                {
                  backgroundImage:`url(${bannerimg2})`,
                  backgroundSize:"cover"
                } }className='expertiesContainer items-center flex py-16 '>
                <div className=' flex justify-center'>
                    <div className='w-2/3 text-white text-center space-y-4'>

                    {/* text container */}
                    <h1 className='text-4xl font-bold'>I love these Technologies</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. consectetur niam facilis odit. Ad molestiaedolore sequi aut laborum est fuga temporibus eligendi quasi odit expedita assumenda. Iusto, laudantium unde.</p>
                    
                    <button className='px-3 py-2 bg-orange-500 rounded-full shadow-lg text-2xl'>Hire Me</button>
                    </div>
                </div>
                <div className=' flex  justify-center'>
                    {/* experties section */}
                    <div className='flex   space-x-3 flex-wrap space-y-3'>
                    <p className='bg-gray-300  mt-4 w-fit px-3 py-2 rounded-full'> Core Java</p>
                    <p className='bg-gray-300 w-fit px-3 py-2 rounded-full'> J22EE</p>
                    <p className='bg-gray-300 w-fit px-3 py-2 rounded-full'> Hibernate(ORM Tool)</p>
                    <p className='bg-gray-300 w-fit px-3 py-2 rounded-full'> Spring Framework</p>
                    <p className='bg-gray-300 w-fit px-3 py-2 rounded-full'> Spring Boot Framework</p>
                    <p className='bg-gray-300 w-fit px-3 py-2 rounded-full'> JavaScript</p>
                    <p className='bg-gray-300 w-fit px-3 py-2 rounded-full'> Bootstrap</p>
                    <p className='bg-gray-300 w-fit px-3 py-2 rounded-full'> React js</p>
                    <p className='bg-gray-300 w-fit px-3 py-2 rounded-full'> Tailwind Css</p>
                    <p className='bg-gray-300 w-fit px-3 py-2 rounded-full'> NextJs</p></div>
                </div>
                   
                

            </div>

        </div>
    )
}

export default Experties
