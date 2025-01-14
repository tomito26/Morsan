"use client"
import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Testimonial from "./lib/ui/testimonial";
import { testimonials } from "@/lib/constants";

const Testimonials = () => {
  return (
    <div className="px-4 md:px-[60px] xl:px-[100px] 2xl:px-[160px] 3xl:px-[200px] 4xl:px-[240px] 5xl:px-[320px] lg:px-[80px] pt-20 pb-32 bg-[#0B2E4A]/10 flex justify-center items-center flex-col">
      <div className="md:w-10/12 4xl:w-8/12">
        <h2 className="md:text-sm text-xs uppercase font-bold text-[#0B2E4A] mb-3 text-center">
          Testimonials
        </h2>
        <h3 className="text-2xl md:text-5xl font-bold text-monochrome text-center mb-3">
          Delivering innovative HR solutions that exceed expectations
        </h3>
      </div>
      <div className="flex justify-center items-center w-full">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          slidesPerView={1}
          spaceBetween={20}
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{ delay: 5000 }}
          observeParents={true}
          observer={true}
          breakpoints={{
            480: {
              slidesPerView: 1,
              spaceBetween: 80,
              centeredSlides: true,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 240,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 80,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 80,
            },
            1300: {
              slidesPerView: 2,
              spaceBetween: 80,
            },
            1536: {
              slidesPerView: 2,
              spaceBetween: 100,
            },
          }}
          className="flex justify-center items-center flex-row w-full"
        >
          {[...testimonials, ...testimonials].map((testimony, index) => (
            <SwiperSlide key={index} className="">
              <div className="pt-20 pb-16">
                <Testimonial key={testimony.id} testimony={testimony} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
