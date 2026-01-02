import React from "react";

const HomePageContactUsSection = () => {
  return (
    <div className="bg-black py-15 ">
      <div className="container mx-auto flex gap-5 items-center justify-center  border h-[60vh] border-[#3d4c56] rounded-md shadow-[inset_0_1px_40px_#ffffff1A]">
        {/* <h1 className="text-white">contact us</h1> */}
        <div>
          <div>
            <h1 className="text-4xl font-semibold font-inter-tight text-center tracking-wider">
              Join The <br />
              <span className="text-6xl font-bold ">Community</span>
            </h1>
          </div>
          <div>
            <p className="w-[500px] mt-6 text-center">
              Stay connected with ideas and insights shaping the future of
              digital design. Subscribe to get exclusive updates and practical
              tips.
            </p>
          </div>
          <div className="flex justify-center mt-6 gap-8">
            <input
              className="border px-10 py-6 rounded-full text-white shadow-[inset_0_1px_30px_#ffffff1A]"
              placeholder="Email"
              type="text"
            />
            <button className="border px-8 py-6 rounded-full shadow-[inset_0_1px_30px_#ffffff1A]">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageContactUsSection;
