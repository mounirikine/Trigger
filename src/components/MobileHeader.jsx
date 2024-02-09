import { AiFillHome } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import { FaVideo } from "react-icons/fa";

import { BiSolidMessageRounded } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const MobileHeader = () => {
    const [activeTab,setActiveTab]=useState('Feed')
    const navigate = useLocation()


  return (
    < >
    <main className=" flex lg:hidden fixed bottom-0 w-full">
        <div className="flex justify-between px-10 bg-white w-full py-0.5 rounded-md shadow-md items-center  border ">
           <Link onClick={()=>setActiveTab('Feed')} to='/'>< AiFillHome className={`text-2xl ${navigate.pathname === '/'? 'text-blue-700 ' : ''}`} /></Link>
           <Link onClick={()=>setActiveTab('')} >< CiSearch className="text-2xl" /></Link>
           <Link onClick={()=>setActiveTab('')}  className="border p-2 rounded-full bg-blue-700">< CiCirclePlus className="text-white text-4xl" /></Link>
           <Link to='/WatchVideos' onClick={()=>setActiveTab('')} >< FaVideo className={`text-2xl ${navigate.pathname === '/WatchVideos'?'text-blue-700' :''}`} /></Link>
           <Link onClick={()=>setActiveTab('')} >< FaUserAlt className="text-xl" /></Link>
        </div>
    </main>
    
    </>
  )
}

export default MobileHeader