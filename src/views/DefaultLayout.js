import React from "react";
import ScrennTemperature from "../component/ScrennTemperature/ScrennTemperature";
import ScrennSub from "../component/ScrennSub/ScrennSub";
// search
import Search from "../component/Search/Search";
// overlay
import OverLay from "../component/OverLay/OverLay";
const DefaultLayout = () => {
  return (
    <div className=" w-full h-full  lg:h-[100vh] bg-sub flex items-center justify-center">
      {/*  wrapper */}
      <div className="w-full lg:w-[85%] h-full lg:h-[90%] rounded-none  lg:rounded-[24px] bg-main flex flex-col lg:flex-row items-center justify-center lg:justify-between">
        <ScrennTemperature />
        <ScrennSub />
      </div>
    </div>
  );
};

export default DefaultLayout;
