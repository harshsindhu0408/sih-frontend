import React from "react";
import img_1 from "../../assets/banner/banner_first.png";
import img_2 from "../../assets/banner/banner_second.png";
import img_3 from "../../assets/banner/banner_third.png";
import { Link } from "react-router-dom";

const Banner = () => {
  const banners = [
    {
      id: 1,
      right: false,
      title: "Disaster",
      img: img_1,
      link: "/disaster",
      description:
        "Get real-time updates on ongoing disasters, including their type, location, and severity. Stay one step ahead with our comprehensive disaster information.",
    },
    {
      id: 2,
      right: true,
      title: "Resources",
      img: img_2,
      link: "/resources",
      description:
        "Access a wide range of essential resources, from medical equipment to transportation, to effectively respond to disasters. Ensure you have the tools you need when it matters most.",
    },
    {
      id: 3,
      right: false,
      title: "Agencies",
      img: img_3,
      link: "/agencies",
      description:
        "Explore our network of registered rescue agencies, each with unique expertise. Collaborate, coordinate, and make a difference when communities need it most.",
    },
  ];
  return (
    // main banners div
    <>
      {banners.map((banner) => (
        <div key={banner.id} className="banner px-20 w-full flex flex-wrap justify-center">
          {/* banner div */}
          <div className="flex w-10/12 flex-row flex-wrap gap-16 items-center justify-between">
            {/* banner image div */}
            {!banner.right && (
              <div className="banner_img">
                <img className="w-50" src={banner.img} alt="" />
              </div>
            )}

            {/* banner info */}
            <div>
              {/* title */}
              <p className="font-Roberto font-bold overflow-hidden text-4xl">{banner.title}</p>
              {/* description */}
              <p className="w-[32rem] font-bold opacity-60 mt-4">{banner.description}</p>
              <Link to={banner.link}>
                <button className="mt-4 w-[150px] bg-indigo-500 hover:bg-blue-600 transition-all duration-200 text-white font-bold py-2 px-4 rounded-md">
                  Explore More
                </button>
              </Link>
            </div>

            {/* banner image div */}
            {banner.right && (
              <div className="banner_img">
                <img className="w-50" src={banner.img} alt="" />
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default Banner;
