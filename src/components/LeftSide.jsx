import { useEffect } from "react"
import { useState } from "react"
import { CiCalendar, CiShoppingCart, CiVideoOn } from "react-icons/ci"
import { FaRegFileLines } from "react-icons/fa6"
import { FcBiotech, FcCopyright, FcServiceMark, FcVip } from "react-icons/fc"
import { HiOutlinePhoto } from "react-icons/hi2"
import { RiGroupLine, RiHome3Line } from "react-icons/ri"
import { Link, useLocation } from "react-router-dom"


const LeftSide = () => {

    const [activeTab,setActiveTab]=useState('Feed')
    const navigate = useLocation()

    useEffect(()=>{
        console.log(navigate.pathname);
    },[])
  return (
    <>
    
    <div className="   xl:w-2/12 sticky top-0   overflow-y-auto scroll hidden lg:block">
            <div className="bg-white shadow-md p-2 rounded-lg">
                <div className="bg-gray-100 px-5 rounded-lg">
                    <div className="flex items-center gap-2 py-4">
                        <span>
                        <img src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671116.jpg?size=626&ext=jpg&ga=GA1.2.1634089821.1701467307&semt=ais" width={40} className="rounded-full " />
                        </span>
                        <span>
                            <h1 className="font-semibold font-sans">Jakob Botosh</h1>
                            <p className="text-xs font-sans font-normal">@jakobbotosh</p>

                        </span>
                    </div>  
                    <div className="flex justify-between text-sm py-4 font-sans">
                        <span >
                            <div className="text-center font-bold">2.3k</div>
                            <div className="text-center">Follower</div>
                        </span>
                        <span>
                            <div className="text-center font-bold">235</div>
                            <div className="text-center">Following</div>
                        </span>
                        <span>
                            <div className="text-center font-bold">20</div>
                            <div className="text-center">Post</div>
                        </span>
                    </div>
                </div>
            </div>

            <div className="bg-white shadow-md mt-4 px-2 py-2 rounded-lg text-sm mb-10 ">
                <ul className="px-1">
                <ul>
                <li onClick={() => setActiveTab('Feed')} className={`${navigate.pathname === '/' ? 'bg-blue-700 text-white' : 'text-black'} px-3 rounded-lg py-2 mb-1 relative`}>
    <Link to='/' className="flex items-center gap-1">
      <RiHome3Line className="text-lg font-bold" /> Feed
    </Link>
  </li>
  <li onClick={() => setActiveTab('Friends')} className={`${activeTab === 'Friends' ? 'bg-blue-700 text-white' : 'text-black'} px-3 rounded-lg py-2 mb-1 relative`}>
    <Link className="flex items-center gap-1 relative">
      <RiGroupLine className="text-lg font-bold" /> Friends
    </Link>
  </li>
  <li  onClick={() => setActiveTab('Events')} className={`${navigate.pathname === '/Events' ? 'bg-blue-700 text-white' : 'text-black'} px-3 rounded-lg py-2 mb-1 relative`}>
    <Link to='/Events' className="flex items-center gap-1 relative">
      <CiCalendar className="text-lg font-bold" /> Event
    </Link>
    <span className="absolute top-2 bg-red-500 px-2 py-0 rounded-full text-sm text-white right-0">4</span>
  </li>
  <li  onClick={() => setActiveTab('WatchVideos')} className={`${navigate.pathname === '/WatchVideos' ? 'bg-blue-700 text-white' : 'text-black'} px-3 rounded-lg py-2 mb-1 relative`}>
    <Link to='/WatchVideos' className="flex items-center gap-1 relative">
      <CiVideoOn className="text-lg font-bold" /> Watch Videos
    </Link>
  </li>
  <li onClick={() => setActiveTab('MarketPlace')} className={`${navigate.pathname === '/MarketPlace' ? 'bg-blue-700 text-white' : 'text-black'} px-3 rounded-lg py-2 mb-1 relative`}>
    <Link to='/MarketPlace' className="flex items-center gap-1 relative">
      <CiShoppingCart className="text-lg font-bold" /> Marketplace
    </Link>
  </li>
  <li onClick={() => setActiveTab('Photos')} className={`${activeTab === 'Photos' ? 'bg-blue-700 text-white' : 'text-black'} px-3 rounded-lg py-2 mb-1 relative`}>
    <Link className="flex items-center gap-1 relative">
      <HiOutlinePhoto className="text-lg font-bold" /> Photos
    </Link>
  </li>

  <li onClick={() => setActiveTab('Files')} className={`${activeTab === 'Files' ? 'bg-blue-700 text-white' : 'text-black'} px-3 rounded-lg py-2 mb-1 relative`}>
    <Link className="flex items-center gap-1 relative">
      <FaRegFileLines className="text-lg font-bold" /> Files
    </Link>
    <span className="absolute top-2 bg-blue-500 px-2 py-0 rounded-full text-sm text-white right-0">+9</span>
  </li>
</ul>

                    <div className="py-5">
                        <hr />
                    </div>

                    <h1>PAGES YOU LIKE</h1>
                    <li className=" text-black px-3 rounded-lg py-2 mb-1 relative "><Link className="flex items-center gap-1 relative"><FcCopyright className="text-lg font-bold" /> Files</Link> <span className=" absolute top-2 bg-blue-500 px-2 py-0 rounded-full text-sm text-white right-0">+9</span></li>
                    <li className=" text-black px-3 rounded-lg py-2 mb-1 relative "><Link className="flex items-center gap-1 relative"><FcVip className="text-lg font-bold" /> Files</Link> <span className=" absolute top-2 bg-blue-500 px-2 py-0 rounded-full text-sm text-white right-0">+9</span></li>
                    <li className=" text-black px-3 rounded-lg py-2 mb-1 relative "><Link className="flex items-center gap-1 relative"><FcServiceMark className="text-lg font-bold" /> Files</Link> <span className=" absolute top-2 bg-blue-500 px-2 py-0 rounded-full text-sm text-white right-0">+9</span></li>
                    <li className=" text-black px-3 rounded-lg py-2 mb-1 relative "><Link className="flex items-center gap-1 relative"><FcBiotech className="text-lg font-bold" /> Files</Link> <span className=" absolute top-2 bg-blue-500 px-2 py-0 rounded-full text-sm text-white right-0">+9</span></li>
                    <li className=" text-black px-3 rounded-lg py-2 mb-1 relative "><Link className="flex items-center gap-1 relative"> View All</Link></li>



                </ul>



            </div>

            <span className="text-sm mt-10 text-gray-500 dark:text-gray-300 sm:text-center">© 2023 <a href="https://flowbite.com/">Flowbite™</a>. All Rights Reserved.
    </span>
          </div>
    
    </>
  )
}

export default LeftSide