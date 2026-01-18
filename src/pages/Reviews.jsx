import { useEffect, useMemo, useState } from "react";
import ButtonLink from "../components/ButtonLink";
import ProgressBar from "../components/ProgressBar";
import StartRating from "../components/StarRating";
import { PAGE_LINKS } from "../constants/app.constants";
import { useLocation } from "react-router";

const Reviews = () => {
  const [showButton, setShowButton] = useState(false);
  const [visibleItems, setVisibleItems] = useState([]);
  const { score } = useLocation().state || { score: 14 };

  const reviews = useMemo(() => {
    return [
      {
        name: "US Officer - Orange County Sheriff's Office",
        feedback:
          "The hyper-vigilance part hit hard. I showed it to my wife. She cried, because it helped her understand me. Thank you for doing what you do",
      },
      {
        name: "Trooper - Ohio State Patrol",
        feedback:
          "Fucking fantastic. This was exactly what I needed to hear. This was the best way I’ve heard mental health being talked about and discussed",
      },
      {
        name: "US Officer - Irvine Police Dept, CA",
        feedback:
          "Should be mandatory for all cops…Someone that went through it on the job means more than a typical psych professional",
      },
    ];
  }, []);

  useEffect(() => {
    const timeouts = reviews.map((_, index) => {
      return setTimeout(() => {
        setVisibleItems((prev) => [...prev, index]);
      }, index * 800 + 100); // Staggered delay: 100ms, 900ms, 1700ms...
    });
    return () => timeouts.forEach(clearTimeout);
  }, [reviews]);

  return (
    <div>
      <h1 className="text-xl md:text-2xl font-bold mb-6 text-center">
        Presented To Agencies all across the United States and Australia about Critical Stress
        Management for Police.
      </h1>

      <ProgressBar setShowButton={setShowButton} />

      <div className="flex flex-col gap-6 mx-auto">
        {reviews.map((review, index) => (
          <div
            key={index}
            className={`bg-white border border-gray-200 border-l-4 border-l-primary rounded-lg shadow-lg p-4 md:p-6 transition-all duration-700 ease-out transform ${
              visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
              <h2 className="text-lg md:text-xl font-semibold">{review.name}</h2>
              <StartRating />
            </div>
            <p className="text-black italic text-lg mt-2">{review.feedback}</p>
          </div>
        ))}
      </div>
      <div className="flex gap-4 mt-auto pt-8 md:pt-8">
        {showButton && (
          <ButtonLink text="Continue" to={PAGE_LINKS.reviews.next} state={{ score }} />
        )}
      </div>
    </div>
  );
};

export default Reviews;
