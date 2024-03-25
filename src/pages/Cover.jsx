import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
import cover from "../assets/banner1.png"

const Cover = () => {
  return (
    <div className="grid grid-cols-5 h-[100%]">
      <Sidebar />
      <div className="col-span-4">
        <Header />
        <div className="flex mt-6">
            <div className="w-[40%] h-[70%]"><img src={cover} alt="cover" className="w-[90%]"/></div>
            <div className="mt-14">
                <h1 className="text-4xl font-bold">COVER</h1>
                <p className="pt-3">Director: Kingsley Omin</p>
                <p className="pt-3">Producer: Kingsley Omin</p>
                <p className="pt-3">Release Date: January 24, 2022.</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
