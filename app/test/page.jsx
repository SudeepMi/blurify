"use client"
import React from 'react';
import Slider from 'react-slick';
import Youtube from 'react-youtube';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({ videos }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <Slider {...settings} className="carousel flex justify-center w-full">
      {videos.map((videoId, index) => (
        <div key={index} className="carousel-slide items-center justify-center flex">
          <Youtube videoId={videoId} className="w-full h-auto flex justify-center" />
        </div>
      ))}
    </Slider>
  );
};
const Demo = () => {
  const videos = [
    'https://www.youtube.com/watch?v=GjHNGM7KN3w&list=PLfqMhTWNBTe3LtFWcvwpqTkUSlB32kJop&index=5',
    'https://www.youtube.com/watch?v=GjHNGM7KN3w&list=PLfqMhTWNBTe3LtFWcvwpqTkUSlB32kJop&index=6',
    'https://www.youtube.com/watch?v=hWF1DAZb4nU&list=PLYwrDCC_pg4F2CGFmMByWEWgIBQnk1vXM&index=7',
  ];
  return (
    <section>
      <div className="container mx-auto">
        <h1 className="text-center text-3xl font-bold my-8">Welcome to Youtube Video</h1>
      </div>

      <Carousel videos={videos} />

    </section>


  );
};
export default Demo;

