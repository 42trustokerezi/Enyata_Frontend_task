import React from "react";

const SpeciesTable = ({  data=null, }) => {
  
  return (
    <table className="w-full text-xs  border mb-10">
      <tr className="text-gray-400">
        <td className="w-[5%] pl-3"><input type="checkbox" /></td>
        <td className="py-6">Name</td>
        <td className="">Classification</td>
        <td>Eye Colors</td>
        <td>Hair Color</td>
        <td>Height</td>
        <td>Created</td>
      </tr>

      {data && data.results.map((content) => (
        <tr className="border">
        <td className="w-[5%] pl-3"><input type="checkbox"  /></td>
          <td className="py-6">{content.name}</td>
          <td className="">{content.classification}</td>
          <td className="">{content.eye_colors}</td>
          <td className="">{content.hair_colors}</td>
          <td className="">{content.average_height}</td>
          <td className="">{content.created}</td>
        </tr>
      ))}
    </table>
  );
};

export default SpeciesTable;
