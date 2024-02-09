import { FaArrowLeft } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { CiVideoOn } from "react-icons/ci";
import CreateMessage from "../components/CreateMessage";

const ChatRoom = () => {
  return (
    <>
      <section className="scroll">
        <div className="flex items-center scroll justify-between py-5 px-6 fixed w-full  top-0 z-[99999999] bg-white" >
          <Link to='/Messages' className="rounded-full  hover:text-blue-700">
            <FaArrowLeft className="text-2xl " />
          </Link>
          <span>
            <h1 className="text-xl font-semibold">Charlotte</h1>
          </span>
          <span className="flex items-center gap-2">
            <Link>
              <IoCallOutline className="text-2xl" />
            </Link>
            <Link>
              <CiVideoOn className="text-2xl" />
            </Link>
          </span>
        </div>
        <hr />
        <div className="pt-24 pb-24 px-2 w-full overflow-y-auto  scroll">
          <div className="text-center mx-auto mb-10 ">
            <p className="bg-gray-100 w-5/12 mx-auto py-0.5 rounded-lg">
              Today
            </p>
          </div>

          {
            [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map((item,index)=>(
                <div key={index}>
                                    <div className="chat chat-start" >
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS chat bubble component"
                      src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    />
                  </div>
                </div>
                <div className="chat-header">
                  Obi-Wan Kenobi
                  <time className="text-xs opacity-50">12:45</time>
                </div>
                <div className="chat-bubble bg-blue-600">You were the Chosen One!</div>
                <div className="chat-footer opacity-50">Delivered</div>
              </div>
              <div className="chat chat-end">
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS chat bubble component"
                      src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    />
                  </div>
                </div>
                <div className="chat-header">
                  Anakin
                  <time className="text-xs opacity-50">12:46</time>
                </div>
                <div className="chat-bubble">I hate you!</div>
                <div className="chat-footer opacity-50">Seen at 12:46</div>
              </div>
                </div>
            ))
          }
            
        </div>
      </section>
      <CreateMessage  />
    </>
  );
};

export default ChatRoom;
