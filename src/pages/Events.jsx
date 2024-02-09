import Header from "../components/Header";
import LeftSide from "../components/LeftSide";
import MobileHeader from "../components/MobileHeader";
import RightSide from "../components/RightSide";
import { RiMenu5Fill } from "react-icons/ri";

const Events = () => {
  return (
    <>
      <Header />
      <section className="px-0.5 lg:px-3  ">
        <main className="bg-gray-100 scroll   overflow-y-auto  h-screen lg:p-4 rounded-lg  flex">
          <LeftSide />
          <div className=" w-full  xl:w-7/12 overflow-y-auto scroll ">
            <div className="flex items-center justify-between px-2 lg:px-5 py-3">
              <h1 className="text-lg font-semibold font-sans">
                Upcoming Event
              </h1>
              <h1 className="flex items-center gap-2 text-sm">
                {" "}
                Sort by:Most Resent <RiMenu5Fill />{" "}
              </h1>
            </div>

            <div className="grid grid-cols-1  md:grid-cols-2 items-center gap-4 px-2 md:px-4 lg:px-4">
              <div className="bg-white p-2 rounded-xl">
                <div className="h-[250px] overflow-hidden">
                  <img
                  
                    className="rounded-lg h-100"
                    src="https://assets-global.website-files.com/6574af64ea53e785fd62b9b1/6574e070657b5f5e97621da1_6516658b797619e3db4b7ebe_Rectangle%20748-min.jpg"
                    alt=""
                  />
                </div>
                <div className="py-2 relative">
                  <h1 className="text-green-500 text-sm">THU 10:00 AM</h1>
                  <h1 className="font-sans font-semibold">
                    Planning Masterclass
                  </h1>
                  <p className="text-sm pb-2 text-gray-700">
                    Location - 24 Royal Ln. Mesa,New Jensey
                  </p>

                  <hr />

                  <span className=" absolute -top-5 font-sans  text-center bg-white shadow-md px-2 py-1 rounded-lg right-4">
                       <div>AUG</div>
                       <div className="text-xl font-extrabold ">12</div>
                  </span>

                  <div className="avatar-group -space-x-3 rtl:space-x-reverse w-4/12 pt-2">
                    <div className="avatar">
                      <div className="w-12">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                      </div>
                    </div>
                    <div className="avatar">
                      <div className="w-12">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                      </div>
                    </div>
                    <div className="avatar">
                      <div className="w-12">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                      </div>
                    </div>
                    <div className="avatar placeholder">
                      <div className="w-12 bg-neutral text-neutral-content">
                        <span>+99</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-2 rounded-xl">
                <div className=" h-[250px] overflow-hidden">
                  <img
                    
                    className="rounded-lg  object-cover"
                    src="https://assets-global.website-files.com/6574af64ea53e785fd62b9b1/6574df5626577812e0296309_Elegant%20blog%20image%206-p-500.jpg"
                    alt=""
                  />
                </div>
                <div className="py-2 relative">
                  <h1 className="text-green-500 text-sm">THU 10:00 AM</h1>
                  <h1 className="font-sans font-semibold">
                    Planning Masterclass
                  </h1>
                  <p className="text-sm pb-2 text-gray-700">
                    Location - 24 Royal Ln. Mesa,New Jensey
                  </p>

                  <hr />

                  <span className=" absolute -top-5 font-sans  text-center bg-white shadow-md px-2 py-1 rounded-lg right-4">
                       <div>AUG</div>
                       <div className="text-xl font-extrabold ">12</div>
                  </span>

                  <div className="avatar-group -space-x-3 rtl:space-x-reverse w-4/12 pt-2">
                    <div className="avatar">
                      <div className="w-12">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                      </div>
                    </div>
                    <div className="avatar">
                      <div className="w-12">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                      </div>
                    </div>
                    <div className="avatar">
                      <div className="w-12">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                      </div>
                    </div>
                    <div className="avatar placeholder">
                      <div className="w-12 bg-neutral text-neutral-content">
                        <span>+99</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-2 rounded-xl">
                <div className="h-[250px] overflow-hidden">
                  <img
                    className="rounded-lg"
                    src="https://assets-global.website-files.com/6574af64ea53e785fd62b9b1/6574e08630d4d1e4716600c7_651665d65eed175c112871e6_Rectangle%20751-min-p-500.jpg"
                    alt=""
                  />
                </div>
                <div className="py-2 relative">
                  <h1 className="text-green-500 text-sm">THU 10:00 AM</h1>
                  <h1 className="font-sans font-semibold">
                    Planning Masterclass
                  </h1>
                  <p className="text-sm pb-2 text-gray-700">
                    Location - 24 Royal Ln. Mesa,New Jensey
                  </p>

                  <hr />

                  <span className=" absolute -top-5 font-sans  text-center bg-white shadow-md px-2 py-1 rounded-lg right-4">
                       <div>AUG</div>
                       <div className="text-xl font-extrabold ">12</div>
                  </span>

                  <div className="avatar-group -space-x-3 rtl:space-x-reverse w-4/12 pt-2">
                    <div className="avatar">
                      <div className="w-12">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                      </div>
                    </div>
                    <div className="avatar">
                      <div className="w-12">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                      </div>
                    </div>
                    <div className="avatar">
                      <div className="w-12">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                      </div>
                    </div>
                    <div className="avatar placeholder">
                      <div className="w-12 bg-neutral text-neutral-content">
                        <span>+99</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-2 rounded-xl">
                <div className="h-[250px] overflow-hidden">
                  <img
                    className="rounded-lg"
                    src="https://assets-global.website-files.com/6574af64ea53e785fd62b9b1/6574df5daba53ba10917901f_Elegant%20blog%20image%207-p-500.jpeg"
                    alt=""
                  />
                </div>
                <div className="py-2 relative">
                  <h1 className="text-green-500 text-sm">THU 10:00 AM</h1>
                  <h1 className="font-sans font-semibold">
                    Planning Masterclass
                  </h1>
                  <p className="text-sm pb-2 text-gray-700">
                    Location - 24 Royal Ln. Mesa,New Jensey
                  </p>

                  <hr />

                  <span className=" absolute -top-5 font-sans  text-center bg-white shadow-md px-2 py-1 rounded-lg right-4">
                       <div>AUG</div>
                       <div className="text-xl font-extrabold ">12</div>
                  </span>

                  <div className="avatar-group -space-x-3 rtl:space-x-reverse w-4/12 pt-2">
                    <div className="avatar">
                      <div className="w-12">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                      </div>
                    </div>
                    <div className="avatar">
                      <div className="w-12">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                      </div>
                    </div>
                    <div className="avatar">
                      <div className="w-12">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                      </div>
                    </div>
                    <div className="avatar placeholder">
                      <div className="w-12 bg-neutral text-neutral-content">
                        <span>+99</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-2 rounded-xl">
                <div className="h-[250px] overflow-hidden">
                  <img
                    className="rounded-lg"
                    src="https://assets-global.website-files.com/6574af64ea53e785fd62b9b1/6574df47f22229e900cc3a20_Elegant%20blog%20image%204-p-500.jpg"
                    alt=""
                  />
                </div>
                <div className="py-2 relative">
                  <h1 className="text-green-500 text-sm">THU 10:00 AM</h1>
                  <h1 className="font-sans font-semibold">
                    Planning Masterclass
                  </h1>
                  <p className="text-sm pb-2 text-gray-700">
                    Location - 24 Royal Ln. Mesa,New Jensey
                  </p>

                  <hr />

                  <span className=" absolute -top-5 font-sans  text-center bg-white shadow-md px-2 py-1 rounded-lg right-4">
                       <div>AUG</div>
                       <div className="text-xl font-extrabold ">12</div>
                  </span>

                  <div className="avatar-group -space-x-3 rtl:space-x-reverse w-4/12 pt-2">
                    <div className="avatar">
                      <div className="w-12">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                      </div>
                    </div>
                    <div className="avatar">
                      <div className="w-12">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                      </div>
                    </div>
                    <div className="avatar">
                      <div className="w-12">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                      </div>
                    </div>
                    <div className="avatar placeholder">
                      <div className="w-12 bg-neutral text-neutral-content">
                        <span>+99</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-2 rounded-xl">
                <div className="h-[250px] overflow-hidden">
                  <img
                    className="rounded-lg"
                    src="https://assets-global.website-files.com/6574af64ea53e785fd62b9b1/6574e070657b5f5e97621da1_6516658b797619e3db4b7ebe_Rectangle%20748-min.jpg"
                    alt=""
                  />
                </div>
                <div className="py-2 relative">
                  <h1 className="text-green-500 text-sm">THU 10:00 AM</h1>
                  <h1 className="font-sans font-semibold">
                    Planning Masterclass
                  </h1>
                  <p className="text-sm pb-2 text-gray-700">
                    Location - 24 Royal Ln. Mesa,New Jensey
                  </p>

                  <hr />

                  <span className=" absolute -top-5 font-sans  text-center bg-white shadow-md px-2 py-1 rounded-lg right-4">
                       <div>AUG</div>
                       <div className="text-xl font-extrabold ">12</div>
                  </span>

                  <div className="avatar-group -space-x-3 rtl:space-x-reverse w-4/12 pt-2">
                    <div className="avatar">
                      <div className="w-12">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                      </div>
                    </div>
                    <div className="avatar">
                      <div className="w-12">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                      </div>
                    </div>
                    <div className="avatar">
                      <div className="w-12">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                      </div>
                    </div>
                    <div className="avatar placeholder">
                      <div className="w-12 bg-neutral text-neutral-content">
                        <span>+99</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-2 rounded-xl">
                <div className="h-[250px] overflow-hidden">
                  <img
                    className="rounded-lg"
                    src="https://assets-global.website-files.com/6574af64ea53e785fd62b9b1/6574e07ad9bc3d86c047c111_651664fc7104e01bc4f51fad_Rectangle%20758-min-p-500.jpg"
                    alt=""
                  />
                </div>
                <div className="py-2 relative">
                  <h1 className="text-green-500 text-sm">THU 10:00 AM</h1>
                  <h1 className="font-sans font-semibold">
                    Planning Masterclass
                  </h1>
                  <p className="text-sm pb-2 text-gray-700">
                    Location - 24 Royal Ln. Mesa,New Jensey
                  </p>

                  <hr />

                  <span className=" absolute -top-5 font-sans  text-center bg-white shadow-md px-2 py-1 rounded-lg right-4">
                       <div>AUG</div>
                       <div className="text-xl font-extrabold ">12</div>
                  </span>

                  <div className="avatar-group -space-x-3 rtl:space-x-reverse w-4/12 pt-2">
                    <div className="avatar">
                      <div className="w-12">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                      </div>
                    </div>
                    <div className="avatar">
                      <div className="w-12">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                      </div>
                    </div>
                    <div className="avatar">
                      <div className="w-12">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                      </div>
                    </div>
                    <div className="avatar placeholder">
                      <div className="w-12 bg-neutral text-neutral-content">
                        <span>+99</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-2 rounded-xl">
                <div className="h-[250px] overflow-hidden">
                  <img
                    className="rounded-lg"
                    src="https://assets-global.website-files.com/6574af64ea53e785fd62b9b1/6574e070657b5f5e97621da1_6516658b797619e3db4b7ebe_Rectangle%20748-min.jpg"
                    alt=""
                  />
                </div>
                <div className="py-2 relative">
                  <h1 className="text-green-500 text-sm">THU 10:00 AM</h1>
                  <h1 className="font-sans font-semibold">
                    Planning Masterclass
                  </h1>
                  <p className="text-sm pb-2 text-gray-700">
                    Location - 24 Royal Ln. Mesa,New Jensey
                  </p>

                  <hr />

                  <span className=" absolute -top-5 font-sans  text-center bg-white shadow-md px-2 py-1 rounded-lg right-4">
                       <div>AUG</div>
                       <div className="text-xl font-extrabold ">12</div>
                  </span>

                  <div className="avatar-group -space-x-3 rtl:space-x-reverse w-4/12 pt-2">
                    <div className="avatar">
                      <div className="w-12">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                      </div>
                    </div>
                    <div className="avatar">
                      <div className="w-12">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                      </div>
                    </div>
                    <div className="avatar">
                      <div className="w-12">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                      </div>
                    </div>
                    <div className="avatar placeholder">
                      <div className="w-12 bg-neutral text-neutral-content">
                        <span>+99</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
            {/* Content for the right bar */}
            <RightSide />

        </main>
      </section>
      <MobileHeader />
    </>
  );
};

export default Events;
