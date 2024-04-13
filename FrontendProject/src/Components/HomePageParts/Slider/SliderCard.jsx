import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import banner1 from "../../../assets/img/banner1.jpg";
import banner2 from "../../../assets/img/banner2.jpg";
import banner3 from "../../../assets/img/banner3.jpg";

export const SliderCard = () => {
  const Sdata = [
    {
      id: 1,
      title: "Get up to 50% off Today Only!",
      desc: "Women Fashion",
      cover: banner1,
    },
    {
      id: 2,
      title: "Get up to 50% off Today Only!",
      desc: "Mens Fashion",
      cover: banner2,
    },
    {
      id: 3,
      title: "Get up to 50% off Today Only!",
      desc: "Summer Sale",
      cover: banner3,
    },
  ];
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          position: "absolute",
          left: "100px",
          top: "50%",
          display: "block",
          background: "green",
        }}
        onClick={onClick}
      />
    );
  }
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => {
      return (
        <ul className="dot" style={{ margin: "20px" }}>
          {dots}
        </ul>
      );
    },
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
      <div className="Slider-main" style={{ height: "", width: "100%" }}>
        <Slider {...settings}>
          {Sdata.map((value, index) => (
            <div className="box " key={index}>
              <div className="left">
                <h5>{value.title}</h5>
                <h2>{value.desc}</h2>
                <div className="slider--btn">
                  <button className="">Visit Collections</button>
                </div>
              </div>
              <div className="right">
                <img src={value.cover} alt="" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};
