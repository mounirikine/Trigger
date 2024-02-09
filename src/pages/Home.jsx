import Header from "../components/Header";

import Feed from "../components/Feed";
import CreatePost from "../components/CreatePost";
import Post from "../components/Post";
import RightSide from "../components/RightSide";
import LeftSide from "../components/LeftSide";
import MobileHeader from "../components/MobileHeader";


const Home = () => {
  return (
    <>
      <Header />
      <section className="px-1 lg:px-3  ">
        <main className="bg-gray-100 scroll   overflow-y-auto  h-screen pt-2 lg:p-1 rounded-lg flex ">
         <LeftSide />
          <div className=" w-full  xl:w-7/12 overflow-y-auto scroll ">
           <Feed />
            <CreatePost />
            <Post />
           
          </div>
            {/* Content for the right bar */}
            <RightSide />
        </main>
      </section>
      <MobileHeader />
    </>
  );
};

export default Home;




