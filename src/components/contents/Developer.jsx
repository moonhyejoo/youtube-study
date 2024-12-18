import React, { useEffect, useState } from "react"

import { Link } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Developer = ({ id, title, videos }) => {

    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 500)
    }, [])

    const developerClass = loading ? "isLoading" : "isLoaded";


    return (
        <section id={id} className={developerClass}>
            <h2>{title}</h2>
            <div className="developer-inner">
                <Swiper
                    slidesPerView={4}
                    spaceBetween={15}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    // pagination={{
                    //     clickable: true,
                    // }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className={`mySwiper`}
                    breakpoints={{
                        640: {
                            slidesPerView: 5,
                            spaceBetween: 15
                        },
                        768: {
                            slidesPerView: 6,
                            spaceBetween: 15
                        },
                        1024: {
                            slidesPerView: 7,
                            spaceBetween: 15
                        },
                        1240: {
                            slidesPerView: 8,
                            spaceBetween: 15
                        }

                    }}
                >
                    {videos.map((developer, key) => (
                        <SwiperSlide key={key}>
                            <div className="developer" key={key}>
                                <div className="developer-img play-icon">
                                    <Link to={`/channel/${developer.channelId}`}>
                                        <img src={developer.img} alt={developer.name} />
                                    </Link>
                                </div>
                                <div className="developer-info">
                                    <Link to={`/channel/${developer.channelId}`}>
                                        {developer.name}
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>

                    ))}
                </Swiper>

            </div>
        </section>
    )
}

export default Developer
