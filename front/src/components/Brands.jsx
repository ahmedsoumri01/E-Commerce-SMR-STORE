import React from "react";
import HuaweiLogo from "../assets/images/brands/huaweilogo.png";
import AppleLogo from "../assets/images/brands/applelogo.png";
import HaylouLogo from "../assets/images/brands/hayloulogo.png";
import HocoLogo from "../assets/images/brands/hocologo.png";
import MibroLogo from "../assets/images/brands/mibrologo.png";
import OppoLogo from "../assets/images/brands/oppologo.png";
import SamsungLogo from "../assets/images/brands/samsunglogo.png";
import XiaomiLogo from "../assets/images/brands/xiaomilogo.webp";

export default function Brands() {
  return (
    <>
    <h2 className="text-2xl font-bold text-center mt-4">Brands</h2>
    <div className="bg-white grid grid-cols-2 m-4 md:grid-cols-3 lg:grid-cols-4">
      <div className="border-2 p-4 flex justify-center items-center">
      <img className="max-w-28  md:max-w-36 lg:max-w-44" src={HuaweiLogo} alt="huawei logo" />
      </div>
      <div className="border-2 p-4 flex justify-center items-center">
      <img className="max-w-28  md:max-w-36 lg:max-w-44" src={AppleLogo} alt="" />{" "}
      </div>
      <div className="border-2 p-4 flex justify-center items-center">
      <img className="max-w-28  md:max-w-36 lg:max-w-44"src={HaylouLogo} alt="" />{" "}
      </div>
      <div className="border-2 p-4 flex justify-center items-center">
      <img className="max-w-28  md:max-w-36 lg:max-w-44" src={HocoLogo} alt="" />{" "}
      </div>
      <div className="border-2 p-4  flex justify-center items-center ">
      <img className="max-w-28  md:max-w-36 lg:max-w-44" src={MibroLogo} alt="" />{" "}
      </div>
      <div className="border-2 p-4 flex justify-center items-center">
      <img className="max-w-28  md:max-w-36 lg:max-w-44" src={OppoLogo} alt="" />{" "}
      </div>
      <div className="border-2 p-4 flex justify-center items-center">
      <img className="max-w-28  md:max-w-36 lg:max-w-44" src={SamsungLogo} alt="" />{" "}
      </div>
      <div className="border-2 p-4 flex justify-center items-center">
      <img className="max-w-28  md:max-w-36 lg:max-w-44" src={XiaomiLogo} alt="" />{" "}
      </div>
    </div>
    </>
  );
}
