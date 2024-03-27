import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import CategoryCard from "../components/CategoryCard/CategoryCard";
import Header from "../components/Header/Header";

import { useGetStarshipsQuery } from "../api/apiSlice";
import Table from "../components/Table/FilmTable";
import StarshipsTable from "../components/Table/StarshipsTable";

const Starships = () => {
  const { data, isLoading } = useGetStarshipsQuery();

  return (
    <div className="grid grid-cols-5 h-[100%]">
      <Sidebar />

      <div className="col-span-4 ">
        {/* menu bar */}
        <Header />
        <div className="w-full px-10 mt-6">
          <div className="mt-20">
            <h2 className="mb-6 font-semibold">Starships</h2>
            {/* {data &&
              data.results.map((item) => (
                <div>{item.name}</div>
              ))} */}
            <StarshipsTable
              data={data}
              isLoading={isLoading}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Starships;
