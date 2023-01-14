import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
function Banner() {
  return (
    <div className="relative ">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img
            loading="lazy"
            src="https://links.papareact.com/7ma"
            alt="first banner"
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="https://m.media-amazon.com/images/I/71tIrZqybrL._SX3000_.jpg"
            alt="second banner"
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="https://links.papareact.com/6ff"
            alt="third banner"
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg"
            alt="fourth banner"
          />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
