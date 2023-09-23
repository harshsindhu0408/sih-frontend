import React from "react";
import HarshPic from "../assets/team/harsh.jpg";
import MukeshPic from "../assets/team/mukesh.jpg";
import ImageCard from "../components/ImageCard";

const AboutUs = () => {
  const photos = [
    {
      id: 1,
      name: "Harsh",
      img: HarshPic,
    },
    {
      id: 2,
      name: "Mukesh",
      img: MukeshPic,
    },
    {
      id: 3,
      name: "Sanjeev",
      img: HarshPic,
    },
    {
      id: 4,
      name: "Smriti",
      img: HarshPic,
    },
    {
      id: 5,
      name: "Neeraj",
      img: HarshPic,
    },
    {
      id: 6,
      name: "Aditya",
      img: HarshPic,
    },
  ];

  return (
    <div className="w-full flex items-center justify-center mt-32">
      <div className="w-11/12 flex flex-col items-center justify-center">
        {/* heading div */}
        <div className="text-center font-serif h-20 text-6xl font-extrabold overflow-hidden">
          Meet The developers
        </div>

        {/* info div */}
        <div className="w-6/12 text-lg font-Roborto opacity-80 text-center">
          {`"At MDU Rohtak, we are a dedicated team of aspiring engineers pursuing 
          our B.Tech in Computer Science and Engineering. With a passion for technology
           and innovation, we embarked on our journey to create cutting-edge solutions.
            Leveraging the power of the MERN stack (MongoDB, Express.js, React, and Node.js),
             we've developed applications that push boundaries and redefine user experiences.
              Our mission is to continually learn, grow, and contribute to the ever-evolving 
              field of technology while striving for excellence in every project we undertake."`}
        </div>

        {/* Image cards */}

        <div className=" w-9/12 mt-10 gap-y-10 flex flex-row items-center justify-center gap-x-32 flex-wrap">
        {
            photos.map((data) => (
              <ImageCard data = {data}/>
            ))
          }
        </div>

      </div>
    </div>
  );
};

export default AboutUs;
