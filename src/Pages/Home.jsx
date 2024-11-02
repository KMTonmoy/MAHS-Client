import React from "react";
import Banner from "../Components/Banner";
import BannerInfo from "../Components/BannerInfo";
import Bangladesh from "../Components/Bangladesh";
import PhotoGallery from "../Components/PhotoGallery";
import AllEmergency from "../Components/AllEmergency";

const Home = () => {
  return (
    <div className="flex flex-col gap-10">
      <Banner />
      <BannerInfo />
      <Bangladesh />
          <PhotoGallery />
          <AllEmergency/>
    </div>
  );
};

export default Home;
