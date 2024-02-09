const Feed = () => {
  const FeedData = [
    {
      id: 1,
      Name: 'Your Story',
      username: 'john_doe_123',
      img: 'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671116.jpg?size=626&ext=jpg&ga=GA1.2.1634089821.1701467307&semt=ais'
    },
    {
      id: 2,
      Name: 'Jane Smith',
      username: 'jane_smith_456',
      img: 'https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436200.jpg?size=626&ext=jpg&ga=GA1.2.1634089821.1701467307&semt=ais'
    },
    {
      id: 3,
      Name: 'Michael Johnson',
      username: 'michael_j_789',
      img: 'https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=626&ext=jpg&ga=GA1.2.1634089821.1701467307&semt=ais'
    },
    {
      id: 4,
      Name: 'Emily Davis',
      username: 'emily_davis_101',
      img: 'https://img.freepik.com/free-psd/3d-rendering-boy-avatar-emoji_23-2150603408.jpg?size=626&ext=jpg&ga=GA1.1.1634089821.1701467307&semt=ais'
    },
    {
      id: 5,
      Name: 'Daniel White',
      username: 'daniel_white_202',
      img: 'https://img.freepik.com/free-psd/3d-rendering-avatar_23-2150833584.jpg?size=626&ext=jpg&ga=GA1.1.1634089821.1701467307&semt=ais'
    },
    {
      id: 6,
      Name: 'Olivia Brown',
      username: 'olivia_b_303',
      img: 'https://img.freepik.com/free-psd/3d-rendering-avatar_23-2150833546.jpg?size=626&ext=jpg&ga=GA1.1.1634089821.1701467307&semt=ais'
    },
    {
      id: 7,
      Name: 'Matthew Taylor',
      username: 'matthew_t_404',
      img: 'https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611759.jpg?size=626&ext=jpg&ga=GA1.1.1634089821.1701467307&semt=ais'
    },
    {
      id: 8,
      Name: 'Sophia Clark',
      username: 'sophia_c_505',
      img: 'https://img.freepik.com/free-psd/3d-illustration-person-with-glasses_23-2149436185.jpg?size=626&ext=jpg&ga=GA1.1.1634089821.1701467307&semt=ais'
    },
    {
      id: 9,
      Name: 'William Turner',
      username: 'william_t_606',
      img: 'https://img.freepik.com/free-psd/3d-rendering-avatar_23-2150833554.jpg?size=626&ext=jpg&ga=GA1.1.1634089821.1701467307&semt=ais'
    },
    {
      id: 10,
      Name: 'Ava Anderson',
      username: 'ava_a_707',
      img: 'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671140.jpg?size=626&ext=jpg&ga=GA1.1.1634089821.1701467307&semt=ais'
    },
    {
      id: 11,
      Name: 'Ethan Miller',
      username: 'ethan_m_808',
      img: 'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671124.jpg?size=626&ext=jpg&ga=GA1.1.1634089821.1701467307&semt=ais'
    },
    {
      id: 12,
      Name: 'Isabella Martin',
      username: 'isabella_m_909',
      img: 'https://img.freepik.com/free-psd/3d-rendering-avatar_23-2150833548.jpg?size=626&ext=jpg&ga=GA1.1.1634089821.1701467307&semt=ais'
    }
  ];
  
  const truncateName = (name) => {
    if (name.length > 10) {
      return name.slice(0, 9) + '...';
    }
    return name;
  };


  return (
    <>
      <section className="  ">
        <main className="px-0.5 lg:px-5  ">
          {/* story */}
          <div className="py-2 lg:py-4 px-2 lg:px-6  bg-white rounded-lg flex shadow-md items-center  gap-4 overflow-x-auto scroll ">
            {
              FeedData.map((item,index)=>(
                <span key={index} className=" flex-row items-center justify-center  ">
                <div className="flex gap-2 mx-auto ">
                  <div className="avatar">
                    <div className=" w-14 lg:w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-1">
                      <img src={item.img} />
                    </div>
                  </div>
                </div>
                <h1 className="text-xs lg:text-xs mt-1 font-medium font-sans truncate text-center">
                  {truncateName(item.Name)}
                </h1>
              </span>
              ))
            }


 
          
          

          </div>
          {/* end story */}
        </main>
      </section>
    </>
  );
};

export default Feed;
