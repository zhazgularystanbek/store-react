import React, { useState, useEffect } from "react";
import img1 from "../../../assets/images/homeBg1.png";
import img2 from "../../../assets/images/img2.webp";
import img3 from "../../../assets/images/img3.jpg";
import img4 from "../../../assets/images/img4.webp";
const Slider = () => {
  const sliderList = [img1, img2, img3, img4];
  let [slide, setSlide] = useState(0);
  let classN = "round";

  function getNext() {
    if (sliderList.length - 1 === slide) {
      slide = -1;
    }
    setSlide(slide + 1);
  }
  function getPrev() {
    if (slide === 0) {
      slide = 4;
    }
    setSlide(slide - 1);
  }
  useEffect(() => {
    const int = setInterval(() => {
      getNext();
    }, 3000);
    return () => clearInterval(int);
  }, [slide]);
  return (
    <div id="slider">
      <div
        className="sliderLists"
        style={{
          backgroundImage: `url(${sliderList[slide]})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="slider">
            <div className="arrows">
              <div className=" arrow-div" onClick={getPrev}>
                <span className="prev">&larr;</span>
              </div>
              <div className=" arrow-div" onClick={getNext}>
                <span className="next">&rarr;</span>
              </div>
            </div>
            <div className="rounds">
              {sliderList.map((el, ind) => (
                <div className="rounds">
                  <div
                    id={ind}
                    className={slide === ind ? classN + " active" : classN}
                    onClick={() => setSlide(ind)}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
