import React from "react";
import { RiStarFill } from "react-icons/ri";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import reviw_1 from "../../assets/img/review_1.jpg";
export const ReviewSection = () => {
  return (
    <div className="tab-container">
      <Tabs>
        <TabList>
          <Tab>Description</Tab>
          <Tab>Additional info</Tab>
          <Tab>Review</Tab>
        </TabList>

        <TabPanel className={"tab-pannel"}>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Vivamus bibendum magna Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.Contrary to popular
            belief, Lorem Ipsum is not simply random text. It has roots in a
            piece of classical Latin literature from 45 BC, making it over 2000
            years old.
            <br />
            <br />
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio.
          </p>
        </TabPanel>
        <TabPanel>
          <div className="additional-info">
            <table className="styled-table">
              <tbody>
                <tr>
                  <td>Capacity</td>
                  <td>5Kg</td>
                </tr>
                <tr>
                  <td>Color </td>
                  <td>Black, Brown, Red,</td>
                </tr>
                <tr>
                  <td>Water Resistant </td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>Material</td>
                  <td>Artificial Leather</td>
                </tr>
              </tbody>
            </table>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="review">
            <div className="review-img">
              {" "}
              <img src={reviw_1} alt="" />
            </div>
            <div className="review-data">
              <div className="top-part">
                <div className="review-names">
                  <p>
                    <span>Alea Brooks</span>
                    <span>June 17, 2018</span>
                  </p>
                </div>
                <div className="review-starts">
                  <RiStarFill />
                  <RiStarFill />
                  <RiStarFill />
                  <RiStarFill />
                </div>
              </div>
              <div className="bottom-part">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deleniti commodi est ut provident quo magnam repudiandae
                  laboriosam odio explicabo excepturi. Maxime aperiam vitae
                  quisquam iusto, ex reprehenderit perferendis quibusdam
                  maiores.
                </p>
              </div>
            </div>
          </div>
          <div className="review">
            <div className="review-img">
              {" "}
              <img src={reviw_1} alt="" />
            </div>
            <div className="review-data">
              <div className="top-part">
                <div className="review-names">
                  <p>
                    <span>Alea Brooks</span>
                    <span>June 17, 2018</span>
                  </p>
                </div>
                <div className="review-starts">
                  <RiStarFill />
                  <RiStarFill />
                  <RiStarFill />
                  <RiStarFill />
                </div>
              </div>
              <div className="bottom-part">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deleniti commodi est ut provident quo magnam repudiandae
                  laboriosam odio explicabo excepturi. Maxime aperiam vitae
                  quisquam iusto, ex reprehenderit perferendis quibusdam
                  maiores.
                </p>
              </div>
            </div>
          </div>
          <div className="add-review">
            <h5>Add a review</h5>
            <form action="">
              <div class="rating">
                <input type="radio" id="star5" name="rate" value="5" />
                <label for="star5" title="text">
                  <svg
                    viewBox="0 0 576 512"
                    height="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    class="star-solid"
                  >
                    <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
                  </svg>
                </label>
                <input type="radio" id="star4" name="rate" value="4" />
                <label for="star4" title="text">
                  <svg
                    viewBox="0 0 576 512"
                    height="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    class="star-solid"
                  >
                    <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
                  </svg>
                </label>
                <input
                  checked=""
                  type="radio"
                  id="star3"
                  name="rate"
                  value="3"
                />
                <label for="star3" title="text">
                  <svg
                    viewBox="0 0 576 512"
                    height="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    class="star-solid"
                  >
                    <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
                  </svg>
                </label>
                <input type="radio" id="star2" name="rate" value="2" />
                <label for="star2" title="text">
                  <svg
                    viewBox="0 0 576 512"
                    height="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    class="star-solid"
                  >
                    <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
                  </svg>
                </label>
                <input type="radio" id="star1" name="rate" value="1" />
                <label for="star1" title="text">
                  <svg
                    viewBox="0 0 576 512"
                    height="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    class="star-solid"
                  >
                    <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
                  </svg>
                </label>
              </div>

              <div className="review-textarea">
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Enter Your review* "
                ></textarea>
              </div>
              <div className="review-name-email">
                <div className="review-name">
                  <input type="text" placeholder="Enter Your  Name* " />
                </div>
                <div className="review-email">
                  <input type="email" placeholder="Enter Your  Email* " />
                </div>
              </div>
              <div className="review-name-btn">
                <button> Submit Review </button>
              </div>
            </form>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};
