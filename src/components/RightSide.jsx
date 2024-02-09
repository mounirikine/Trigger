import { CiSearch } from "react-icons/ci";
import { IoCreateOutline } from "react-icons/io5";
import { RiMenu5Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { CiMenuKebab } from "react-icons/ci";

import { CiCalendar } from "react-icons/ci";

const RightSide = () => {
  const MessageData = [
    

    {
      id: 1,
      Name: 'Jane Smith',
      username: 'jane_smith_456',
      img: 'https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436200.jpg?size=626&ext=jpg&ga=GA1.2.1634089821.1701467307&semt=ais'
    },
    {
      id: 2,
      Name: 'Michael Johnson',
      username: 'michael_j_789',
      img: 'https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=626&ext=jpg&ga=GA1.2.1634089821.1701467307&semt=ais'
    },
    {
      id: 3,
      Name: 'Emily Davis',
      username: 'emily_davis_101',
      img: 'https://img.freepik.com/free-psd/3d-rendering-boy-avatar-emoji_23-2150603408.jpg?size=626&ext=jpg&ga=GA1.1.1634089821.1701467307&semt=ais'
    },
    {
      id: 4,
      Name: 'Daniel White',
      username: 'daniel_white_202',
      img: 'https://img.freepik.com/free-psd/3d-rendering-avatar_23-2150833584.jpg?size=626&ext=jpg&ga=GA1.1.1634089821.1701467307&semt=ais'
    },
    {
      id: 5,
      Name: 'Olivia Brown',
      username: 'olivia_b_303',
      img: 'https://img.freepik.com/free-psd/3d-rendering-avatar_23-2150833546.jpg?size=626&ext=jpg&ga=GA1.1.1634089821.1701467307&semt=ais'
    },
    {
      id: 6,
      Name: 'Matthew Taylor',
      username: 'matthew_t_404',
      img: 'https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611759.jpg?size=626&ext=jpg&ga=GA1.1.1634089821.1701467307&semt=ais'
    },
    {
      id: 7,
      Name: 'Sophia Clark',
      username: 'sophia_c_505',
      img: 'https://img.freepik.com/free-psd/3d-illustration-person-with-glasses_23-2149436185.jpg?size=626&ext=jpg&ga=GA1.1.1634089821.1701467307&semt=ais'
    },
    {
      id: 8,
      Name: 'William Turner',
      username: 'william_t_606',
      img: 'https://img.freepik.com/free-psd/3d-rendering-avatar_23-2150833554.jpg?size=626&ext=jpg&ga=GA1.1.1634089821.1701467307&semt=ais'
    },
    {
      id: 0,
      Name: 'Ava Anderson',
      username: 'ava_a_707',
      img: 'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671140.jpg?size=626&ext=jpg&ga=GA1.1.1634089821.1701467307&semt=ais'
    },
    {
      id: 10,
      Name: 'Ethan Miller',
      username: 'ethan_m_808',
      img: 'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671124.jpg?size=626&ext=jpg&ga=GA1.1.1634089821.1701467307&semt=ais'
    },
    {
      id: 11,
      Name: 'Isabella Martin',
      username: 'isabella_m_909',
      img: 'https://img.freepik.com/free-psd/3d-rendering-avatar_23-2150833548.jpg?size=626&ext=jpg&ga=GA1.1.1634089821.1701467307&semt=ais'
    }
  ];
  return (
    <>
              <div className=" h-screen w-3/12 sticky top-0 overflow-y-auto scroll hidden xl:block  ">

      <main className="bg-white shadow-md hidden lg:block px-4 py-4 rounded-lg">
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

          <div className=" overflow-y-auto h-96 scroll">
            {
                MessageData.map((item,index)=>(
                  <span key={index} className="flex items-center gap-2 py-2">
              <div className="avatar online">
                <div className="w-10 rounded-full">
                  <img src={item.img} />
                </div>
              </div>
              <h1>{item.Name}</h1>
            </span>
                ))
            }
            
      

            <Link to='/Messages' className="py-1 text-sm">View All</Link>
          </div>
        </div>
      </main>
      <main className="bg-white shadow-md hidden lg:block   px-4 py-4 rounded-lg mt-4">
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
      </div>
    </>
  );
};

export default RightSide;
