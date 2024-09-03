import React from "react";
import Slider from "react-slick";

interface ImageCarouselProps {
  images: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: (
      <button type="button" className="slick-next">
        Next
      </button>
    ),
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="carousel-slide">
            <div className="max-sm:h-28 flex justify-center items-center">
              <img
                src={image}
                alt={`Slide ${index}`}
                className=""
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
