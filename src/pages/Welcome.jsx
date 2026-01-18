import { useState } from "react";
import ButtonLink from "../components/ButtonLink";
import ProgressBar from "../components/ProgressBar";

const Welcome = () => {
  const [showButton, setShowButton] = useState(false);

  return (
    <div className="p-4 md:p-8">
      {/* Logo/Header */}
      <div className="text-center mb-8 md:mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-black mb-4">Stress Level Quiz</h1>
        <div className="h-1.5 w-32 bg-primary mx-auto rounded-full"></div>
      </div>

      {/* Description */}
      <div className="text-center mb-12 md:mb-16">
        <p className="text-lg md:text-xl leading-6.5 text-black mb-4 font-normal">
          Understanding your stress level is the first step toward better wellbeing.
        </p>
      </div>

      {/* Progress Bar */}
      <ProgressBar setShowButton={setShowButton} />

      {/* CTA Button */}
      <div className="w-full flex justify-center">
        {showButton && <ButtonLink to="/quiz" text="Begin Quiz" />}
      </div>

      {/* Footer note */}
      <p className="text-center text-gray text-sm md:text-md mt-8 md:mt-10">
        Your responses are confidential and used only for assessment purposes.
      </p>
    </div>
  );
};

export default Welcome;
