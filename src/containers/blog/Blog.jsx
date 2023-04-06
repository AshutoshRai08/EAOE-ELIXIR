import React, { useState } from 'react';
import { Scrollbar, A11y , Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import './blog.scss';
import 'swiper/swiper.min.css';
import data from './imports';

const Blog = () => {

    const [dataBlock] = useState({
        subtitle: 'Our team',
        title: 'Meet our TEAM',
        desc: 'Who we are',
        text: 'Purus, laoreet dui augue ut euismod. Elementum ante sociis volutpat tellus enim, nisl consectetur mauris. Venenatis congue id quis eget viverra. Vestibulum, justo, euismod congue feugiat eget fames gravida posuere.'
    })

    return (
        <section className="tf-section tf-team">
            <div className="container">
                <div className="row">
                    <div className="team-description">
                        <div className="tf-title st2 mb-61" data-aos="fade-up" data-aos-duration="800">
                            <p className="h8 sub-title">{dataBlock.subtitle}</p>
                            <h4 className="title">{dataBlock.title}</h4>
                        </div>
                        <div className="content mobie-30" data-aos="fade-up" data-aos-duration="800">
                            <div className="h7 txt-tranf-cap m-b16">
                                {dataBlock.desc}
                            </div>
                            <p>{dataBlock.text}</p>
                        </div>
                    </div>
                    <div className="team-details"> 
                        <div className="wrap-team" data-aos="fade-up" data-aos-duration="800">
                            <Swiper
                                modules={[ Navigation , Scrollbar, A11y ]}
                                    spaceBetween={30}
        
                                    breakpoints={{
                                        0: {
                                            slidesPerView: 2,
                                            },
                                        767: {
                                            slidesPerView: 1,
                                        },
                                        991: {
                                            slidesPerView: 3,
                                        },
                                    }}
                                    // navigation
                                    scrollbar={{ draggable: true }}
                                >
                                {
                                    data.map(item => (
                                        <SwiperSlide key={item.id}>
                                            <div className="team-box">
                                                <div className="image">
                                                    <img src={item.img} alt="Elixer" />
                                                </div>
                                                <div className="content">
                                                    <div className="h8"><a href="/team-details">{item.name}</a></div>
                                                    <p>{item.position}</p>
                                                    <ul className="social">
                                                        {
                                                            item.listsocial.map(icon => (
                                                                <li key={icon.id}>
                                                                    <Link to={icon.link}><i className={icon.icon}></i></Link>
                                                                </li>
                                                            ))
                                                        }
                                                    </ul>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Blog;
