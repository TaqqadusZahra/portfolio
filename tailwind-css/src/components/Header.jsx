import{useState}from 'react'

function Header() {
   const[brandName,setBrandName]= useState("Taqqadus Zahra ");
   const [menuLinks,setMenuLinks]= useState([
    {
        title:"Home",
        link:"/home",
        id:1,
    },
   
    {
        title:"About",
        link:"/About",
        id:2,
    },
   
    {
        title:"Skills",
        link:"/Skills",
        id:3,
    },
   
    {
        title:"Portfolio",
        link:"/Portfolio",
        id:4,
    },{
   
        title:"Contact",
        link:"/Contact",
        id:5,
    },
   ]);
   const[actionButton,setActionButton]=useState({
    title:"Hire Me",
    link:"/hire-me",
   })
    return (
        <>
<div className=' h-20 maindiv flex justify-between items-center px-16 bg-gray-100'>
    <div>
        {/* logo */}
        <h1 className='text-2xl font-bold'>{brandName}</h1>
    </div>
    <div className='space-x-6'>
        {/* menu links */}
        {menuLinks.map((link) => (
    <a key={link.id} href={link.link} className='hover:text-orange-600 text-black'>{link.title}</a>
))}

    
        {/* 
        
        <a href='/portfolio'className='hover:text-orange-600'>Portfolio</a>
        <a href='/contact'className='hover:text-orange-600'>Contact</a> */}
      
    </div>
    <div>
{/* button */}
<a  href={actionButton} className='px-4 py-2 bg-orange-500 shadow rounded-full text-black text-1xl '>{actionButton.title}</a>
    </div>
</div>

        </>
    )
}

export default Header
