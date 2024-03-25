import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
import wookie from "../assets/banner4.png"

const Wookie = () => {
  return (
    <div className="grid grid-cols-5 h-[100%]">
      <Sidebar />
      <div className="col-span-4">
        <Header />
        <div className="flex mt-6 ml-6">
            <div className="w-[40%] h-[70%]"><img src={wookie} alt="wookie" className="w-[90%]"/></div>
            <div className="mt-14">
                <h1 className="text-4xl font-bold">Wookie</h1>
                <p className="pt-3">Designation: Sentient</p>
                <p className="pt-3">Language: Shyriiwook</p>
                <p className="pt-3">Eye Colors: Blue, Green, Yellow</p>
                <p className="pt-3">Average Lifespan: 400</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Wookie;
