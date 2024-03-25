import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import CategoryCard from "../components/CategoryCard/CategoryCard";
import Header from "../components/Header/Header";

import { useGetSpeciesQuery } from "../api/apiSlice";
import SpeciesTable from "../components/Table/SpeciesTable";

const Species = () => {
 
  const { data } = useGetSpeciesQuery();


  return (
    <div className="grid grid-cols-5 h-[100%]">
      <Sidebar />

      <div className="col-span-4 ">
        {/* menu bar */}
        <Header />
        <div className="w-full px-10 mt-6">
          
          <div className="mt-20">
          <h2 className="mb-6 font-semibold">Species</h2>
                <SpeciesTable data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Species;
