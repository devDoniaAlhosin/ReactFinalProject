import React from "react";
import { Slider } from "../../Components/HomePageParts/Slider/Slider";
import { NewCollection } from "../../Components/HomePageParts/NewCollection/NewCollection";
import { Footer } from "../../Common/Footer/Footer";
import { BestSummer } from "../../Components/HomePageParts/BestSummer/BestSummer";
import { TestimonialSlider } from "../../Components/HomePageParts/ClientSay/TestimonialSlider";
import { FreeDelievery } from "../../Components/HomePageParts/FreeDelivery/FreeDelievery";
import { Subscribe } from "../../Components/HomePageParts/Subscribe/Subscribe";
import { ExclProduct } from "../../Components/HomePageParts/ExclusiveProducts/ExclProduct";
import { FeaturedSlide } from "../../Components/HomePageParts/FeaturedSlider/FeaturedSlide";

export const HomePage = () => {
  return (
    <>
      <Slider />
      <NewCollection />
      <ExclProduct />
      <BestSummer />
      <FeaturedSlide />
      <TestimonialSlider />
      <FreeDelievery />
    </>
  );
};
