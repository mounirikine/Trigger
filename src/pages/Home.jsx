import Header from "../components/Header";

import Feed from "../components/Feed";
import CreatePost from "../components/CreatePost";
import Post from "../components/Post";
import RightSide from "../components/RightSide";
import LeftSide from "../components/LeftSide";


const Home = () => {
  return (
    <>
      <Header />
      <section className="px-3  ">
        <main className="bg-gray-100 scroll  overflow-y-auto  h-screen p-4 rounded-lg  flex">
         <LeftSide />
          <div className="  w-7/12 overflow-y-auto scroll ">
           <Feed />
            <CreatePost />
            <Post />
           
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

export default Home;




