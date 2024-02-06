import { FcAddImage } from "react-icons/fc";

import { FaVideo } from "react-icons/fa6";
import { FaHashtag } from "react-icons/fa";
import { ImAttachment } from "react-icons/im";
import { GoMention } from "react-icons/go";

const CreatePost = () => {
  return (
    <>
      <section>
        <main className="bg-white mt-4 mx-5 px-5 py-5 rounded-lg"  onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }>
          <div className="flex items-center justify-between gap-3">
            <img
              src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671116.jpg?size=626&ext=jpg&ga=GA1.2.1634089821.1701467307&semt=ais"
              width={40}
              className="rounded-full "
              alt=""
            />
            <span className=" w-9/12 bg-gray-100 px-4 py-2 rounded-lg ">
              <input
                type="text"
                className="bg-gray-100 outline-none w-full"
                placeholder="What's on your mind? "
              />
            </span>
            <span className="w-2/12">
              <button
                className="px-10 py-2 rounded-lg bg-blue-700 text-white font-normal hover:bg-blue-800 shadow-none border-none  "
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
              >
                Create
              </button>

              <dialog id="my_modal_3" className="modal">
                <div className="modal-box max-w-5xl w-11/12">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                      ✕
                    </button>
                  </form>
                  <h3 className="font-bold text-lg">
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
                        <p className="text-xs font-sans font-normal">
                          <select className="outline-none border-none">
                            <option className="bg-white" value="">
                              Public
                            </option>
                            <option className="bg-white" value="">
                              Private
                            </option>
                          </select>
                        </p>
                      </span>
                    </div>
                  </h3>
                  <textarea
                    className="bg-gray-100 w-full p-2 outline-none rounded-lg"
                    id=""
                    rows="10"
                    placeholder="What's on your mind ?"
                  ></textarea>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-5 pb-2 text-sm py-3 px-2">
                      <h1>Add To Your Post :</h1>
                      <button className="flex items-center gap-1">
                        <FcAddImage /> <span>Image/video</span>
                      </button>
                      <button className="flex items-center gap-1">
                        <ImAttachment className="text-red-500" />
                        <span>Attachment</span>
                      </button>
                      <button className="flex items-center gap-1">
                        <FaVideo className="text-orange-600" />
                        <span>Live</span>
                      </button>
                      <button className="flex items-center gap-1">
                        <FaHashtag /> <span>Hashtag</span>
                      </button>
                      <button className="flex items-center gap-1">
                        <GoMention />
                        <span>Mention</span>
                      </button>
                    </div>
                  </div>
                  <div className="w-full pt-5">
                    <button className="mx-auto w-full py-2 rounded-lg bg-blue-700 text-white hover:bg-blue-600">Post</button>
                  </div>


                  <div className="modal-action"></div>
                </div>
              </dialog>
            </span>
          </div>
          <hr className="my-6" />
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-5 pb-2 text-sm">
              <button className="flex items-center gap-1">
                <FcAddImage /> <span>Image/video</span>
              </button>
              <button className="flex items-center gap-1">
                <ImAttachment className="text-red-500" />
                <span>Attachment</span>
              </button>
              <button className="flex items-center gap-1">
                <FaVideo className="text-orange-600" />
                <span>Live</span>
              </button>
              <button className="flex items-center gap-1">
                <FaHashtag /> <span>Hashtag</span>
              </button>
              <button className="flex items-center gap-1">
                <GoMention />
                <span>Mention</span>
              </button>
            </div>
            <div>
              <details className="dropdown font-sans">
                <summary className=" btn px-10 bg-white hover:bg-white shadow-none border-none ">
                  Public/Private
                </summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-[10]">
                  <li>
                    <a>Public</a>
                  </li>
                  <li>
                    <a>Private</a>
                  </li>
                </ul>
              </details>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default CreatePost;
