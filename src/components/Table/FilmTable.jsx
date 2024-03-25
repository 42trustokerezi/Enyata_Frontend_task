import React from "react";

const FilmTable = ({ data }) => {
  
  return (
    <table className="w-full text-xs  border mb-10">
      <tr className="text-gray-400">
        <td className="w-[5%] pl-3"><input type="checkbox" /></td>
        <td className="py-6">title</td>
        <td className="">date</td>
        <td>director</td>
        <td>producer</td>
        <td>id</td>
        <td>character</td>
      </tr>

      {data && data.results.map((content) => (
        <tr className="border">
        <td className="w-[5%] pl-3"><input type="checkbox"  /></td>
          <td className="py-6">{content.title}</td>
          <td className="">{content.release_date}</td>
          <td className="">{content.director}</td>
          <td className="">{content.producer}</td>
          <td className="">{content.episode_id}</td>
          <td className="">{content.characters[0]}</td>
        </tr>
      ))}
    </table>
  );
};

export default FilmTable;
