import Header from "../components/Header";
import LeftSide from "../components/LeftSide";
import RightSide from "../components/RightSide";
import vid1 from "../assets/vd1.mp4";
import vid2 from "../assets/vd2.mp4";
import { CiHeart, CiMenuKebab } from "react-icons/ci";
import { BiBookmark } from "react-icons/bi";
import { FaRegComment, FaShare } from "react-icons/fa";
const Videos = () => {
  return (
    <>
      <Header />
      <section className="px-3  ">
        <main className="bg-gray-100 scroll  overflow-y-auto  h-screen p-4 rounded-lg  flex">
          <LeftSide />
          <div className="  w-7/12 overflow-y-auto scroll ">
            <div className="flex items-center justify-between px-5 py-3">
              <h1 className="text-lg font-semibold font-sans">
                Videos for You
              </h1>
              <h1 className="flex items-center gap-2 text-sm">
                {" "}
                Sort by:Most Resent{" "}
              </h1>
            </div>

            <div className="px-5 grid grid-cols-1">
              <div className="bg-white p-3  rounded-lg mb-3">
                <div className="flex items-center justify-between">
                  <span>
                    <div className="flex items-center gap-2 py-4">
                      <span>
                        <img
                          src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671116.jpg?size=626&ext=jpg&ga=GA1.2.1634089821.1701467307&semt=ais"
                          width={40}
                          className="rounded-full "
                        />
                      </span>
                      <span>
                        <h1 className="font-semibold font-sans">
                          Jakob Botosh
                        </h1>
                        <p className="text-xs font-sans font-semibold  text-gray-600">
                          10 min ago
                        </p>
                      </span>
                    </div>
                  </span>
                  <span className="pr-2 flex items-center gap-2">
                    <button className="text-blue-500 font-sans font-semibold">
                      + Follow
                    </button>
                    <button>
                      <CiMenuKebab className="text-lg font-bold" />
                    </button>
                  </span>
                </div>
                <div>
                  <video
                    src={vid1}
                    muted
                    controls
                    className="rounded-lg"
                  ></video>
                </div>
                <div className="relative pt-8">
                  <span className="absolute top-2 right-1 text-sm ">
                    12k Views
                  </span>
                  <p className="pr-7">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Ratione impedit obcaecati natus enim dolores itaque.
                    Laboriosam nihil a quisquam aliquam, sequi eum sint facere
                    eligendi at? Similique labore voluptatum harum?
                  </p>
                </div>
                <hr className="mt-2" />
                <div className="flex items-center py-2 justify-between">
                  <div className="flex text-sm items-center justify-between gap-6">
                    <span className=" cursor-pointer flex items-center gap-1">
                      <CiHeart className="text-2xl" /> 30 Like
                    </span>
                    <span className=" cursor-pointer flex items-center gap-1">
                      <FaRegComment className="text-lg" /> 12 Comment
                    </span>
                    <span className=" cursor-pointer flex items-center gap-1">
                      <FaShare className="text-lg" /> 30 Share
                    </span>
                  </div>
                  <div>
                    <span className=" cursor-pointer text-xl w-1.5/12 font-bold flex items-center justify-center relative bg-gray-100 px-2 py-2 rounded-lg">
                      <BiBookmark />{" "}
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-white p-3  rounded-lg mb-3">
                <div className="flex items-center justify-between">
                  <span>
                    <div className="flex items-center gap-2 py-4">
                      <span>
                        <img
                          src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671116.jpg?size=626&ext=jpg&ga=GA1.2.1634089821.1701467307&semt=ais"
                          width={40}
                          className="rounded-full "
                        />
                      </span>
                      <span>
                        <h1 className="font-semibold font-sans">
                          Jakob Botosh
                        </h1>
                        <p className="text-xs font-sans font-semibold  text-gray-600">
                          10 min ago
                        </p>
                      </span>
                    </div>
                  </span>
                  <span className="pr-2 flex items-center gap-2">
                    <button className="text-blue-500 font-sans font-semibold">
                      + Follow
                    </button>
                    <button>
                      <CiMenuKebab className="text-lg font-bold" />
                    </button>
                  </span>
                </div>
                <div>
                  <video
                    src={vid2}
                    muted
                    controls
                    className="rounded-lg"
                  ></video>
                </div>
                <div className="relative pt-8">
                  <span className="absolute top-2 right-1 text-sm ">
                    12k Views
                  </span>
                  <p className="pr-7">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Ratione impedit obcaecati natus enim dolores itaque.
                    Laboriosam nihil a quisquam aliquam, sequi eum sint facere
                    eligendi at? Similique labore voluptatum harum?
                  </p>
                </div>
                <hr className="mt-2" />
                <div className="flex items-center py-2 justify-between">
                  <div className="flex text-sm items-center justify-between gap-6">
                    <span className=" cursor-pointer flex items-center gap-1">
                      <CiHeart className="text-2xl" /> 30 Like
                    </span>
                    <span className=" cursor-pointer flex items-center gap-1">
                      <FaRegComment className="text-lg" /> 12 Comment
                    </span>
                    <span className=" cursor-pointer flex items-center gap-1">
                      <FaShare className="text-lg" /> 30 Share
                    </span>
                  </div>
                  <div>
                    <span className=" cursor-pointer text-xl w-1.5/12 font-bold flex items-center justify-center relative bg-gray-100 px-2 py-2 rounded-lg">
                      <BiBookmark />{" "}
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-white p-3  rounded-lg mb-3">
                <div className="flex items-center justify-between">
                  <span>
                    <div className="flex items-center gap-2 py-4">
                      <span>
                        <img
                          src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671116.jpg?size=626&ext=jpg&ga=GA1.2.1634089821.1701467307&semt=ais"
                          width={40}
                          className="rounded-full "
                        />
                      </span>
                      <span>
                        <h1 className="font-semibold font-sans">
                          Jakob Botosh
                        </h1>
                        <p className="text-xs font-sans font-semibold  text-gray-600">
                          10 min ago
                        </p>
                      </span>
                    </div>
                  </span>
                  <span className="pr-2 flex items-center gap-2">
                    <button className="text-blue-500 font-sans font-semibold">
                      + Follow
                    </button>
                    <button>
                      <CiMenuKebab className="text-lg font-bold" />
                    </button>
                  </span>
                </div>
                <div>
                  <video
                    src={vid1}
                    muted
                    controls
                    className="rounded-lg"
                  ></video>
                </div>
                <div className="relative pt-8">
                  <span className="absolute top-2 right-1 text-sm ">
                    12k Views
                  </span>
                  <p className="pr-7">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Ratione impedit obcaecati natus enim dolores itaque.
                    Laboriosam nihil a quisquam aliquam, sequi eum sint facere
                    eligendi at? Similique labore voluptatum harum?
                  </p>
                </div>
                <hr className="mt-2" />
                <div className="flex items-center py-2 justify-between">
                  <div className="flex text-sm items-center justify-between gap-6">
                    <span className=" cursor-pointer flex items-center gap-1">
                      <CiHeart className="text-2xl" /> 30 Like
                    </span>
                    <span className=" cursor-pointer flex items-center gap-1">
                      <FaRegComment className="text-lg" /> 12 Comment
                    </span>
                    <span className=" cursor-pointer flex items-center gap-1">
                      <FaShare className="text-lg" /> 30 Share
                    </span>
                  </div>
                  <div>
                    <span className=" cursor-pointer text-xl w-1.5/12 font-bold flex items-center justify-center relative bg-gray-100 px-2 py-2 rounded-lg">
                      <BiBookmark />{" "}
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-white p-3  rounded-lg mb-3">
                <div className="flex items-center justify-between">
                  <span>
                    <div className="flex items-center gap-2 py-4">
                      <span>
                        <img
                          src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671116.jpg?size=626&ext=jpg&ga=GA1.2.1634089821.1701467307&semt=ais"
                          width={40}
                          className="rounded-full "
                        />
                      </span>
                      <span>
                        <h1 className="font-semibold font-sans">
                          Jakob Botosh
                        </h1>
                        <p className="text-xs font-sans font-semibold  text-gray-600">
                          10 min ago
                        </p>
                      </span>
                    </div>
                  </span>
                  <span className="pr-2 flex items-center gap-2">
                    <button className="text-blue-500 font-sans font-semibold">
                      + Follow
                    </button>
                    <button>
                      <CiMenuKebab className="text-lg font-bold" />
                    </button>
                  </span>
                </div>
                <div>
                  <video
                    src={vid2}
                    muted
                    controls
                    className="rounded-lg"
                  ></video>
                </div>
                <div className="relative pt-8">
                  <span className="absolute top-2 right-1 text-sm ">
                    12k Views
                  </span>
                  <p className="pr-7">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Ratione impedit obcaecati natus enim dolores itaque.
                    Laboriosam nihil a quisquam aliquam, sequi eum sint facere
                    eligendi at? Similique labore voluptatum harum?
                  </p>
                </div>
                <hr className="mt-2" />
                <div className="flex items-center py-2 justify-between">
                  <div className="flex text-sm items-center justify-between gap-6">
                    <span className=" cursor-pointer flex items-center gap-1">
                      <CiHeart className="text-2xl" /> 30 Like
                    </span>
                    <span className=" cursor-pointer flex items-center gap-1">
                      <FaRegComment className="text-lg" /> 12 Comment
                    </span>
                    <span className=" cursor-pointer flex items-center gap-1">
                      <FaShare className="text-lg" /> 30 Share
                    </span>
                  </div>
                  <div>
                    <span className=" cursor-pointer text-xl w-1.5/12 font-bold flex items-center justify-center relative bg-gray-100 px-2 py-2 rounded-lg">
                      <BiBookmark />{" "}
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-white p-3  rounded-lg mb-3">
                <div className="flex items-center justify-between">
                  <span>
                    <div className="flex items-center gap-2 py-4">
                      <span>
                        <img
                          src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671116.jpg?size=626&ext=jpg&ga=GA1.2.1634089821.1701467307&semt=ais"
                          width={40}
                          className="rounded-full "
                        />
                      </span>
                      <span>
                        <h1 className="font-semibold font-sans">
                          Jakob Botosh
                        </h1>
                        <p className="text-xs font-sans font-semibold  text-gray-600">
                          10 min ago
                        </p>
                      </span>
                    </div>
                  </span>
                  <span className="pr-2 flex items-center gap-2">
                    <button className="text-blue-500 font-sans font-semibold">
                      + Follow
                    </button>
                    <button>
                      <CiMenuKebab className="text-lg font-bold" />
                    </button>
                  </span>
                </div>
                <div>
                  <video
                    src={vid1}
                    muted
                    controls
                    className="rounded-lg"
                  ></video>
                </div>
                <div className="relative pt-8">
                  <span className="absolute top-2 right-1 text-sm ">
                    12k Views
                  </span>
                  <p className="pr-7">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Ratione impedit obcaecati natus enim dolores itaque.
                    Laboriosam nihil a quisquam aliquam, sequi eum sint facere
                    eligendi at? Similique labore voluptatum harum?
                  </p>
                </div>
                <hr className="mt-2" />
                <div className="flex items-center py-2 justify-between">
                  <div className="flex text-sm items-center justify-between gap-6">
                    <span className=" cursor-pointer flex items-center gap-1">
                      <CiHeart className="text-2xl" /> 30 Like
                    </span>
                    <span className=" cursor-pointer flex items-center gap-1">
                      <FaRegComment className="text-lg" /> 12 Comment
                    </span>
                    <span className=" cursor-pointer flex items-center gap-1">
                      <FaShare className="text-lg" /> 30 Share
                    </span>
                  </div>
                  <div>
                    <span className=" cursor-pointer text-xl w-1.5/12 font-bold flex items-center justify-center relative bg-gray-100 px-2 py-2 rounded-lg">
                      <BiBookmark />{" "}
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-white p-3  rounded-lg mb-3">
                <div className="flex items-center justify-between">
                  <span>
                    <div className="flex items-center gap-2 py-4">
                      <span>
                        <img
                          src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671116.jpg?size=626&ext=jpg&ga=GA1.2.1634089821.1701467307&semt=ais"
                          width={40}
                          className="rounded-full "
                        />
                      </span>
                      <span>
                        <h1 className="font-semibold font-sans">
                          Jakob Botosh
                        </h1>
                        <p className="text-xs font-sans font-semibold  text-gray-600">
                          10 min ago
                        </p>
                      </span>
                    </div>
                  </span>
                  <span className="pr-2 flex items-center gap-2">
                    <button className="text-blue-500 font-sans font-semibold">
                      + Follow
                    </button>
                    <button>
                      <CiMenuKebab className="text-lg font-bold" />
                    </button>
                  </span>
                </div>
                <div>
                  <video
                    src={vid2}
                    muted
                    controls
                    className="rounded-lg"
                  ></video>
                </div>
                <div className="relative pt-8">
                  <span className="absolute top-2 right-1 text-sm ">
                    12k Views
                  </span>
                  <p className="pr-7">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Ratione impedit obcaecati natus enim dolores itaque.
                    Laboriosam nihil a quisquam aliquam, sequi eum sint facere
                    eligendi at? Similique labore voluptatum harum?
                  </p>
                </div>
                <hr className="mt-2" />
                <div className="flex items-center py-2 justify-between">
                  <div className="flex text-sm items-center justify-between gap-6">
                    <span className=" cursor-pointer flex items-center gap-1">
                      <CiHeart className="text-2xl" /> 30 Like
                    </span>
                    <span className=" cursor-pointer flex items-center gap-1">
                      <FaRegComment className="text-lg" /> 12 Comment
                    </span>
                    <span className=" cursor-pointer flex items-center gap-1">
                      <FaShare className="text-lg" /> 30 Share
                    </span>
                  </div>
                  <div>
                    <span className=" cursor-pointer text-xl w-1.5/12 font-bold flex items-center justify-center relative bg-gray-100 px-2 py-2 rounded-lg">
                      <BiBookmark />{" "}
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div className=" h-screen w-3/12 sticky top-0 overflow-y-auto scroll">
            {/* Content for the right bar */}
            <RightSide />
          </div>
        </main>
      </section>
    </>
  );
};

export default Videos;
