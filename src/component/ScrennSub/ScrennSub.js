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
const ScrennSub = () => {
  const { dataCurent } = useContext(DataContext);
  console.log(dataCurent);
  return (
    <div className="bg-[#f3f0f0] w-[90%] lg:w-[70%] h-full rounded-[24px] px-[34px] py-[24px] text-[1rem] lg:text-[0.9rem]">
      {/* title hell */}
      <div className="h-[8%]">
        <h3 className="font-bold text-[1.1rem] mb-[8px] ">
          Wellcome back AN đẹp zai !
        </h3>
        <h4 className="tracking-wide font-light">
          Check out today's weather infomation
        </h4>
      </div>
      {/* more details of today weather */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[14px]  w-full h-[50%] lg:h-[50%] py-[12px] px-[4px] mt-[8px] md:px-[32px] md:mt-[24px] lg:px-[0px]">
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
      {/* upcomming weather hours */}
      <div className="bg-white w-full h-[300px] lg:mb-[8px] mt-[30px] lg:mt-[0px] lg:h-[40%] py-[12px] rounded-[12px]">
        {dataCurent === undefined ? <>Loading</> : <></>}
      </div>
    </div>
  );
};

export default ScrennSub;
