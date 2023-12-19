import "./App.css";
import { FaAngleDown } from "react-icons/fa6";
import logo from "../public/images/hs-logo-color.svg";
import logotitle from "../public/images/hs-wordmark.svg";

function App() {
  return (
    <div className="wrapper py-8 flex">
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
        <button className="bg-blue-600 text-white p-2 rounded-sm font-semibold ">
          Start for Free
        </button>
      </div>
      {/* <-------Auth  end------> */}
    </div>
  );
}

export default App;
