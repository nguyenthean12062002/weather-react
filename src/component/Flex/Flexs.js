import React, { Children } from "react";

const Flexs = ({ children, justify, p, className }) => {
  return (
    <div
      className={`${className} flex items-center justify-${justify} p-[${p}px]`}
    >
      {children}
    </div>
  );
};

export default Flexs;
