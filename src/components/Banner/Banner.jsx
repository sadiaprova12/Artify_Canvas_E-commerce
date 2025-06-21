// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";


 const Banner = () => {
  return (
   <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="hero bg-no-repeat bg-cover min-h-screen"
            style={{
              backgroundImage: "url(https://i.ibb.co/CzQ5Z1Q/slider1.jpg)",
            }}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-[#E6BAA3] opacity-20"></div>
            {/* <div className="hero-content text-center text-white">
              <div className="lg:w-3/4">
                <h1 className="mb-5 text-3xl lg:text-5xl font-bold">
                  Discover Elegant Paintings for Your Space
                </h1>
              </div>
            </div> */}
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="hero bg-no-repeat bg-cover min-h-screen"
            style={{
              backgroundImage: "url(https://i.ibb.co/WWXZQ2F/slider2.jpg)",
            }}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-[#E6BAA3] opacity-20"></div>
            {/* <div className="hero-content text-center text-white">
              <div className="lg:w-3/4">
                <h1 className="mb-5 text-3xl lg:text-5xl font-bold">
                  Unveil Timeless Beauty with Our Artworks
                </h1>
              </div>
            </div> */}
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="hero bg-no-repeat bg-cover min-h-screen"
            style={{
              backgroundImage: "url(https://i.ibb.co/Vj4FChJ/slider3.jpg)",
            }}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-[#E6BAA3] opacity-10"></div>
            {/* <div className="hero-content text-center text-white">
              <div className="lg:w-3/4">
                <h1 className="mb-5 text-3xl lg:text-5xl font-bold">
                  Embrace Creativity Explore Our Elegant Art Gallery
                </h1>
              </div>
            </div> */}
          </div>
        </SwiperSlide>
      </Swiper>
  );
};

export default Banner;



























// // src/components/Banner/Banner.jsx
// import React from 'react';

// const Banner = () => {
//   return (
//     <div id="default-carousel" className="relative w-full" data-carousel="slide">
//       {/* Carousel wrapper */}
//       <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
//         {/* Item 1 */}
//         <div className="hidden duration-700 ease-in-out" data-carousel-item>
//           <img src="https://i.postimg.cc/XJLB8vnh/36180b30bd2a639ee2a6e6245209ac59.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
//         </div>
//         {/* Item 2 */}
//         <div className="hidden duration-700 ease-in-out" data-carousel-item>
//           <img src="/docs/images/carousel/carousel-2.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
//         </div>
//         {/* Add other items similarly... */}
//       </div>

//       {/* Slider indicators */}
//       <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
//         <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
//         <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
//         <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
//         {/* Add more indicators... */}
//       </div>
//     </div>
//   );
// };

// export default Banner;
