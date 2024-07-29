import { useThemeDetector } from "@/lib/utils";
import React from "react";

const Home = () => {
  
  const mode = localStorage.getItem("mode")=== "dark"? true : false;

  console.log(useThemeDetector(), mode);
  return (
    <div
      className="flex flex-col justify-center items-center h-screen w-screen bg-black text-white"
      style={{ height: "100%" }}
    >
      <div id="frame" className="bg-white " style={{ height: "100%", width: {mode? "100%" : "80%"} }}>
        <div id="top">
        <div id="profilePicture"></div>
        </div>
        <div id="highlights">

        </div>
        <div id="footer">
          <div id="navLinks"></div>
          <div id="icons"></div>
          <p id="footerText">@tadiwapfachi-{new  Date().getFullYear()}</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
