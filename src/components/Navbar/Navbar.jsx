import { FaAngleDown } from "react-icons/fa6";
import logo from "../../../public/images/hs-logo-color.svg";

import logotitle from "../../../public/images/hs-wordmark.svg";

const Navbar = () => {
  return (
    <div className="sticky top-0 px-0 md:px-8 lg:px-5  py-8 flex bg-[#F7F9FD] z-30">
      {/* <-------logo start------> */}
      <a href="" className="w-2/12  flex items-center  gap-1 px-2">
        <img src={logo} className="w-5 h-5 " alt="" />
        <img src={logotitle} className="w-auto h-5 " alt="" />
      </a>
      {/* <-------logo  end------> */}
      {/* <-------Nav  start------> */}
      <div className="w-7/12 mx-10 flex items-center justify-around text-[#636f82]  text-[16px]  ">
        <a href="" className="flex items-center gap-2 ">
          Features
          <FaAngleDown className="text-xs" />
        </a>
        <a href="" className="flex items-center gap-2 ">
          Use Cases <FaAngleDown className="text-xs" />
        </a>
        <a href="">Pricing</a>
        <a href="" className="flex items-center gap-2 ">
          Resources <FaAngleDown className="text-xs" />
        </a>
      </div>
      {/* <-------Nav  end------> */}
      {/* <-------Auth  start------> */}
      <div className=" w-3/12 flex justify-end gap-10">
        <button className="font-semibold text-[16px]">Log In</button>
        <button className="bg-blue-600 text-white py-2 px-4 rounded-md font-semibold ">
          Register
        </button>
      </div>
      {/* <-------Auth  end------> */}
    </div>
  );
};

export default Navbar;
