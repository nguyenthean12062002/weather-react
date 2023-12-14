import React from "react";

const Search = ({ isHidden }) => {
  console.log(isHidden);
  return (
    <div
      hidden={isHidden}
      className="w-full p-[30px] h-full flex flex-col items-center justify-center"
    >
      <h2 className="py-[22px] text-[2rem]">
        Enter the address where you want to see the weather
      </h2>
      <input
        placeholder="Address"
        className="w-[60% h-[42px] border-[1px] border-[#999]"
      />
    </div>
  );
};

export default Search;
