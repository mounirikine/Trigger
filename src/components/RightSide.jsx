import { CiSearch } from "react-icons/ci";
import { IoCreateOutline } from "react-icons/io5";
import { RiMenu5Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { CiMenuKebab } from "react-icons/ci";

import { CiCalendar } from "react-icons/ci";

const RightSide = () => {
  return (
    <>
      <main className="bg-white  px-4 py-4 rounded-lg">
        <div>
          <div className="flex items-center justify-between">
            <h1>Messages</h1>
            <IoCreateOutline className="text-2xl" />
          </div>
          <div className="py-2 bg-gray-100 rounded-lg flex items-center  mt-2">
            <span className="px-2 flex items-center justify-center text-xl font-bold">
              <CiSearch />
            </span>
            <span className="w-10/12">
              <input
                type="text"
                className="w-full bg-transparent outline-none"
                placeholder="Search "
              />
            </span>
            <span>
              <RiMenu5Fill />
            </span>
          </div>

          <div className="flex items-center justify-between pt-4 text-sm pb-1">
            <div className="flex items-center gap-4">
              <span>Primary</span>
              <span className="text-gray-400">General</span>
            </div>
            <div>
              <Link className="text-blue-700">Request(4)</Link>
            </div>
          </div>
          <hr className="mb-2" />

          <div>
            <span className="flex items-center gap-2 py-2">
              <div className="avatar online">
                <div className="w-10 rounded-full">
                  <img src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671122.jpg?size=626&ext=jpg&ga=GA1.2.1634089821.1701467307&semt=ais" />
                </div>
              </div>
              <h1>Roger Korsgaard</h1>
            </span>
            <span className="flex items-center gap-2 py-2">
              <div className="avatar online">
                <div className="w-10 rounded-full">
                  <img src="https://img.freepik.com/free-psd/3d-rendering-avatar_23-2150833554.jpg?size=626&ext=jpg&ga=GA1.2.1634089821.1701467307&semt=ais" />
                </div>
              </div>
              <h1>Roger Korsgaard</h1>
            </span>
            <span className="flex items-center gap-2 py-2">
              <div className="avatar online">
                <div className="w-10 rounded-full">
                  <img src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671140.jpg?size=626&ext=jpg&ga=GA1.2.1634089821.1701467307&semt=ais" />
                </div>
              </div>
              <h1>Roger Korsgaard</h1>
            </span>
            <span className="flex items-center gap-2 py-2">
              <div className="avatar online">
                <div className="w-10 rounded-full">
                  <img src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671122.jpg?size=626&ext=jpg&ga=GA1.2.1634089821.1701467307&semt=ais" />
                </div>
              </div>
              <h1>Roger Korsgaard</h1>
            </span>
            <span className="flex items-center gap-2 py-2">
              <div className="avatar online">
                <div className="w-10 rounded-full">
                  <img src="https://img.freepik.com/free-psd/3d-illustration-person-with-glasses_23-2149436185.jpg?size=626&ext=jpg&ga=GA1.1.1634089821.1701467307&semt=ais" />
                </div>
              </div>
              <h1>Roger Korsgaard</h1>
            </span>
            <span className="flex items-center gap-2 py-2">
              <div className="avatar online">
                <div className="w-10 rounded-full">
                  <img src="https://img.freepik.com/free-psd/3d-rendering-boy-avatar-emoji_23-2150603408.jpg?size=626&ext=jpg&ga=GA1.2.1634089821.1701467307&semt=ais" />
                </div>
              </div>
              <h1>Roger Korsgaard</h1>
            </span>

            <Link className="py-1 text-sm">View All</Link>
          </div>
        </div>
      </main>
      <main className="bg-white  px-4 py-4 rounded-lg mt-4">
        <div>
          <div className="flex items-center justify-between">
            <h1>Events</h1>
            <CiMenuKebab className="text-2xl" />
          </div>

          <hr className="my-2" />

          <span className="flex items-center gap-2 py-2">
            <CiCalendar /> 10 Events Invites
          </span>
          <span className="flex items-center gap-2 py-2">
            <CiCalendar /> 10 Events Invites
          </span>
          <span className="flex items-center gap-2 py-2">
            <CiCalendar /> 10 Events Invites
          </span>
          <span className="flex items-center gap-2 py-2">
            <CiCalendar /> 10 Events Invites
          </span>
          <span className="flex items-center gap-2 py-2">
            <CiCalendar /> 10 Events Invites
          </span>
        </div>
      </main>
    </>
  );
};

export default RightSide;
