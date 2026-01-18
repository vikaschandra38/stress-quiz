import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import Button from "../components/Button";
import { PAGE_LINKS } from "../constants/app.constants";

const UserForm = () => {
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { score } = useLocation().state || { score: 14 };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    navigate(PAGE_LINKS.email.next, { state: { score}});
  };

  return (
    <div className="flex flex-col gap-3 md:gap-6">
      <h2 className="text-xl md:text-2xl font-bold text-black mb-0 text-center">
        Enter your email to receive your <br />{" "}
        <span className="text-primary text-2xl md:text-3xl"> full results and an action steps PDF.</span>
      </h2>

      <form className="flex flex-col gap-4 w-full max-w-md mx-auto" onSubmit={handleSubmit}>
        <div className="w-full flex flex-col gap-1">
          <label htmlFor="name" className="text-lg font-bold text-black">
            Name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>

        <div className="w-full flex flex-col gap-1">
          <label htmlFor="email" className="text-lg font-bold text-black">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>
        <Button type="submit" text="Submit" />
      </form>

      <p className="text-center text-gray text-sm md:text-md mt-8 md:mt-10">
        We respect your privacy and are committed to protecting your personal data. We’ll email you
        a copy of your results for convenient access.
      </p>
    </div>
  );
};

export default UserForm;
