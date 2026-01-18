import sevenNewsImg from "../assets/7news.png";
import courierMailImg from "../assets/courier-mail.png";
import speakerImg from "../assets/speaker.png";
import tenImg from "../assets/ten.png";
import Button from "../components/Button";

const SocialTriviaFact = ({ onClick }) => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col md:flex-row gap-2">
        {/* Image */}
        <div className="flex-1">
          <img src={speakerImg} alt="Speaker" className="w-full h-full rounded-md object-cover" />
        </div>

        {/* Main Text */}
        <div className="flex-1 p-4">
          <div className="mb-8">
            <p className="text-black font-semibold text-lg md:text-xl text-center">
              Over <span className="font-semibold text-2xl md:text-3xl text-primary">5,235</span> cops have
              attended Shaun's Police Stress training. 91.8% of their anonymous feedback rated it 5
              stars.
            </p>
          </div>

          {/* Mentioned In Section */}
          <div>
            <h4 className="text-xl font-semibold text-primary mb-3 text-center underline">
              Mentioned in
            </h4>
            <div className="flex justify-start gap-2">
              <div className="w-1/2 flex flex-col">
                <img src={sevenNewsImg} alt="7news" className="h-full w-full object-contain" />
                <img
                  src={courierMailImg}
                  alt="Courier Mail"
                  className="h-full w-full object-contain"
                />
              </div>
              <img src={tenImg} alt="10" className="w-1/2 h-full object-contain" />
            </div>
          </div>
        </div>
      </div>
      <Button text="Continue" onClick={() => onClick('quiz')} />
    </div>
  );
};

export default SocialTriviaFact;
