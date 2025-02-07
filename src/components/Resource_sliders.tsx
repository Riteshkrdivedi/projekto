"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import resources from "../data/resources_all";
import styles from "../app/parts/ResourceCarousel.module.css";
import Button from "@/components/Button";

// Fisher-Yates shuffle algorithm
const shuffleArray = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const Resources = () => {
  const shuffledResources = shuffleArray([...resources]);

  return (
    <div className="">
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
            {shuffledResources.map((resource) => (
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
