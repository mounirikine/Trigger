
import { FaHeart } from "react-icons/fa";
import pick from '../assets/pick.mp3'

import { FaRegComment } from "react-icons/fa6";
import { FaShare } from "react-icons/fa";
import { BiBookmark } from "react-icons/bi";
import { useState } from "react";


const Post = () => {
  const [like,setLike] = useState(false)
  const handleLike =()=>{
    setLike(!like)
    new Audio(pick).play(1000)
  }
  const Posts = [
    {
      id: 1,
      Name: 'Jakob Botosh',
      username: 'john_doe_123',
      img: 'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671116.jpg?size=626&ext=jpg&ga=GA1.2.1634089821.1701467307&semt=ais',
      post:'https://images.pexels.com/photos/14538648/pexels-photo-14538648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 2,
      Name: 'Jane Smith',
      username: 'jane_smith_456',
      img: 'https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436200.jpg?size=626&ext=jpg&ga=GA1.2.1634089821.1701467307&semt=ais',
      post:'https://images.pexels.com/photos/11846497/pexels-photo-11846497.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
    },
    {
      id: 3,
      Name: 'Michael Johnson',
      username: 'michael_j_789',
      img: 'https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=626&ext=jpg&ga=GA1.2.1634089821.1701467307&semt=ais',
      post:'https://images.pexels.com/photos/1429567/pexels-photo-1429567.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 4,
      Name: 'Emily Davis',
      username: 'emily_davis_101',
      img: 'https://img.freepik.com/free-psd/3d-rendering-boy-avatar-emoji_23-2150603408.jpg?size=626&ext=jpg&ga=GA1.1.1634089821.1701467307&semt=ais',
      post:'https://images.pexels.com/photos/35857/amazing-beautiful-breathtaking-clouds.jpg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 5,
      Name: 'Daniel White',
      username: 'daniel_white_202',
      img: 'https://img.freepik.com/free-psd/3d-rendering-avatar_23-2150833584.jpg?size=626&ext=jpg&ga=GA1.1.1634089821.1701467307&semt=ais',
      post:'https://images.pexels.com/photos/1416367/pexels-photo-1416367.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 6,
      Name: 'Olivia Brown',
      username: 'olivia_b_303',
      img: 'https://img.freepik.com/free-psd/3d-rendering-avatar_23-2150833546.jpg?size=626&ext=jpg&ga=GA1.1.1634089821.1701467307&semt=ais',
      post:'https://images.pexels.com/photos/2002719/pexels-photo-2002719.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 7,
      Name: 'Matthew Taylor',
      username: 'matthew_t_404',
      img: 'https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611759.jpg?size=626&ext=jpg&ga=GA1.1.1634089821.1701467307&semt=ais',
      post:'https://images.pexels.com/photos/194096/pexels-photo-194096.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 8,
      Name: 'Sophia Clark',
      username: 'sophia_c_505',
      img: 'https://img.freepik.com/free-psd/3d-illustration-person-with-glasses_23-2149436185.jpg?size=626&ext=jpg&ga=GA1.1.1634089821.1701467307&semt=ais',
      post:'https://images.pexels.com/photos/1279813/pexels-photo-1279813.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 9,
      Name: 'William Turner',
      username: 'william_t_606',
      img: 'https://img.freepik.com/free-psd/3d-rendering-avatar_23-2150833554.jpg?size=626&ext=jpg&ga=GA1.1.1634089821.1701467307&semt=ais',
      post:'https://images.pexels.com/photos/516541/pexels-photo-516541.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 10,
      Name: 'Ava Anderson',
      username: 'ava_a_707',
      img: 'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671140.jpg?size=626&ext=jpg&ga=GA1.1.1634089821.1701467307&semt=ais',
      post:'https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 11,
      Name: 'Ethan Miller',
      username: 'ethan_m_808',
      img: 'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671124.jpg?size=626&ext=jpg&ga=GA1.1.1634089821.1701467307&semt=ais',
      post:'https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 12,
      Name: 'Isabella Martin',
      username: 'isabella_m_909',
      img: 'https://img.freepik.com/free-psd/3d-rendering-avatar_23-2150833548.jpg?size=626&ext=jpg&ga=GA1.1.1634089821.1701467307&semt=ais',
      post:'https://images.pexels.com/photos/1509534/pexels-photo-1509534.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];
  return (
    <>
   <section className=" ">
    {
      Posts.map((item,index)=>(
        <main key={index} className="mx-1 lg:mx-3  bg-white mt-3 rounded-lg px-2 lg:px-5 ">
    <div className="flex items-center gap-2 py-4">
                        <span>
                        <img src={item.img} width={40} className="rounded-full " />
                        </span>
                        <span>
                            <h1 className="font-semibold font-sans">{item.Name}</h1>
                            <p className="text-xs font-sans font-normal">10 Aug at 12:11 PM</p>

                        </span>
    </div>


    <div>
    <div className="flex flex-wrap overflow-x-hidden  rounded-lg relative items-center justify-center gap-3">
        <div className="carousel w-full ">
          <div id="item1" className="carousel-item w-full">
            <img src={item.post} className="w-full" />
          </div> 
         
          
        </div> 
        {/* <span className=" absolute top-2 left-1 bg-gray-200 opacity-7  px-1 rounded-full ">1/5</span> */}
    </div>
    </div>
    <hr className="mt-2" />
    <div className="flex items-center py-2 justify-between">
        <div className="flex text-xs  lg:text-sm items-center justify-between gap-6">
        <span className=" cursor-pointer flex items-center gap-1">< FaHeart onClick={handleLike}      className={`text-2xl ${like? 'text-red-500' :''}`} /> 30 Like</span>
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
      ))
    }
   

  
   </section>
    </>
  )
}

export default Post