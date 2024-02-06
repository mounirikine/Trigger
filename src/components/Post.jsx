
import { CiHeart } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa6";
import { FaShare } from "react-icons/fa";
import { BiBookmark } from "react-icons/bi";
import { useState } from "react";


const Post = () => {
  const [like,setLike] = useState(false)
  return (
    <>
   <section>
   <main className="mx-4 bg-white mt-3 rounded-lg px-5 ">
    <div className="flex items-center gap-2 py-4">
                        <span>
                        <img src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671116.jpg?size=626&ext=jpg&ga=GA1.2.1634089821.1701467307&semt=ais" width={40} className="rounded-full " />
                        </span>
                        <span>
                            <h1 className="font-semibold font-sans">Jakob Botosh</h1>
                            <p className="text-xs font-sans font-normal">10 Aug at 12:11 PM</p>

                        </span>
    </div>


    <div>
    <div className="flex flex-wrap overflow-x-hidden rounded-lg relative items-center justify-center gap-3">
        <div className="carousel w-full ">
          <div id="item1" className="carousel-item w-full">
            <img src="https://assets-global.website-files.com/656db0bcfe1106ae8fc0966a/657074ba6f50e4b444f513f5_blog-17.jpg" className="w-full" />
          </div> 
          <div id="item2" className="carousel-item w-full">
            <img src="https://assets-global.website-files.com/656db0bcfe1106ae8fc0966a/657074ba6f50e4b444f513f5_blog-17.jpg" className="w-full" />
          </div> 
          <div id="item3" className="carousel-item w-full">
            <img src="https://assets-global.website-files.com/656db0bcfe1106ae8fc0966a/657074ba6f50e4b444f513f5_blog-17.jpg" className="w-full" />
          </div> 
          <div id="item4" className="carousel-item w-full">
            <img src="https://assets-global.website-files.com/656db0bcfe1106ae8fc0966a/657074ba6f50e4b444f513f5_blog-17.jpg" className="w-full" />
          </div>
          
        </div> 
        <span className=" absolute top-2 left-1 bg-gray-200 opacity-7  px-1 rounded-full ">1/5</span>
    </div>
    </div>
    <hr className="mt-2" />
    <div className="flex items-center py-2 justify-between">
        <div className="flex text-sm items-center justify-between gap-6">
        <span className=" cursor-pointer flex items-center gap-1">< CiHeart onClick={()=>setLike(!like)}      className={`text-2xl ${like? 'text-red-500' :''}`} /> 30 Like</span>
        <span className=" cursor-pointer flex items-center gap-1">< FaRegComment className="text-lg" /> 12 Comment</span>
        <span className=" cursor-pointer flex items-center gap-1">< FaShare      className="text-lg" /> 30 Share</span>
        </div>
        <div>
        <span className=" cursor-pointer text-xl w-1.5/12 font-bold flex items-center justify-center relative bg-gray-100 px-2 py-2 rounded-lg">
              <BiBookmark />{" "}
            </span>
        </div>
    </div>
    </main>
    <main className="mx-4 bg-white mt-3 rounded-lg px-5 ">
    <div className="flex items-center gap-2 py-4">
                        <span>
                        <img src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671116.jpg?size=626&ext=jpg&ga=GA1.2.1634089821.1701467307&semt=ais" width={40} className="rounded-full " />
                        </span>
                        <span>
                            <h1 className="font-semibold font-sans">Jakob Botosh</h1>
                            <p className="text-xs font-sans font-normal">10 Aug at 12:11 PM</p>

                        </span>
    </div>

    <div className="mb-3 ">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, sequi provident? Excepturi possimus debitis rerum exercitationem dolores tempora aliquam dignissimos accusamus quos! At ex architecto nihil nobis nulla, nisi enim?
    </div>
    <div>
    <div className="flex flex-wrap overflow-x-hidden rounded-lg relative items-center justify-center gap-3">
        <div className="carousel w-full ">
          <div id="item1" className="carousel-item w-full">
            <img src="https://assets-global.website-files.com/656db0bcfe1106ae8fc0966a/657074ba6f50e4b444f513f5_blog-17.jpg" className="w-full" />
          </div> 
          <div id="item2" className="carousel-item w-full">
            <img src="https://assets-global.website-files.com/656db0bcfe1106ae8fc0966a/657074ba6f50e4b444f513f5_blog-17.jpg" className="w-full" />
          </div> 
          <div id="item3" className="carousel-item w-full">
            <img src="https://assets-global.website-files.com/656db0bcfe1106ae8fc0966a/657074ba6f50e4b444f513f5_blog-17.jpg" className="w-full" />
          </div> 
          <div id="item4" className="carousel-item w-full">
            <img src="https://assets-global.website-files.com/656db0bcfe1106ae8fc0966a/657074ba6f50e4b444f513f5_blog-17.jpg" className="w-full" />
          </div>
          
        </div> 
        <span className=" absolute top-2 left-1 bg-gray-200 opacity-7  px-1 rounded-full ">1/5</span>
    </div>
    </div>
    <hr className="mt-2" />
    <div className="flex items-center py-2 justify-between">
        <div className="flex text-sm items-center justify-between gap-6">
        <span className=" cursor-pointer flex items-center gap-1">< CiHeart      className="text-2xl" /> 30 Like</span>
        <span className=" cursor-pointer flex items-center gap-1">< FaRegComment className="text-lg" /> 12 Comment</span>
        <span className=" cursor-pointer flex items-center gap-1">< FaShare      className="text-lg" /> 30 Share</span>
        </div>
        <div>
        <span className=" cursor-pointer text-xl w-1.5/12 font-bold flex items-center justify-center relative bg-gray-100 px-2 py-2 rounded-lg">
              <BiBookmark />{" "}
            </span>
        </div>
    </div>
    </main>
    <main className="mx-4 bg-white mt-3 rounded-lg px-5 ">
    <div className="flex items-center gap-2 py-4">
                        <span>
                        <img src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671116.jpg?size=626&ext=jpg&ga=GA1.2.1634089821.1701467307&semt=ais" width={40} className="rounded-full " />
                        </span>
                        <span>
                            <h1 className="font-semibold font-sans">Jakob Botosh</h1>
                            <p className="text-xs font-sans font-normal">10 Aug at 12:11 PM</p>

                        </span>
    </div>

    <div className="mb-3 ">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, sequi provident? Excepturi possimus debitis rerum exercitationem dolores tempora aliquam dignissimos accusamus quos! At ex architecto nihil nobis nulla, nisi enim?
    </div>
    <div>
    <div className="flex flex-wrap overflow-x-hidden rounded-lg relative items-center justify-center gap-3">
        <div className="carousel w-full ">
          <div id="item1" className="carousel-item w-full">
            <img src="https://assets-global.website-files.com/656db0bcfe1106ae8fc0966a/65706f8c8467b22d120ea60b_blog-14.jpg" className="w-full" />
          </div> 
          <div id="item2" className="carousel-item w-full">
            <img src="https://assets-global.website-files.com/656db0bcfe1106ae8fc0966a/657074ba6f50e4b444f513f5_blog-17.jpg" className="w-full" />
          </div> 
          <div id="item3" className="carousel-item w-full">
            <img src="https://assets-global.website-files.com/656db0bcfe1106ae8fc0966a/657074ba6f50e4b444f513f5_blog-17.jpg" className="w-full" />
          </div> 
          <div id="item4" className="carousel-item w-full">
            <img src="https://assets-global.website-files.com/656db0bcfe1106ae8fc0966a/657074ba6f50e4b444f513f5_blog-17.jpg" className="w-full" />
          </div>
          
        </div> 
        <span className=" absolute top-2 left-1 bg-gray-200 opacity-7  px-1 rounded-full ">1/5</span>
    </div>
    </div>
    <hr className="mt-2" />
    <div className="flex items-center py-2 justify-between">
        <div className="flex text-sm items-center justify-between gap-6">
        <span className=" cursor-pointer flex items-center gap-1">< CiHeart      className="text-2xl" /> 30 Like</span>
        <span className=" cursor-pointer flex items-center gap-1">< FaRegComment className="text-lg" /> 12 Comment</span>
        <span className=" cursor-pointer flex items-center gap-1">< FaShare      className="text-lg" /> 30 Share</span>
        </div>
        <div>
        <span className=" cursor-pointer text-xl w-1.5/12 font-bold flex items-center justify-center relative bg-gray-100 px-2 py-2 rounded-lg">
              <BiBookmark />{" "}
            </span>
        </div>
    </div>
    </main>
    <main className="mx-4 bg-white mt-3 rounded-lg px-5 ">
    <div className="flex items-center gap-2 py-4">
                        <span>
                        <img src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671116.jpg?size=626&ext=jpg&ga=GA1.2.1634089821.1701467307&semt=ais" width={40} className="rounded-full " />
                        </span>
                        <span>
                            <h1 className="font-semibold font-sans">Jakob Botosh</h1>
                            <p className="text-xs font-sans font-normal">10 Aug at 12:11 PM</p>

                        </span>
    </div>

    <div className="mb-3 ">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, sequi provident? Excepturi possimus debitis rerum exercitationem dolores tempora aliquam dignissimos accusamus quos! At ex architecto nihil nobis nulla, nisi enim?
    </div>
    <div>
    <div className="flex flex-wrap overflow-x-hidden rounded-lg relative items-center justify-center gap-3">
        <div className="carousel w-full ">
          <div id="item1" className="carousel-item w-full">
            <img src="https://assets-global.website-files.com/656db0bcfe1106ae8fc0966a/657074ba6f50e4b444f513f5_blog-17.jpg" className="w-full" />
          </div> 
          <div id="item2" className="carousel-item w-full">
            <img src="https://assets-global.website-files.com/656db0bcfe1106ae8fc0966a/65706f81975f7d5a9f432379_blog-13.jpg" className="w-full" />
          </div> 
          <div id="item3" className="carousel-item w-full">
            <img src="https://assets-global.website-files.com/656db0bcfe1106ae8fc0966a/657074ba6f50e4b444f513f5_blog-17.jpg" className="w-full" />
          </div> 
          <div id="item4" className="carousel-item w-full">
            <img src="https://assets-global.website-files.com/656db0bcfe1106ae8fc0966a/657074ba6f50e4b444f513f5_blog-17.jpg" className="w-full" />
          </div>
          
        </div> 
        <span className=" absolute top-2 left-1 bg-gray-200 opacity-7  px-1 rounded-full ">1/5</span>
    </div>
    </div>
    <hr className="mt-2" />
    <div className="flex items-center py-2 justify-between">
        <div className="flex text-sm items-center justify-between gap-6">
        <span className=" cursor-pointer flex items-center gap-1">< CiHeart      className="text-2xl" /> 30 Like</span>
        <span className=" cursor-pointer flex items-center gap-1">< FaRegComment className="text-lg" /> 12 Comment</span>
        <span className=" cursor-pointer flex items-center gap-1">< FaShare      className="text-lg" /> 30 Share</span>
        </div>
        <div>
        <span className=" cursor-pointer text-xl w-1.5/12 font-bold flex items-center justify-center relative bg-gray-100 px-2 py-2 rounded-lg">
              <BiBookmark />{" "}
            </span>
        </div>
    </div>
    </main>
    <main className="mx-4 bg-white mt-3 rounded-lg px-5 ">
    <div className="flex items-center gap-2 py-4">
                        <span>
                        <img src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671116.jpg?size=626&ext=jpg&ga=GA1.2.1634089821.1701467307&semt=ais" width={40} className="rounded-full " />
                        </span>
                        <span>
                            <h1 className="font-semibold font-sans">Jakob Botosh</h1>
                            <p className="text-xs font-sans font-normal">10 Aug at 12:11 PM</p>

                        </span>
    </div>

    <div className="mb-3 ">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, sequi provident? Excepturi possimus debitis rerum exercitationem dolores tempora aliquam dignissimos accusamus quos! At ex architecto nihil nobis nulla, nisi enim?
    </div>
    <div>
    <div className="flex flex-wrap overflow-x-hidden rounded-lg relative items-center justify-center gap-3">
        <div className="carousel w-full ">
          <div id="item1" className="carousel-item w-full">
            <img src="https://assets-global.website-files.com/656db0bcfe1106ae8fc0966a/65706d116b6ca6340ec1b051_blog-3.jpg" className="w-full" />
          </div> 
          <div id="item2" className="carousel-item w-full">
            <img src="https://assets-global.website-files.com/656db0bcfe1106ae8fc0966a/657074ba6f50e4b444f513f5_blog-17.jpg" className="w-full" />
          </div> 
          <div id="item3" className="carousel-item w-full">
            <img src="https://assets-global.website-files.com/656db0bcfe1106ae8fc0966a/657074ba6f50e4b444f513f5_blog-17.jpg" className="w-full" />
          </div> 
          <div id="item4" className="carousel-item w-full">
            <img src="https://assets-global.website-files.com/656db0bcfe1106ae8fc0966a/657074ba6f50e4b444f513f5_blog-17.jpg" className="w-full" />
          </div>
          
        </div> 
        <span className=" absolute top-2 left-1 bg-gray-200 opacity-7  px-1 rounded-full ">1/5</span>
    </div>
    </div>
    <hr className="mt-2" />
    <div className="flex items-center py-2 justify-between">
        <div className="flex text-sm items-center justify-between gap-6">
        <span className=" cursor-pointer flex items-center gap-1">< CiHeart      className="text-2xl" /> 30 Like</span>
        <span className=" cursor-pointer flex items-center gap-1">< FaRegComment className="text-lg" /> 12 Comment</span>
        <span className=" cursor-pointer flex items-center gap-1">< FaShare      className="text-lg" /> 30 Share</span>
        </div>
        <div>
        <span className=" cursor-pointer text-xl w-1.5/12 font-bold flex items-center justify-center relative bg-gray-100 px-2 py-2 rounded-lg">
              <BiBookmark />{" "}
            </span>
        </div>
    </div>
    </main>
    <main className="mx-4 bg-white mt-3 rounded-lg px-5 ">
    <div className="flex items-center gap-2 py-4">
                        <span>
                        <img src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671116.jpg?size=626&ext=jpg&ga=GA1.2.1634089821.1701467307&semt=ais" width={40} className="rounded-full " />
                        </span>
                        <span>
                            <h1 className="font-semibold font-sans">Jakob Botosh</h1>
                            <p className="text-xs font-sans font-normal">10 Aug at 12:11 PM</p>

                        </span>
    </div>

    <div className="mb-3 ">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, sequi provident? Excepturi possimus debitis rerum exercitationem dolores tempora aliquam dignissimos accusamus quos! At ex architecto nihil nobis nulla, nisi enim?
    </div>
    <div>
    <div className="flex flex-wrap overflow-x-hidden rounded-lg relative items-center justify-center gap-3">
        <div className="carousel w-full ">
          <div id="item1" className="carousel-item w-full">
            <img src="https://assets-global.website-files.com/656db0bcfe1106ae8fc0966a/656e20b3a0d2fb37185e5767_blog-1.jpg" className="w-full" />
          </div> 
          <div id="item2" className="carousel-item w-full">
            <img src="https://assets-global.website-files.com/656db0bcfe1106ae8fc0966a/657074ba6f50e4b444f513f5_blog-17.jpg" className="w-full" />
          </div> 
          <div id="item3" className="carousel-item w-full">
            <img src="https://assets-global.website-files.com/656db0bcfe1106ae8fc0966a/657074ba6f50e4b444f513f5_blog-17.jpg" className="w-full" />
          </div> 
          <div id="item4" className="carousel-item w-full">
            <img src="https://assets-global.website-files.com/656db0bcfe1106ae8fc0966a/657074ba6f50e4b444f513f5_blog-17.jpg" className="w-full" />
          </div>
          
        </div> 
        <span className=" absolute top-2 left-1 bg-gray-200 opacity-7  px-1 rounded-full ">1/5</span>
    </div>
    </div>
    <hr className="mt-2" />
    <div className="flex items-center py-2 justify-between">
        <div className="flex text-sm items-center justify-between gap-6">
        <span className=" cursor-pointer flex items-center gap-1">< CiHeart      className="text-2xl" /> 30 Like</span>
        <span className=" cursor-pointer flex items-center gap-1">< FaRegComment className="text-lg" /> 12 Comment</span>
        <span className=" cursor-pointer flex items-center gap-1">< FaShare      className="text-lg" /> 30 Share</span>
        </div>
        <div>
        <span className=" cursor-pointer text-xl w-1.5/12 font-bold flex items-center justify-center relative bg-gray-100 px-2 py-2 rounded-lg">
              <BiBookmark />{" "}
            </span>
        </div>
    </div>
    </main>
    <main className="mx-4 bg-white mt-3 rounded-lg px-5 ">
    <div className="flex items-center gap-2 py-4">
                        <span>
                        <img src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671116.jpg?size=626&ext=jpg&ga=GA1.2.1634089821.1701467307&semt=ais" width={40} className="rounded-full " />
                        </span>
                        <span>
                            <h1 className="font-semibold font-sans">Jakob Botosh</h1>
                            <p className="text-xs font-sans font-normal">10 Aug at 12:11 PM</p>

                        </span>
    </div>

    <div className="mb-3 ">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, sequi provident? Excepturi possimus debitis rerum exercitationem dolores tempora aliquam dignissimos accusamus quos! At ex architecto nihil nobis nulla, nisi enim?
    </div>
    <div>
    <div className="flex flex-wrap overflow-x-hidden rounded-lg relative items-center justify-center gap-3">
        <div className="carousel w-full ">
          <div id="item1" className="carousel-item w-full">
            <img src="https://assets-global.website-files.com/656db0bcfe1106ae8fc0966a/657074ba6f50e4b444f513f5_blog-17.jpg" className="w-full" />
          </div> 
          <div id="item2" className="carousel-item w-full">
            <img src="https://assets-global.website-files.com/656db0bcfe1106ae8fc0966a/657074ba6f50e4b444f513f5_blog-17.jpg" className="w-full" />
          </div> 
          <div id="item3" className="carousel-item w-full">
            <img src="https://assets-global.website-files.com/656db0bcfe1106ae8fc0966a/657074ba6f50e4b444f513f5_blog-17.jpg" className="w-full" />
          </div> 
          <div id="item4" className="carousel-item w-full">
            <img src="https://assets-global.website-files.com/656db0bcfe1106ae8fc0966a/657074ba6f50e4b444f513f5_blog-17.jpg" className="w-full" />
          </div>
          
        </div> 
        <span className=" absolute top-2 left-1 bg-gray-200 opacity-7  px-1 rounded-full ">1/5</span>
    </div>
    </div>
    <hr className="mt-2" />
    <div className="flex items-center py-2 justify-between">
        <div className="flex text-sm items-center justify-between gap-6">
        <span className=" cursor-pointer flex items-center gap-1">< CiHeart      className="text-2xl" /> 30 Like</span>
        <span className=" cursor-pointer flex items-center gap-1">< FaRegComment className="text-lg" /> 12 Comment</span>
        <span className=" cursor-pointer flex items-center gap-1">< FaShare      className="text-lg" /> 30 Share</span>
        </div>
        <div>
        <span className=" cursor-pointer text-xl w-1.5/12 font-bold flex items-center justify-center relative bg-gray-100 px-2 py-2 rounded-lg">
              <BiBookmark />{" "}
            </span>
        </div>
    </div>
    </main>
    <main className="mx-4 bg-white mt-3 rounded-lg px-5 ">
    <div className="flex items-center gap-2 py-4">
                        <span>
                        <img src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671116.jpg?size=626&ext=jpg&ga=GA1.2.1634089821.1701467307&semt=ais" width={40} className="rounded-full " />
                        </span>
                        <span>
                            <h1 className="font-semibold font-sans">Jakob Botosh</h1>
                            <p className="text-xs font-sans font-normal">10 Aug at 12:11 PM</p>

                        </span>
    </div>

    <div className="mb-3 ">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, sequi provident? Excepturi possimus debitis rerum exercitationem dolores tempora aliquam dignissimos accusamus quos! At ex architecto nihil nobis nulla, nisi enim?
    </div>
    <div>
    <div className="flex flex-wrap overflow-x-hidden rounded-lg relative items-center justify-center gap-3">
        <div className="carousel w-full ">
          <div id="item1" className="carousel-item w-full">
            <img src="https://assets-global.website-files.com/656db0bcfe1106ae8fc0966a/657074ba6f50e4b444f513f5_blog-17.jpg" className="w-full" />
          </div> 
          <div id="item2" className="carousel-item w-full">
            <img src="https://assets-global.website-files.com/656db0bcfe1106ae8fc0966a/657074ba6f50e4b444f513f5_blog-17.jpg" className="w-full" />
          </div> 
          <div id="item3" className="carousel-item w-full">
            <img src="https://assets-global.website-files.com/656db0bcfe1106ae8fc0966a/657074ba6f50e4b444f513f5_blog-17.jpg" className="w-full" />
          </div> 
          <div id="item4" className="carousel-item w-full">
            <img src="https://assets-global.website-files.com/656db0bcfe1106ae8fc0966a/657074ba6f50e4b444f513f5_blog-17.jpg" className="w-full" />
          </div>
          
        </div> 
        <span className=" absolute top-2 left-1 bg-gray-200 opacity-7  px-1 rounded-full ">1/5</span>
    </div>
    </div>
    <hr className="mt-2" />
    <div className="flex items-center py-2 justify-between">
        <div className="flex text-sm items-center justify-between gap-6">
        <span className=" cursor-pointer flex items-center gap-1">< CiHeart      className="text-2xl" /> 30 Like</span>
        <span className=" cursor-pointer flex items-center gap-1">< FaRegComment className="text-lg" /> 12 Comment</span>
        <span className=" cursor-pointer flex items-center gap-1">< FaShare      className="text-lg" /> 30 Share</span>
        </div>
        <div>
        <span className=" cursor-pointer text-xl w-1.5/12 font-bold flex items-center justify-center relative bg-gray-100 px-2 py-2 rounded-lg">
              <BiBookmark />{" "}
            </span>
        </div>
    </div>
    </main>
    <main className="mx-4 bg-white mt-3 rounded-lg px-5 ">
    <div className="flex items-center gap-2 py-4">
                        <span>
                        <img src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671116.jpg?size=626&ext=jpg&ga=GA1.2.1634089821.1701467307&semt=ais" width={40} className="rounded-full " />
                        </span>
                        <span>
                            <h1 className="font-semibold font-sans">Jakob Botosh</h1>
                            <p className="text-xs font-sans font-normal">10 Aug at 12:11 PM</p>

                        </span>
    </div>

    <div className="mb-3 ">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, sequi provident? Excepturi possimus debitis rerum exercitationem dolores tempora aliquam dignissimos accusamus quos! At ex architecto nihil nobis nulla, nisi enim?
    </div>
    <div>
    <div className="flex flex-wrap overflow-x-hidden rounded-lg relative items-center justify-center gap-3">
        <div className="carousel w-full ">
          <div id="item1" className="carousel-item w-full">
            <img src="https://assets-global.website-files.com/656db0bcfe1106ae8fc0966a/657074ba6f50e4b444f513f5_blog-17.jpg" className="w-full" />
          </div> 
          <div id="item2" className="carousel-item w-full">
            <img src="https://assets-global.website-files.com/656db0bcfe1106ae8fc0966a/657074ba6f50e4b444f513f5_blog-17.jpg" className="w-full" />
          </div> 
          <div id="item3" className="carousel-item w-full">
            <img src="https://assets-global.website-files.com/656db0bcfe1106ae8fc0966a/657074ba6f50e4b444f513f5_blog-17.jpg" className="w-full" />
          </div> 
          <div id="item4" className="carousel-item w-full">
            <img src="https://assets-global.website-files.com/656db0bcfe1106ae8fc0966a/657074ba6f50e4b444f513f5_blog-17.jpg" className="w-full" />
          </div>
          
        </div> 
        <span className=" absolute top-2 left-1 bg-gray-200 opacity-7  px-1 rounded-full ">1/5</span>
    </div>
    </div>
    <hr className="mt-2" />
    <div className="flex items-center py-2 justify-between">
        <div className="flex text-sm items-center justify-between gap-6">
        <span className=" cursor-pointer flex items-center gap-1">< CiHeart      className="text-2xl" /> 30 Like</span>
        <span className=" cursor-pointer flex items-center gap-1">< FaRegComment className="text-lg" /> 12 Comment</span>
        <span className=" cursor-pointer flex items-center gap-1">< FaShare      className="text-lg" /> 30 Share</span>
        </div>
        <div>
        <span className=" cursor-pointer text-xl w-1.5/12 font-bold flex items-center justify-center relative bg-gray-100 px-2 py-2 rounded-lg">
              <BiBookmark />{" "}
            </span>
        </div>
    </div>
    </main>
    <main className="mx-4 bg-white mt-3 rounded-lg px-5 ">
    <div className="flex items-center gap-2 py-4">
                        <span>
                        <img src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671116.jpg?size=626&ext=jpg&ga=GA1.2.1634089821.1701467307&semt=ais" width={40} className="rounded-full " />
                        </span>
                        <span>
                            <h1 className="font-semibold font-sans">Jakob Botosh</h1>
                            <p className="text-xs font-sans font-normal">10 Aug at 12:11 PM</p>

                        </span>
    </div>

    <div className="mb-3 ">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, sequi provident? Excepturi possimus debitis rerum exercitationem dolores tempora aliquam dignissimos accusamus quos! At ex architecto nihil nobis nulla, nisi enim?
    </div>
    <div>
    <div className="flex flex-wrap overflow-x-hidden rounded-lg relative items-center justify-center gap-3">
        <div className="carousel w-full ">
          <div id="item1" className="carousel-item w-full">
            <img src="https://assets-global.website-files.com/656db0bcfe1106ae8fc0966a/657074ba6f50e4b444f513f5_blog-17.jpg" className="w-full" />
          </div> 
          <div id="item2" className="carousel-item w-full">
            <img src="https://assets-global.website-files.com/656db0bcfe1106ae8fc0966a/657074ba6f50e4b444f513f5_blog-17.jpg" className="w-full" />
          </div> 
          <div id="item3" className="carousel-item w-full">
            <img src="https://assets-global.website-files.com/656db0bcfe1106ae8fc0966a/657074ba6f50e4b444f513f5_blog-17.jpg" className="w-full" />
          </div> 
          <div id="item4" className="carousel-item w-full">
            <img src="https://assets-global.website-files.com/656db0bcfe1106ae8fc0966a/657074ba6f50e4b444f513f5_blog-17.jpg" className="w-full" />
          </div>
          
        </div> 
        <span className=" absolute top-2 left-1 bg-gray-200 opacity-7  px-1 rounded-full ">1/5</span>
    </div>
    </div>
    <hr className="mt-2" />
    <div className="flex items-center py-2 justify-between">
        <div className="flex text-sm items-center justify-between gap-6">
        <span className=" cursor-pointer flex items-center gap-1">< CiHeart      className="text-2xl" /> 30 Like</span>
        <span className=" cursor-pointer flex items-center gap-1">< FaRegComment className="text-lg" /> 12 Comment</span>
        <span className=" cursor-pointer flex items-center gap-1">< FaShare      className="text-lg" /> 30 Share</span>
        </div>
        <div>
        <span className=" cursor-pointer text-xl w-1.5/12 font-bold flex items-center justify-center relative bg-gray-100 px-2 py-2 rounded-lg">
              <BiBookmark />{" "}
            </span>
        </div>
    </div>
    </main>
   </section>
    </>
  )
}

export default Post