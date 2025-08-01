import React, { act } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import voter from "../assets/services/voter.png";
import ration from "../assets/services/ration.png";
import passport from "../assets/services/passport.png";
import income from "../assets/services/income-certificate.png";
import driving from "../assets/services/driving-license.png";

const services = [
  {
    name: "New Voter ID",
    image: voter,
  },
  {
    name: "Ration Card",
    image: ration,
  },
  {
    name: "Passport Apply",
    image: passport,
  },
  {
    name: "Income Certificate",
    image: income,
  },
  {
    name: "Driving License",
    image: driving,
  },
  // Add more services here
];

const PrevArrow = (props) => (
  <div className="custom-arrow left" onClick={props.onClick}>
    <FaArrowLeft />
  </div>
);

const NextArrow = (props) => (
  <div className="custom-arrow right" onClick={props.onClick}>
    <FaArrowRight />
  </div>
);

const CardSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 992,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <>
      <h2 className=" font-bold text-center mb-9 font-size-9xl ">
        Our Digital <span>Services</span>
      </h2>
      <div style={{ padding: "30px" }}>
        <Slider {...settings}>
          {services.map((service, index) => (
            <div key={index}>
              <div
                className="service-card"
                style={{
                  background: "#fff",
                  borderRadius: "10px",
                  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
                  padding: "20px",
                  margin: "10px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "160px",
                }}
              >
                <img
                  src={service.image}
                  alt={service.name}
                  style={{
                    width: "50px",
                    height: "50px",
                    objectFit: "fit",
                    marginBottom: "10px",
                  }}
                />
                <h5
                  style={{
                    textAlign: "center",
                    fontSize: "16px",
                    fontWeight: "600",
                  }}
                >
                  {service.name}
                </h5>
              </div>
            </div>
          ))}
        </Slider>

        {/* Arrows Styling */}
        <style>{`
          .custom-arrow {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            z-index: 10;
            background: #000;
            color: #fff;
            border-radius: 50%;
            padding: 10px;
            cursor: pointer;
          }
          .custom-arrow.left {
            left: -20px;
          }
          .custom-arrow.right {
            right: -20px;
          }
        `}</style>
      </div>
    </>
  );
};

export default CardSlider;
