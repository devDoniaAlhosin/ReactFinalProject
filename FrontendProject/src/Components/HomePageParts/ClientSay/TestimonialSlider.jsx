import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import "swiper/css/pagination"; // Import Swiper pagination styles
import "swiper/css/navigation"; // Import Swiper navigation styles
import test_1 from "../../../assets/img/user_img4.jpg";

export const TestimonialSlider = () => {
  return (
    <div className="test--container">
      <Swiper
        className="testimonial mySwiper"
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true, el: ".swiper-pagination" }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
      >
        <SwiperSlide>
          <div className="slide">
            <h1>Our Client Say!</h1>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam,
              saepe provident dolorem a quaerat quo error facere nihil deleniti
              eligendi ipsum adipisci, fugit, architecto amet asperiores
              doloremque deserunt eum nemo.
            </p>
            <i className="bx bxs-quote-alt-left quote-icon"></i>
            <div className="testi-user-details">
              <img src={test_1} alt="" className="image" />
              <div className="details">
                <span className="name">Marnie Lotter</span>
                <span className="job">Web Developer</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <h1>Our Client Say!</h1>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam,
              saepe provident dolorem a quaerat quo error facere nihil deleniti
              eligendi ipsum adipisci, fugit, architecto amet asperiores
              doloremque deserunt eum nemo.
            </p>
            <i className="bx bxs-quote-alt-left quote-icon"></i>
            <div className="testi-user-details">
              <img src={test_1} alt="" className="image" />
              <div className="details">
                <span className="name">Marnie Lotter</span>
                <span className="job">Web Developer</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <h1>Our Client Say!</h1>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam,
              saepe provident dolorem a quaerat quo error facere nihil deleniti
              eligendi ipsum adipisci, fugit, architecto amet asperiores
              doloremque deserunt eum nemo.
            </p>
            <i className="bx bxs-quote-alt-left quote-icon"></i>
            <div className="testi-user-details">
              <img src={test_1} alt="" className="image" />
              <div className="details">
                <span className="name">Marnie Lotter</span>
                <span className="job">Web Developer</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <div class="swiper-button-next nav-btn"></div>
        <div class="swiper-button-prev nav-btn"></div>
        <div class="swiper-pagination"></div>
      </Swiper>
    </div>
  );
};
