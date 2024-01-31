import React from "react";
import slack_logo from "../../assets/icons/slack_logo.svg";
import google_logo from "../../assets/images/google_logo.png";
import apple_logo from "../../assets/images/apple_logo.jpg";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="flex flex-col w-screen justify-center items-center p-5">
      <div className="mt-5 mb-10">
        <img className="w-28" src={slack_logo} alt="logo" />
      </div>

      <div className="flex flex-col items-center max-w-[600px] text-center">
        <h1 className="text-5xl font-bold ">{`First of all, enter your email address`}</h1>
        <h2 className="text-lg my-2">
          {`We suggest using the `}
          {<strong>{`email address that you use at work.`}</strong>}
        </h2>
      </div>

      <div className="flex flex-col items-center p-2 my-5">
        <div className="flex flex-col items-center">
          <input
            type="email"
            placeholder="name@work-email.com"
            className="w-[350px]  border p-2 m-2 border-black rounded-md"
          />
          <button className="w-[350px] bg-purple-900 text-white p-2 font-semibold text-lg rounded-md my-2">
            Continue
          </button>
        </div>
        <div className="my-2">OR</div>
        <div className="flex flex-col items-center">
          <button className="w-[350px] flex justify-center items-center gap-2 border rounded-md border-black p-2 my-2 hover:shadow-lg">
            <img src={google_logo} className="w-5" alt="google logo" />
            <span>Continue with Google</span>
          </button>
          <button className="w-[350px] flex justify-center items-center gap-2 border rounded-md border-black p-2 my-2 hover:shadow-lg">
            <img src={apple_logo} className="w-8" alt="apple logo" />
            <span>Continue with Apple</span>
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <span>Already using Slack?</span>
        <Link to={"/signin"}>
          <span className="text-blue-800 hover:underline">
            Sign in to an existing workspace
          </span>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
