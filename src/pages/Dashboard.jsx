import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import CategoryCard from "../components/CategoryCard/CategoryCard";
import Header from "../components/Header/Header";

import { useGetFilmsQuery } from "../api/apiSlice";
import FilmTable from "../components/Table/FilmTable";

const Dashboard = () => {
  const { data } = useGetFilmsQuery();

  return (
    <div className="grid grid-cols-5 h-[100%]">
      <Sidebar />

      <div className="col-span-4 ">
        {/* menu bar */}
        <Header />
        <div className="w-full px-10 mt-6">
          <CategoryCard />
          <div className="mt-36">
            <h2 className="mb-6 font-semibold">Films</h2>
            <FilmTable
              title="Film Title"
              date="Release Date"
              director="Director"
              producer="Producer"
              id="Episode ID"
              character="Character"
              data={data}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
