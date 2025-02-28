import React from "react";


const CongratulationsCard: React.FC = () => {
  return (
    <div className="w-[90%] sm:w-[80%] max-w-[500px] bg-white p-8 rounded-lg shadow-md text-center flex flex-col gap-6">
      <img
        src="/assets/wow.png"
        alt="Wow"
        className="mx-auto w-20 h-20"
      />
      <div>
        <h2 className="text-2xl font-semibold text-[#5EC26A]">Congratulations</h2>
        <p className="text-[#666666] mt-2">
          You've earned 1000 WESPoints
        </p>
      </div>

      <div className=" flex flex-col gap-6 bg-[#E6EEF7] rounded-xl border-1 p-6 border-white text-sm">
        <div className="font-semibold text-[#0256B2] text-lg flex gap-1 items-center justify-center">
          <img  className="w-4 h-4" src="/assets/gift.png" alt="Gift" />
          <p> Your Rewards</p>
        </div>
        <p className="font-medium text-[#0256B2] text-lg">2000 WESPoint Unlocked</p>
        <p className="text-md text-[#0256B2]">
          Want to know your employability status? Take the ESA with your 2000
          WESPoints to get started!
        </p>
        <button className="bg-[#0256B2] w-full text-white px-4 py-2 font-semibold rounded-md">
          Take ESA
        </button>
      </div>


    </div>
  );
};

export default CongratulationsCard;
