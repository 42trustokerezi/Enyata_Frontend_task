import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import CategoryCard from "../components/CategoryCard/CategoryCard";
import Header from "../components/Header/Header";

import { useGetPeopleQuery } from "../api/apiSlice";
import PeopleTable from "../components/Table/PeopleTable";

const People = () => {
  const { data } = useGetPeopleQuery();

  return (
    <div className="grid grid-cols-5 h-[100%]">
      <Sidebar />

      <div className="col-span-4 ">
        {/* menu bar */}
        <Header />
        <div className="w-full px-10 mt-6">
          <CategoryCard />
          <div className="mt-36">
            <h2 className="mb-6 font-semibold">People</h2>
            <PeopleTable
              data={data}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default People;
