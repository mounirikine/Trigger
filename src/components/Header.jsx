import { CiSearch } from "react-icons/ci";
import { IoNotificationsOutline } from "react-icons/io5";
import { BiBookmark } from "react-icons/bi";
import { FaChevronDown } from "react-icons/fa";

import logo from '../assets/logo2.png'

const Header = () => {
  return (
    <>
      <header className="sticky  w-full top-0 z-[99999999]  bg-white">
        <div className="flex items-center justify-between px-10 py-3">
          <div className="w-2/12 text-xl flex items-center justify-center">
            <img src={logo} alt="" width={180} />
          </div>
          <div className="py-2 bg-gray-100 rounded-lg flex items-center  w-5/12">
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
          <div className="w-3/12 flex items-center gap-3">
            <span className="text-xl w-1.5/12 font-bold flex items-center justify-center relative bg-gray-100 px-2 py-2 rounded-lg">
              <IoNotificationsOutline />{" "}
              <span className=" font-bold rounded-full top-2 right-2 absolute  notification "></span>{" "}
            </span>
            <span className="text-xl w-1.5/12 font-bold flex items-center justify-center relative bg-gray-100 px-2 py-2 rounded-lg">
              <BiBookmark />{" "}
            </span>

            <span>
              <details className="dropdown font-sans">
                <summary className="m-1 btn px-10 shadow-none bg-transparent fle items-center text-black hover:bg-transparent border-none">
                  <div className="flex flex-wrap overflow-x-hidden items-center justify-center gap-3">
                    <div className="avatar online">
                      <div className="w-9 rounded-full">
                        <img src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671116.jpg?size=626&ext=jpg&ga=GA1.2.1634089821.1701467307&semt=ais" />
                      </div>
                    </div>
                  </div>
                  <span className="flex items-center gap-2">
                    <span>Jakob Botosh </span>
                    <span>
                      <FaChevronDown />
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
