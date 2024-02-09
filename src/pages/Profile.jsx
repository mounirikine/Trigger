import { FaArrowLeft, FaPlus, FaSearch } from "react-icons/fa";
import Header from "../components/Header";
import LeftSide from "../components/LeftSide";
import MobileHeader from "../components/MobileHeader";
import { Link } from "react-router-dom";
import { RiLayoutGridFill } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { BiCamera } from "react-icons/bi";



import { IoMenuSharp } from "react-icons/io5";

const Profile = () => {
  return (
    <>
      <span className="hidden sticky top-0 z-[9999999999] xl:flex ">
        <Header />
      </span>

      <section className="px-0.5 lg:px-3  bg-white mr-5 ">
        <main className=" lg:bg-gray-100 scroll  border   h-screen   lg:p-4 rounded-lg flex ">
          <LeftSide />
          <div className=" w-full lg:mx-5 border rounded-md bg-white   xl:w-9/12 overflow-y-auto scroll xl:px-10 ">
            <div className="flex items-center scroll justify-between py-5 px-6 fixed w-full  top-0 z-[99999999] bg-white">
              <Link
                to="/"
                className="rounded-full  hover:text-blue-700"
              >
                <FaArrowLeft className="text-2xl " />
              </Link>
              <span>
                <h1 className="text-xl font-semibold">Jakob Botosh</h1>
              </span>
              <span className="flex items-center gap-2">
                <Link>
                  <FaPlus className="text-xl " />
                </Link>
                <Link>
                  <IoMenuSharp className="text-2xl" />
                </Link>
              </span>
            </div>

            <div className="text-black mt-20  ">
              <div className="flex items-center gap-10 px-8 pt-10 w-full justify-center xl:pr-24 md:justify-start">
                <span className="md:w-5/12 flex items-center justify-center">
                  <div className="avatar online">
                    <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                  </div>
                </span>
                <span className="flex md:w-5/12 items-center justify-between gap-4 font-semibold">
                    <span className=" flex-col items-center justify-center">
                        <h1 className="text-center text-xl">0</h1>
                        <h1 className="text-center">Post</h1>
                    </span>
                    <span className=" flex-col items-center justify-center">
                        <h1 className="text-center text-xl">120k</h1>
                        <h1 className="text-center ">followers</h1>
                    </span>
                    <span className=" flex-col items-center justify-center">
                        <h1 className="text-center text-xl ">999</h1>
                        <h1 className="text-center">following</h1>
                    </span>
                </span>
                
              </div>
              <span className="flex gap-2 items-center justify-center pt-5 ">
                    <button className=" px-10 py-1 lg:w-4/12 rounded-lg text-white bg-blue-700 w-5/12">Follow</button>
                    <button className=" px-10 py-1 lg:w-4/12 border  rounded-lg bg-gray-100 w-5/12">Message</button>
                </span>
            </div>
            <div className="flex items-center justify-center  mt-8 px-3">
            <button className=" px-10 py-1 w-6/12  md:w-4/12 border-b-2 border-blue-700 flex items-center justify-center "><RiLayoutGridFill /></button>
            <button className=" px-10 py-1 w-6/12  md:w-4/12 border-b-2 border-gray-300 flex items-center justify-center ">< FaRegUser /></button>
            </div>

            <div className="flex items-center justify-center h-[50%]">
                <div>
                    <span className="flex  p-6 rounded-full border-4 ">
                        <BiCamera className="text-4xl" />
                    </span>
                    <span className="flex items-center justify-center"><h1 className="">No posts yet</h1></span>
                </div>
            </div>

          </div>

          {/* Content for the right bar */}
          {/* <RightSide /> */}
        </main>
      </section>
      <MobileHeader />
    </>
  );
};

export default Profile;
