import { useLocation } from "react-router";
import ButtonLink from "../components/ButtonLink";
import { PAGE_LINKS } from "../constants/app.constants";
import { convertScoreToPercentage, convertScoreToStressBand } from "../utils/app.utils";
import { useEffect } from "react";
import { trackEvent } from "../utils/gtm";

const Results = () => {
  const { score } = useLocation().state || { score: 14 };

  const percentage = convertScoreToPercentage(score);
  const stressBand = convertScoreToStressBand(score);

  useEffect(() => {
    trackEvent('results_viewed', {
      raw_score: score,
      percentage_score: percentage,
      stress_band: stressBand.title
    });
  }, [percentage, score, stressBand]);

  return (
    <>
      <div className="flex flex-col gap-2 mb-8">
        <h3 className="text-2xl md:text-3xl font-bold text-black text-center">
          Your Operational Stress Impact Score
        </h3>
        <h1 className="text-3xl md:text-4xl font-bold text-primary text-center">
          {percentage}% – {stressBand.title}
        </h1>
      </div>

      <h4 className="text-lg md:text-xl  font-bold text-black text-center">{stressBand.description}</h4>

      <p className="text-lg md:text-xl text-center mb-4 md:mb-8 my-6">
        Click <strong>“Continue”</strong> to uncover what’s really driving the stress and how we can
        help you take back control, starting today.
      </p>

      <div className="flex gap-4 mt-auto pt-4 md:pt-8">
        <ButtonLink text="Continue" to={PAGE_LINKS.results.next} state={{score}} />
      </div>
    </>
  );
};

export default Results;
