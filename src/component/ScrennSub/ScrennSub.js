import React, { useContext } from "react";
import { DataContext } from "../../services/DataProvider";
// flex component
import Flexs from "../Flex/Flexs";
// icon
import { CiTempHigh } from "react-icons/ci";
import { FaLongArrowAltDown, FaLongArrowAltUp } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { MdWindPower } from "react-icons/md";
import { FaMapMarkedAlt } from "react-icons/fa";
import { TbTemperatureCelsius } from "react-icons/tb";
import { FaWind } from "react-icons/fa";

const WrapperItem = ({ children }) => {
  return (
    <div className="bg-white h-[150px] lg:h-full  rounded-[12px] flex items-center justify-center p-[8px]">
      {children}
    </div>
  );
};
const ChildrenItem = ({ children, title, iconTitle, parameter }) => {
  return (
    <div className="w-[80%] h-[90%]">
      <Flexs justify="between">
        <h3 className="text-[1.2rem]">{title}</h3>
        <span className="text-[1.3rem]">{iconTitle}</span>
      </Flexs>
      <h3 className="text-center text-[1.4rem] py-[8px] mb-[4px] font-bold">
        {parameter}
      </h3>
      <div className="text-gray-500">{children}</div>
    </div>
  );
};
// component con của thời tiết ngày mai
const ChildrenItemTorWeather = ({ children, key, time, temp, wind }) => {
  return (
    <div
      key={key}
      className="flex items-center justify-center w-full py-[12px] lg:py-0 mt-[22px] lg:mt-0"
    >
      <div>
        {/* time */}
        <h4 className="text-gray-400">{time}</h4>
        <div className="mt-[10px]  w-full relative h-full">
          <h4 className="text-[2rem] lg:text-[2.1rem] text-center">{temp}</h4>
          <TbTemperatureCelsius className="text-[1.6rem] absolute top-[30%] right-0" />
        </div>
        {/* hướng gió  */}
        <div className="flex items-center justify-center mt-[12px] lg:mt-[4px]">
          <FaWind className="mr-[8px] lg:text-[1rem]" />
          <h5 className="">{wind}</h5>
        </div>
      </div>
    </div>
  );
};
const ScrennSub = () => {
  const { dataCurent, data5days } = useContext(DataContext);
  console.log(data5days);
  return (
    <div className="bg-[#f3f0f0] w-[90%] lg:w-[70%] h-full rounded-[24px] px-[34px] py-[24px] text-[1rem] lg:text-[0.9rem] flex flex-col items-center justify-center">
      {/* title hell */}
      <div className="h-[8%]">
        <h3 className="font-bold text-[1.1rem] mb-[8px] ">
          Wellcome back ... User
        </h3>
        <h4 className="tracking-wide font-light">
          Check out today's weather infomation
        </h4>
      </div>
      {/* more details of today weather */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[14px] min-h-[50%]  w-full  py-[12px] px-[4px] mt-[8px] md:px-[32px] md:mt-[24px] lg:px-[0px]">
        {dataCurent === undefined || dataCurent === "" ? (
          <>Loading</>
        ) : (
          <>
            {/* feels like */}
            <WrapperItem>
              <ChildrenItem
                title="Feels Like"
                iconTitle={<CiTempHigh />}
                parameter={dataCurent.main.feels_like}
              >
                <Flexs
                  justify="between"
                  className="mt-[8px] text-[1.1rem] text-gray-500"
                >
                  <span className="text-center">
                    {dataCurent.main.temp_min}
                    <FaLongArrowAltDown />
                  </span>
                  <span className="text-center">
                    {dataCurent.main.temp_max}
                    <FaLongArrowAltUp />
                  </span>
                </Flexs>
              </ChildrenItem>
            </WrapperItem>
            {/* Humidity */}
            <WrapperItem>
              <ChildrenItem
                title="Huidity"
                iconTitle={<WiHumidity />}
                parameter={dataCurent.main.humidity}
              ></ChildrenItem>
            </WrapperItem>
            {/* Wind */}
            <WrapperItem>
              <ChildrenItem
                title="Wind"
                iconTitle={<MdWindPower />}
                parameter={dataCurent.wind.speed}
              >
                <Flexs justify="between">
                  <h3>Deg: {dataCurent.wind.deg}</h3>
                  <h3>Gust: {dataCurent.wind.gust}</h3>
                </Flexs>
              </ChildrenItem>
            </WrapperItem>
            {/* Coord */}
            <WrapperItem>
              <ChildrenItem title="Coord" iconTitle={<FaMapMarkedAlt />}>
                <Flexs justify="between">
                  <h3>Lon:{dataCurent.coord.lon}</h3>
                  <h3>Lat:{dataCurent.coord.lat}</h3>
                </Flexs>
              </ChildrenItem>
            </WrapperItem>
            <WrapperItem></WrapperItem>
            <WrapperItem></WrapperItem>
          </>
        )}
      </div>
      {/* upcomming weather tomorrow hours */}
      <div className="bg-white w-full h-full min-h-[600px] md:min-h-[0px] lg:mb-[8px] mt-[30px] lg:mt-[0px]  py-[12px] rounded-[12px]">
        {dataCurent === undefined ? (
          <div className="w-full h-[300px] flex items-center justify-center">
            Loading
          </div>
        ) : (
          <div className="w-full h-full">
            <h4 className="text-[1.3rem] text-center py-[6px]">
              Tomorrow's Weather
            </h4>
            {/* show wethear tomorrow */}
            <div className="w-full h-full grid grid-cols-1 md:grid-cols-3 gap-[12px]">
              {data5days
                .filter((item, index) => {
                  if (index > 3) {
                    return item;
                  }
                })
                .map((item, index) => {
                  return (
                    <>
                      <ChildrenItemTorWeather
                        key={`item${index}`}
                        time={item.dt_txt}
                        temp={item.main.temp}
                        wind={item.wind.speed}
                      />
                    </>
                  );
                })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ScrennSub;
