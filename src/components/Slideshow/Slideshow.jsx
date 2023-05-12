import React from 'react'
import './style.css'
import { MovieSlide } from '../MovieSlide/MovieSlide';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const Slideshow = ({ slides }) => {

  return (
    <div className='px-2 py-5'>
      <Swiper
        modules={[Autoplay, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >

      { slides && slides.length > 0 && slides.map((slide) => (
        <SwiperSlide key={slide.id}>
            <MovieSlide slide={slide} />
        </SwiperSlide>
      ))}
      </Swiper>
    </div>
  )
}