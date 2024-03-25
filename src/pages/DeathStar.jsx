import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
import deathstar from "../assets/banner2.png"

const DeathStar = () => {
  return (
    <div className="grid grid-cols-5 h-[100%]">
      <Sidebar />
      <div className="col-span-4">
        <Header />
        <div className="flex mt-6 ml-6">
            <div className="w-[40%] h-[70%]"><img src={deathstar} alt="deathstar" className="w-[90%]"/></div>
            <div className="mt-14">
                <h1 className="text-4xl font-bold">DeathStar</h1>
                <p className="pt-3">Model: DS-1 Orbital Battle Station</p>
                <p className="pt-3">Passengers: 22</p>
                <p className="pt-3">Pilots: Dior, Kingsley, Jamal</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default DeathStar;
