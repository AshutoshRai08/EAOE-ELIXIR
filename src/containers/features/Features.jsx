import React from 'react';
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Feature from '../../components/feature/Feature';
import data from './imports';
import './features.scss';

const Features = () => {

  SwiperCore.use([Autoplay]);

  return (
    <section className="tf-section tf-project">
      <div className="container-fluid">
        <Swiper
            className='swiper-portfolio s1'
            spaceBetween={30}
            breakpoints={{
                0: {
                    slidesPerView: 2,
                    },
                767: {
                    slidesPerView: 3,
                },
                991: {
                    slidesPerView: 5,
                },
            }}
            loop
            autoplay={{
                delay: 1,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            }}
            speed= {2000}
        >
            {
                data.map(item => (
                    <SwiperSlide key={item.id}>
                        <Feature item={item} />
                    </SwiperSlide>
                ))
            }
  
        </Swiper>
  
        <Swiper
            className='swiper-portfolio s1 mt-30'
            modules={[ Autoplay ]}
            spaceBetween={30}
            breakpoints={{
                0: {
                    slidesPerView: 2,
                    },
                767: {
                    slidesPerView: 3,
                },
                991: {
                    slidesPerView: 5,
                },
            }}
            loop
            autoplay={{
                delay: 1,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
                reverseDirection: true,
            }}
            speed= {2000}
        >
            {
                data.map(item => (
                    <SwiperSlide key={item.id}>
                        <Feature item={item} />
                    </SwiperSlide>
                ))
            }
        </Swiper>
      </div>
    </section>
  );
}

export default Features;
