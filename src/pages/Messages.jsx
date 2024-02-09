import { FaSearch } from "react-icons/fa";
import LeftSide from "../components/LeftSide";
import MobileHeader from "../components/MobileHeader";
import RightSide from "../components/RightSide";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const Messages = () => {
  return (
    <>

  
    <span className="hidden sticky top-0 z-[9999999999] xl:flex ">
      <Header />
    </span>

      <section className="px-0.5 lg:px-3   ">
        <main className="lg:bg-gray-100 scroll    h-screen   lg:p-4 rounded-lg flex ">
          <LeftSide />
          <div className=" w-full lg:mx-5   xl:w-9/12 overflow-y-auto scroll xl:px-10 ">
            <div className="flex md:shadow-md sticky top-0 z-[99999] bg-white items-center gap-2 rounded-md  py-2 px-5 md:px-10 md:py-4 justify-between">
              <span>
                <img
                  src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671116.jpg?size=626&ext=jpg&ga=GA1.2.1634089821.1701467307&semt=ais"
                  width={40}
                  className="rounded-full "
                />
              </span>
              <span>
                <h1 className=" text-lg font-black">Chats</h1>
              </span>
              <span className="flex items-center gap-2">
                <span className="p-3 rounded-full  ">
                  <FaSearch />
                </span>
                <span className="p-3 rounded-full text-white bg-blue-600">
                  <FaPlus />
                </span>
              </span>
            </div>

            <div className="min-h-screen  bg-white xl:mt-2  p-1 rounded-lg ">
              <div className="   top-14   bg-white items-center justify-between  py-1">
                <span className="flex items-center justify-between w-full py-2 px-2 lg:px-10  xl:py-3">
                    <h1 className="font-semibold  text-lg">Active Now</h1>
                    <Link className="text-blue-700 text-sm">See all</Link>
                </span>
                <span className="flex items-center gap-2 py-2 xl:py-2 overflow-x-auto scroll lg:px-4 xl:px-8 xl:gap-5">
                    {
                      [1,2,3,4,5,6,7,8,9,10,11,12].map((item,index)=>(
                        <div key={index} className="avatar online">
                        <div className="w-14 xl:w-20 md:w-20  rounded-full">
                          <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                      </div>
                      ))
                    }
                </span>
              </div>
              <hr />

              <div className="py-2 overflow-y-scroll scroll">
                    {
                      [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30].map((item,index)=>(
                        <Link to='/chatRoom' className="flex items-center justify-between px-3 md:px-7 md:py-1" key={index}>
                        <div className="flex  items-center gap-2 py-1.5 w-9/12 lg:w-7/12 ">
                          <span>
                            <img
                              src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671116.jpg?size=626&ext=jpg&ga=GA1.2.1634089821.1701467307&semt=ais"
                              width={40}
                              className="rounded-full "
                            />
                          </span>
                          <span>
                            <h1 className="font-semibold font-sans">Jakob Botosh</h1>
                            <p className="text-xs flex  items-center gap-1 font-sans font-normal">
                            <img
                              src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671116.jpg?size=626&ext=jpg&ga=GA1.2.1634089821.1701467307&semt=ais"
                              width={12}
                              className="rounded-full "
                            /> <p className="w-10/12 truncate">Hi !How are You  ?</p>
                            </p>
                          </span>
                        </div>
                        <div className="w-3/12 lg:w-2/12 grid md:flex items-center justify-center">
                              <p className="text-sm">2 min ago </p>
                              <p className="text-center bg-red-500 flex items-center justify-center text-white w-4/12 text-sm mx-auto rounded-full px-0.5">+9</p>
                        </div>
                      </Link>
                      ))
                    }

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

export default Messages;
