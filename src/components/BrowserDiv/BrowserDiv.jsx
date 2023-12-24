import { commonStyle } from "../../style/style";
import bannerImg from "../../../public/browser_project.png";

const BrowserDiv = () => {
  return (
    <div className="flex pt-[80px] gap-[110px] ">
      <div className="min-w-[380px]">
        {/* <============single docs ================> */}
        <div className="py-[160px]">
          <p className={`${commonStyle.title}`}>TASK & PROJECT MANAGEMENT</p>
          <p className={`${commonStyle.titleone} my-[8px]`}>
            Plan tasks and projects
          </p>
          <p className={`${commonStyle.paragraph} mb-[16px]`}>
            Organize and assign work, add task details, and set deadlines.
          </p>
        </div>
        {/* <============single docs ================> */}
        <div className="py-[160px]">
          <p className={`${commonStyle.title}`}>SCHEDULE AND TRACK TIME</p>
          <p className={`${commonStyle.titleone} my-[8px]`}>
            Schedule and track time
          </p>
          <p className={`${commonStyle.paragraph} mb-[16px]`}>
            Build visual schedules that maximize productive time blocks. Then,
            track time with one click or enter it manually.
          </p>
        </div>
        {/* <============single docs ================> */}
        <div className="py-[160px]">
          <p className={`${commonStyle.title}`}>REPORTS & ANALYSIS</p>
          <p className={`${commonStyle.titleone} my-[8px]`}>
            Leverage meaningful insights
          </p>
          <p className={`${commonStyle.paragraph} mb-[16px]`}>
            Real-time reports make it easy to identify trends, improve time
            utilization, and bill clients accurately.
          </p>
        </div>
      </div>
      <img
        className="w-[641px] h-[434px] sticky top-[150px]"
        src={bannerImg}
        alt=""
      />
    </div>
  );
};

export default BrowserDiv;
