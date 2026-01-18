import ButtonLink from "../components/ButtonLink";
import { PAGE_LINKS } from "../constants/app.constants";

const CourseDetail = () => {
  const timelines = [
    "It’s a step-by-step system built by a former cop who’s lived it, and it starts helping from the first video.",
    "You’ll get powerful, impactful lessons to rewire your stress response, build emotional control, and reconnect with who you were before the job took over.",
    "These are lessons and practical tools that work in real life, on and off duty.",
    "You’ll also join a private supportive community of other cops doing the work together.",
  ];

  return (
    <>
      <div className="flex items-center justify-center">
        <h3 className="text-2xl md:text-3xl font-bold text-black mb-4 text-center">
          Real Tools.
          <span className="text-3xl md:text-4xl font-bold text-primary">&nbsp;Real Results.&nbsp;</span>
          From Day One.
        </h3>
      </div>

      <p className="text-lg md:text-xl text-left my-4 font-semibold">This isn’t just another online course.</p>
      <ol className="relative border-s-2 border-default">
        {timelines.map((timeline, index) => (
          <li key={index} className="mb-2 ms-6 p-2">
            <div className="absolute w-5 h-5 bg-primary rounded-full mt-0.5 -start-2.5 border-2 border-white"></div>
            <p className="text-md md:text-lg font-normal">{timeline}</p>
          </li>
        ))}
      </ol>

      <div className="flex gap-4 mt-auto pt-4 md:pt-8 justify-center">
        <ButtonLink text="Back" to={PAGE_LINKS.courseDetail.previous} isSecondary={true} />

        <ButtonLink text="Next" to={PAGE_LINKS.courseDetail.next} />
      </div>
    </>
  );
};

export default CourseDetail;
