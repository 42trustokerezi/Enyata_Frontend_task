import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
import shank from "../assets/banner3.png"

const Shank = () => {
  return (
    <div className="grid grid-cols-5 h-[100%]">
      <Sidebar />
      <div className="col-span-4">
        <Header />
        <div className="flex mt-6 ml-6">
            <div className="w-[40%] h-[70%]"><img src={shank} alt="shank" className="w-[90%]"/></div>
            <div className="mt-14">
                <h1 className="text-4xl font-bold">Shank Comics</h1>
                <p className="pt-3">Gender: Female</p>
                <p className="pt-3">Year of birth: January 24, 1922</p>
                <p className="pt-3">Skin Color: Brown</p>
                <p className="pt-3">Height: 150CM</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Shank;
