import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";

import { useNavigate } from "react-router-dom";
// import { FcGoogle } from "react-icons/fc";

import shareVideo from "../assets/share.mp4";
import logo from "../assets/logowhite.png";
import { client } from "../client";

const errorResponse = (response) => {
  console.log(response);
};

const Login = () => {
  const navigate = useNavigate();
  const successResponse = (response) => {
    const decoded = jwt_decode(response.credential);

    const doc = {
      _id: decoded.jti,
      _type: "user",
      userName: decoded.name,
      image: decoded.picture,
    };
    localStorage.setItem("user", JSON.stringify(doc));

    client.createIfNotExists(doc).then(() => {
      navigate("/", { replace: true });
    });
  };
  return (
    <div className="flex justify-start items-center flex-col h-screen">
      <div className="relative w-full h-f">
        <video
          src={shareVideo}
          type="video/mp4"
          loop
          controls={false}
          muted
          autoPlay
          className="w-full h-full object-cover"
        />

        <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay">
          <div className="p-5">
            <img src={logo} width="130px" alt="login-logo" />
          </div>

          <div className="shadow-2xl">
            <GoogleLogin onSuccess={successResponse} onError={errorResponse} />

            {/* <GoogleLogin
              clientId={`${process.env.REACT_APP_GOOGLE_API_TOKEN}`}
              render={(renderProps) => (
                <button
                  type="button"
                  className="bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  <FcGoogle className="mr-4" /> Sign in with google
                </button>
              )}
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;