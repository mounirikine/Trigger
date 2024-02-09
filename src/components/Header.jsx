import { CiSearch } from "react-icons/ci";
import { IoNotificationsOutline } from "react-icons/io5";
import { BiBookmark } from "react-icons/bi";
import { FaChevronDown } from "react-icons/fa";
import { LuMessageCircle } from "react-icons/lu";

import logo from "../assets/logo2.png";
import { Link } from "react-router-dom";

const Header = () => {
  const notificationData = [
    'New message from John Doe',
    'You have a friend request from Jane Smith',
    'Michael Johnson liked your post',
    'Emily Davis mentioned you in a comment',
    'Daniel White shared a post with you',
    'Olivia Brown started following you',
    'Matthew Taylor sent you a photo',
    'Sophia Clark commented on your photo',
    'William Turner tagged you in a post',
    'Ava Anderson mentioned you in a story'
  ];
  return (
    <>
      <header className="sticky shadow-md w-full top-0 z-[99999999] rounded-xl  bg-white">
        <div className="flex items-center justify-between px-5 lg:px-10 py-1 lg:py-3">
          <div className="w-full lg:w-2/12 text-xl flex items-center justify-left mb-2 lg:mb-0">
            <img src={logo} className="mt-2 w-28 md:w-40" alt="" />
          </div>
          <div className="w-full lg:w-5/12 py-2 bg-gray-100 rounded-lg hidden lg:flex items-center">
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
          </div>
          <div className="w-full lg:w-3/12 flex items-center justify-end gap-3 mt-2 lg:mt-0">
            <span className="text-xl w-1/5 font-bold flex items-center justify-center relative   rounded-lg">
              <details className="dropdown bg-white t">
                <summary className=" btn text-lg" >
                  <IoNotificationsOutline />
                  <span className=" font-bold rounded-full top-2 right-2 absolute notification"></span>
                </summary>
                <ul className="p-2 shadow  menu dropdown-content z-[1] max-h-[70vh] overflow-y-scroll scroll grid  bg-gray-100 rounded-box w-64">
      {notificationData.map((notification, index) => (
        <li key={index}>
          <a className="text-sm">{notification}</a>
        </li>
      ))}
    </ul>
              </details>
            </span>
            <span className="text-xl w-1/5 font-bold flex  items-center justify-center relative bg-gray-100  py-3 rounded-lg">
              <Link to="/Messages" className="flex xl:hidden">
                <LuMessageCircle />
              </Link>
              <Link to="/Messages" className="hidden xl:flex">
                <BiBookmark />
              </Link>
              <span className=" font-bold rounded-full top-2 right-2 absolute notification"></span>
            </span>
            <span>
              <details className="dropdown font-sans hidden bg-slate-50 rounded-md lg:flex ">
                <summary className="m-1 btn px-5 lg:px-10 shadow-none bg-transparent flex items-center text-black hover:bg-transparent border-none">
                  <span className="flex items-center gap-2 ">
                    <span className="w-12/12  truncate">Jakob Botosh</span>
                    <span>
                      <FaChevronDown className="text-sm" />
                    </span>
                  </span>
                </summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-gray-100 rounded-box w-52">
                  <li>
                    <a>Item 1</a>
                  </li>
                  <li>
                    <a>Item 2</a>
                  </li>
                </ul>
              </details>
            </span>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
