import { FaPlus } from "react-icons/fa"
import { BsSendFill } from "react-icons/bs";

const CreateMessage = () => {
  return (
    <>
    <div className="flex items-center justify-between border-t-2 fixed bottom-0 bg-white w-full py-2 px-3">
        <span className="flex w-10/12 items-center gap-2 bg-gray-100 py-1 rounded-lg px-3">
            <FaPlus />
            <input type="text" className="py-1.5 px-2 outline-none border-none bg-transparent" placeholder="Send message..." />
        </span>
        <span className="flex items-center justify-center  w-2/12 px-2">
                <button className="bg-blue-700 px-3 text-white py-3 rounded-full">
                < BsSendFill />
                </button>
        </span>
    </div>
    </>
  )
}

export default CreateMessage