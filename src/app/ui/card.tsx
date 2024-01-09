import { Card } from "../models/data_model";
import Button from "./button";
import evoplay from "../../../public/images/evo_lg.svg";
import pragmatic from "../../../public/images/pragmatic_lg.svg";
import playtech from "../../../public/images/play_tech_lg.svg";
import spinomenal from "../../../public/images/spinomenal_lg.svg";
import info_img from "../../../public/images/circle-info-1.svg";
import box from "../../../public/images/gift.svg";
import Image from "next/image";
import { useState } from "react";

type SupplierImages = {
    [key: string]: any;
  };
  
  const supplierImages: SupplierImages = {
    evoplay: evoplay,
    pragmatic: pragmatic,
    playtech: playtech,
    spinomenal: spinomenal,
  };

export default function Card({ info }: { info: Card }) {
  const [action, setAction] = useState(false); 
  const handleAction = () => {
    setAction(!action);
  };
  const hoverAction = () => {
    if (action) {
      setAction(!action);
    }
  };
  return (
    <div className="flex relative w-[21.875rem] h-[15.625rem]">
      <Image
        className="rounded-2xl"
        fill={true}
        alt="background"
        src={info.src}
      ></Image>

      <div
        onMouseLeave={hoverAction}
        className="group p-3 flex w-full flex-col absolute justify-between h-full  hover:bg-gradient-to-b from-transparent via-transparent to-black "
      >
        {!action ? (
          <>
            <div className="flex w-full justify-between items-center flex-row ">
              <Image
                alt="suplier_logo"
                src={supplierImages[info.supplier]}
                className="w-[35%]"
              ></Image>
              <div className="flex bg-[#010101CC]/[0.8] h-7 rounded-md p-1">
                <Image className="flex " alt="info" src={info_img}></Image>
              </div>
            </div>

            <div className="hidden group-hover:flex justify-center">
              <Button disabled={info.disabled} action={handleAction} />
            </div>
            <div className="flex justify-between flex-row">
              <span className="font-bold text-base">{info.name}</span>
              {info.info.moodBonus ? (
                <Image src={box} alt="gift" className="rounded-md"></Image>
              ) : (
                <></>
              )}
            </div>
          </>
        ) : (
          <div className="flex flex-col w-full h-full justify-between">
            <Image
              alt="suplier_logo"
              src={supplierImages[info.supplier]}
              className="w-[35%]"
            ></Image>
            <div className="flex flex-col">
              <span className="font-bold text-xl">{info.name}</span>
              <div className="flex flex-row gap-3 py-1">
                <div className="rounded-md bg-yellow-400 bg-opacity-20 p-1">
                  VERSION: {info.info.version}
                </div>
                <div className="rounded-md bg-yellow-400 bg-opacity-20 p-1">
                  RTP: {info.info.rtp}
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <div className="rounded-md bg-yellow-400 bg-opacity-20 p-1">
                  VOTALIDAD: ALTA
                </div>
                <div
                  onClick={handleAction}
                  className="flex cursor-pointer  bg-[#010101CC]/[0.8] h-7 rounded-md p-1"
                >
                  <Image className="flex " alt="info" src={info_img}></Image>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
