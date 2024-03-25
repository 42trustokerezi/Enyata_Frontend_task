import React, { useState, useEffect } from "react";
import data from "../../utils/categoryList.json";
import Logo from "../../assets/image 1.png";
import Tiles from "../Tiles/Tiles";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-[#031434] col-span-1 px-10 text-white">
      <img src={Logo} alt="starwars" className="w-[80%] mx-auto my-10" />

      <div className="pointer mb-32 bg-slate-600 text-center py-3">
        <img src={""} alt="" />
        <p>Overview</p>
      </div>

      {data.map((cat) => (
        <div key={cat.id} className="py-3 px-3 my-3">
          <Link to={cat.link}>
            <div className="flex w-full cursor-pointer">
              <Tiles tile={cat.tile} />
              <p className="ml-7">{cat.category}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
