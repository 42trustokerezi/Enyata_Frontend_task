import React, { useState, useEffect, useCallback } from "react";
import data from "../../utils/categoryList.json";
import Logo from "../../assets/image 1.png";
import Tiles from "../Tiles/Tiles";
import { NavLink, Link, useLocation } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = ({ active }) => {
  const location = useLocation();

  return (
    <div className={`bg-[#031434] col-span-1 px-10 text-white`}>
      <img src={Logo} alt="starwars" className="w-[80%] mx-auto my-10" />

      <NavLink to="/dashboard" className={({ isActive }) => (isActive ? "bg-[#0A74DC]" : "")}>
        <div
          className={`cursor-pointer mb-3 text-center py-3 bg-[#0A74DC]`}
        >
          <img src={""} alt="" />
          <p>Overview</p>
        </div>
      </NavLink>

      {data.map((cat, i) => (
        <NavLink
          key={i}
          to={cat.link}
          className={({ isActive }) => (isActive ? "bg-[#0A74DC]" : "")}
        >
          <div key={cat.id} className="py-3 px-3 my-3">
            <div className="flex w-full cursor-pointer">
              <Tiles tile={cat.tile} />
              <p className="ml-7 md:text-sm">{cat.category}</p>
            </div>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default Sidebar;
