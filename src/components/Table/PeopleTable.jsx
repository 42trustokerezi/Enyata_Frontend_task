import React from "react";

const PeopleTable = ({  data=null, }) => {
  
  return (
    <table className="w-full text-xs  border mb-10">
      <tr className="text-gray-400">
        <td className="w-[5%] pl-3"><input type="checkbox" /></td>
        <td className="py-6">Name</td>
        <td className="">Birth Year</td>
        <td>Gender</td>
        <td>Hair Color</td>
        <td>Height</td>
        <td>Created</td>
      </tr>

      {data && data.results.map((content) => (
        <tr className="border">
        <td className="w-[5%] pl-3"><input type="checkbox"  /></td>
          <td className="py-6">{content.name}</td>
          <td className="">{content.birth_year}</td>
          <td className="">{content.gender}</td>
          <td className="">{content.hair_color}</td>
          <td className="">{content.height}</td>
          <td className="">{content.created}</td>
        </tr>
      ))}
    </table>
  );
};

export default PeopleTable;
