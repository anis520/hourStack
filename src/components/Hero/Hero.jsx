import banner from "../../../public/images/herobanner.png";
import brandone from "../../../public/power_digital.png";
import brandtwo from "../../../public/citylitics_black.png";
import brandthree from "../../../public/thekey_black.png";
import brandfour from "../../../public/redfits.png";
import brandfive from "../../../public/yux-design_black.png";

const Hero = () => {
  return (
    <>
      {" "}
      <div className="pb-[80px]">
        <div className="flex items-center">
          {/* <------Left side -------> */}
          <div className="left w-6/12 space-y-6">
            <h3 className="text-6xl font-bold  text-zinc-800">
              <span className="bg-gradient-to-r from-[#68bdde] via-[#5f91ee] to-[#aab1f2] bg-clip-text text-transparent">
                Seamless
              </span>{" "}
              task & time management
            </h3>
            <p className="text-lg text-justify font-semibold">
              HourStack helps you take your tasks from planning to completion.
              Keep work organized, collaborates transparently, schedule and
              track time–all in one place.
            </p>
            <button className="bg-blue-600 text-white py-3 px-5  rounded-md font-semibold ">
              Start to Free
            </button>
          </div>
          {/* <------Right side -------> */}
          <div className="right w-6/12">
            <img className="w-full" src={banner} alt="" />
          </div>
        </div>
        {/* <=========Powering start===========> */}
        <div className="mt-[48px]">
          <h6 className="text-primary text-[19.2px] font-[700] text-center  mb-[8px] ">
            Powering teams big and small
          </h6>
          <div className="w-10/12 mx-auto mt-[40px] mb-[16px] flex items-center justify-around">
            <img
              src={brandone}
              alt="brand"
              className="  h-[24px] object-cover"
            />
            <img
              src={brandtwo}
              alt="brand"
              className="  h-[24px] object-cover"
            />{" "}
            <img
              src={brandthree}
              alt="brand"
              className="  h-[24px] object-cover"
            />
            <img
              src={brandfour}
              alt="brand"
              className="  h-[24px] object-cover"
            />
            <img
              src={brandfive}
              alt="brand"
              className="  h-[24px] object-cover"
            />
          </div>
        </div>
        {/* <=========Powering end===========> */}{" "}
      </div>
    </>
  );
};

export default Hero;
