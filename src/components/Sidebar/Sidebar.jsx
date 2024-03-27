import React, { useState, useEffect, useCallback } from "react";
import data from "../../utils/categoryList.json";
import Logo from "../../assets/image 1.png";
import Tiles from "../Tiles/Tiles";
import { NavLink, Link, useLocation } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = ({ active }) => {
  const { pathname } = useLocation();

  return (
    <div className={`bg-[#031434] col-span-1 px-10 text-white`}>
      <img src={Logo} alt="starwars" className="w-[80%] mx-auto my-10" />

      <Link
          to="/dashboard"
          className={pathname === "/dashboard" ? "active" : "" }
        >
      <div className="w-full text-center py-3 px-3 mb-14">
        
          Overview
      </div>
      </Link>

      {data.map((cat, i) => (
        <Link
          key={i}
          to={cat.link}
          className={pathname === `${cat.link}` ? "active" : "" }
        >
          <div key={cat.id} className="py-3 px-3 my-3">
            <div className="flex w-full cursor-pointer">
              <Tiles tile={cat.tile} />
              <p className="ml-7 md:text-sm">{cat.category}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
