"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import resources from "../../data/resources";
import styles from "./ResourceCarousel.module.css";
import Button from "@/components/Button";
import Link from "next/link";

const Resources = () => {
  return (
    <div className="">
      <div className=" ">
        {" "}
        <div className=" text-white mx-7 md:mx-20 ">
          <h2 className="text-5xl md:text-7xl w-4/5 md:w-2/5 font-bold ">
            Empower Your Ideas with <p>the Best</p>
            <div className="bg-gradient-to-r  w-0 text-8=2xl  inline text-transparent bg-clip-text from-[#69eff9] to-[#1818be]">
              Resources!
            </div>
          </h2>
          <p className="text-lg text-gray-400 my-7">
            Your Go-To Hub for Project Success!
          </p>

          <Button className=" border rounded-2xl  shadow-[#2A0E61]/100 hover:bg-[#4795e0] ease-in transition-colors  border-[#1818be]">
            <Link href="/resources">Explore more Resources</Link>
          </Button>
        </div>
      </div>
      <div className="">
        <div className={styles.carouselContainer}>
          <Swiper
            speed={5000}
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={3}
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {resources.map((resource) => (
              <SwiperSlide key={resource.id}>
                <div className={styles.card}>
                  <img
                    src={resource.image}
                    alt={resource.title}
                    className={styles.image}
                  />
                  <div className={styles.content}>
                    <h3 className={styles.title}>{resource.title}</h3>
                    <p className={styles.description}>{resource.description}</p>
                    <a href={resource.link} className={styles.link}>
                      <Button className="border border-gray-500 rounded-xl hover:bg-blue-800 hover:text-white">
                        Learn Now
                      </Button>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className=""></div>
    </div>
  );
};

export default Resources;
