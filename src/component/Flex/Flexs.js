import React from "react";

const Flexs = ({ children, justify, p, className }) => {
  return (
    <div
      className={`${className} w-full flex items-center  justify-${justify} p-[${p}px]`}
    >
      {children}
    </div>
  );
};

export default Flexs;
