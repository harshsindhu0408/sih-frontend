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
      title: "Disater",
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
        <div key={banner.id} className="banner p-20 w-full flex justify-center">
          {/* banner div */}
          <div className="flex w-10/12 flex-row gap-5 items-center">
            {/* banner image div */}
            {!banner.right && (
              <div className="banner_img">
                <img className="w-50" src={banner.img} alt="" />
              </div>
            )}

            {/* banner info */}
            <div className="info">
              {/* title */}
              <b className="font-Roberto text-4xl">{banner.title}</b>
              {/* description */}
              <p className="w-[32rem]">{banner.description}</p>
              <Link to={banner.link}>
                <button className="my-4 bg-indigo-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Explore
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
