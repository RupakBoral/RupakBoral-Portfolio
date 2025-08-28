import React from "react";

const ItemsList = ({ icon, skill, desc, key }) => {
  return (
    <div
      className={`flex gap-4 border border-opacity-75 items-center border-zinc-700 px-3 rounded-xl hover:scale-105 transition-all duration-900 cursor-pointer ${
        skill != null ? "hover:shadow-blue-400 hover:shadow-md" : ""
      }`}
    >
      {icon != null ? (
        <img
          className="reveal-up w-10 h-10 bg-transparent rounded-xl aspect-square object-fill"
          src={icon}
          alt={`skill - ${key}`}
          loading="lazy"
        />
      ) : (
        ""
      )}
      <div className="flex flex-col py-3 gap-2 md:gap-6 justify-center text-wrap box-content">
        {skill != null ? (
          <h2 className="text-lg font-semibold text-zinc-200">{skill}</h2>
        ) : (
          ""
        )}
        <p className="text-zinc-400">{desc}</p>
      </div>
    </div>
  );
};

export default ItemsList;
