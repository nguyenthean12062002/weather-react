import React, { useContext, useState } from "react";
import { IoIosAdd } from "react-icons/io";
import { TiLocationArrowOutline } from "react-icons/ti";
import { TbTemperatureCelsius } from "react-icons/tb";
import { FaWind } from "react-icons/fa";
import { FaSpinner } from "react-icons/fa6";
import { RiMapPinTimeFill } from "react-icons/ri";

// search
import Search from "../Search/Search";
import Flexs from "../Flex/Flexs";
// datacontext
import { DataContext } from "../../services/DataProvider";
const ScrennTemperature = () => {
  const [isHidden, setIsHidden] = useState(true);
  const { dataCurent } = useContext(DataContext);
  // const { sys, name, wind, timezone, main } = dataCurent;
  //get day
  const days = new Date();
  const indexmonth = days.getMonth();
  let month = "";
  // month
  switch (indexmonth) {
    case 0:
      month = "Jan";
      break;
    case 1:
      month = "Feb";
      break;
    case 2:
      month = "Mar";
      break;
    case 3:
      month = "April";
      break;
    case 4:
      month = "May";
      break;
    case 5:
      month = "Jun";
      break;
    case 6:
      month = "Jul";
      break;
    case 7:
      month = "Aug";
      break;
    case 8:
      month = "Sept";
      break;
    case 9:
      month = "Oct";
      break;
    case 10:
      month = "Nov";
      break;
    case 11:
      month = "Dec";
      break;
    default:
      month = "";
  }
  const day = days.getDate();

  return (
    <div className=" w-[100%] lg:w-[30%] h-[100%] text-white relative ">
      {dataCurent === undefined || dataCurent === " " ? (
        <Flexs justify="center" className="w-full h-full">
          <span className="text-[1.2rem] flex items-center justify-center ">
            Loading <FaSpinner className="ml-[12px] animation__icon" />
          </span>
        </Flexs>
      ) : (
        <>
          <Flexs className="w-[100%]" justify="between" p="24">
            <div
              onClick={() => {
                setIsHidden(!isHidden);
              }}
            >
              <IoIosAdd className="text-[1.7rem] cursor-pointer" />
            </div>
            {/* toogle C => F */}
            <div className="text-[1.1rem]">Đổi</div>
          </Flexs>
          {/* show temperature at where */}
          <main className="w-full p-[24px]">
            <div className="w-full mb-[12px] text-[1.1rem]">
              {/* address */}
              <div className="w-full grid grid-cols-[1fr,20%] ">
                <div className="w-full flex items-centers justify-start">
                  <TiLocationArrowOutline className="text-[1.3rem]" />
                  <span>
                    {dataCurent.name} - {dataCurent.sys.country}
                  </span>
                </div>
                <div className=" flex items-center justify-between ">
                  <FaWind className="text-[0.9rem]" />
                  <span className="text-gray-200  text-end">
                    {dataCurent.wind.speed}
                  </span>
                </div>
              </div>
              {/* date */}
              <div className="w-full grid grid-cols-[1fr,20%]  ">
                <span className="block">
                  To day-{day} {month}{" "}
                </span>
                <div className="flex items-center justify-between">
                  <RiMapPinTimeFill className="text-[0.98rem]" />
                  <span className="text-gray-200  text-end">
                    {dataCurent.timezone}
                  </span>
                </div>
              </div>
            </div>
            {/* temperature */}
            <Flexs justify="center" className="relative mt-6">
              <span className="text-[5rem]">{dataCurent.main.temp}</span>{" "}
              <TbTemperatureCelsius className="text-[4rem] absolute top-[-2%] right-[0%]" />
            </Flexs>
            <Flexs justify="center" className="mt-[8px]">
              <div className="text-[1rem] mr-[4px]">
                <img
                  src={`https://openweathermap.org/img/wn/${dataCurent.weather[0].icon}@2x.png`}
                />
              </div>
              <div className="text-[1.3rem] font-bold">
                {dataCurent.weather[0].main}
              </div>
            </Flexs>
            <Flexs
              justify="center"
              className="text-[1rem] mt-[4px] italic capitalize"
            >
              {dataCurent.weather[0].description}
            </Flexs>
            {/* nắng hay mưa */}
          </main>
        </>
      )}
      <div className="hidden lg:block bottom-[0%] left-0 absolute ">
        <img src="https://png.pngtree.com/png-vector/20220608/ourmid/pngtree-home-barometer-icon-isolated-flat-png-image_4904797.png" />
      </div>
    </div>
  );
};
export default ScrennTemperature;
