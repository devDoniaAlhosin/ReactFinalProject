import React from "react";
import { SliderCard } from "./SliderCard";

export const Slider = () => {
  return (
    <>
      <section
        className="Slider--Container"
        style={{ height: "", overflow: "hidden" }}
      >
        <div className="Slider--Item">
          <SliderCard />
        </div>
      </section>
    </>
  );
};
