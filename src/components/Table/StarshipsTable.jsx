import React from "react";

const StarshipsTable = ({  data=null, }) => {
  
  return (
    <table className="w-full text-xs  border mb-10">
      <tr className="text-gray-400">
        <td className="w-[5%] pl-3"><input type="checkbox" /></td>
        <td className="py-6">Name</td>
        <td className="">Model</td>
        <td>Manufacturer</td>
        <td>Passengers</td>
        <td>Length</td>
        <td>Created</td>
      </tr>

      {data && data.results.map((content) => (
        <tr className="border">
        <td className="w-[5%] pl-3"><input type="checkbox"  /></td>
          <td className="py-6">{content.name}</td>
          <td className="">{content.model}</td>
          <td className="">{content.manufacturer}</td>
          <td className="">{content.passengers}</td>
          <td className="">{content.length}</td>
          <td className="">{content.created}</td>
        </tr>
      ))}
    </table>
  );
};

export default StarshipsTable;
