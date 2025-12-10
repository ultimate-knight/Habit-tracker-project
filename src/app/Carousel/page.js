"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const app = [
  {
    name: "Tiger",
    img: "/Imgur/amur-tiger.jpeg",
    review: "Tigers are always a solitary animals",
  },

  {
    name: "Elephant",
    img: "/Imgur/elephant.jpeg",
    review: "Elephants are the largest land animal in the world",
  },

  {
    name: "Dinosaur",
    img: "/Imgur/jurassic.jpeg",
    review: "Dinosaurs are the largest prehistoric land animals in the world",
  },

  {
    name: "Black panther",
    img: "/Imgur/panther.jpeg",
    review: "Black panthers are the most black animal in the carnivores",
  },

  {
    name: "Giraffe",
    img: "/Imgur/giraffe.jpeg",
    review: "Giraffes have world's tallest neck in animals",
  },

  {
    name: "Jackal",
    img: "/Imgur/jackal.jpeg",
    review: "jackals are very cunning animals",
  },

  {
    name: "Fox",
    img: "/Imgur/fox.jpeg",
    review: "foxes are very clever animals",
  },

  {
    name: "Ostrich",
    img: "/Imgur/ostrich.jpeg",
    review: "ostrich is the largest bird in the world",
  },
];

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    pauseOnHover: true,
  };
  return (
    <div className="m-auto  text-black bg-black min-w-screen min-h-screen">
      <div className="w-3/4 text-black ml-40">
        <Slider {...settings} className="text-black carousal-slick">
          {app.map((bert, index) => (
            <div
              key={index}
              className="h-[450px] w-56 border-2 mt-20 space-x-6 bg-indigo-200  border-black flex flex-col items-center justify-center mx-20"
            >
              <div className=" flex items-center justify-center rounded-full mt-3">
                <img
                  src={bert.img}
                  alt=""
                  className="rounded-full w-44 h-44 bg-indigo-600"
                />
              </div>

              <div className="flex flex-col mt-4 p-2 items-center justify-center space-y-4">
                <h3 className="font-extrabold">{bert.name}</h3>
                <h5 className="text-center">{bert.review}</h5>
                <button className="text-white bg-indigo-800 w-fit border-1 border-gray-500 p-2 cursor-pointer">
                  Read more
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
export default Carousel;
