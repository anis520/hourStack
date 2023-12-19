import banner from "../../../public/images/herobanner.png";

const Hero = () => {
  return (
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
          HourStack helps you take your tasks from planning to completion. Keep
          work organized, collaborate transparently, schedule and track time–all
          in one place.
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
  );
};

export default Hero;
