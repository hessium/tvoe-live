"use client"
import cl from "@/app/components/HomeComponents/TopList/TopList.module.scss";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import Link from 'next/link';
import movie1 from '@/app/assets/img/movie1.png';
import movie2 from '@/app/assets/img/movie2.png';
import movie3 from '@/app/assets/img/movie3.png';
import movie4 from '@/app/assets/img/movie4.png';
import one from '@/app/assets/img/1.svg';
import two from '@/app/assets/img/2.svg';
import three from '@/app/assets/img/3.svg';
import Image, {StaticImageData} from "next/image";

export default function TopList(props: {name: string}) {

    interface MoviesWatching {
        id: number,
        rating: StaticImageData,
        image: StaticImageData,
    }

    const movies: Array<MoviesWatching> = [
        {
            id: 1,
            rating: one,
            image: movie1
        },
        {
            id: 2,
            rating: two,
            image: movie2
        },
        {
            id: 3,
            rating: three,
            image: movie3
        },
        {
            id: 4,
            rating: three,
            image: movie4
        },
        {
            id: 5,
            rating: three,
            image: movie4
        },
        {
            id: 6,
            rating: three,
            image: movie4
        },
        {
            id: 7,
            rating: three,
            image: movie4
        },
        {
            id: 8,
            rating: three,
            image: movie4
        },
        {
            id: 9,
            rating: three,
            image: movie4
        },
        {
            id: 10,
            rating: three,
            image: movie4
        },
    ]

    return (
        <div className={cl.top}>
            <h2>{props.name}</h2>
            <Swiper className={cl.topSwiper}
                    spaceBetween={15}
                    slidesPerView="auto"
                    breakpoints={{
                        600: {
                            spaceBetween: 20
                        }
                    }}
            >
                {movies.map((item) => <SwiperSlide
                    className={cl.topSwiperSlide}
                    key={item.id}>
                    <Link className={cl.topSwiperSlideLink} href={`/movie/${item.id}`}>
                        <div className={`${cl.topSwiperRaiting}`}><Image src={item.rating} alt="image"/></div>
                        <div className={cl.topSwiperImage}><Image src={item.image} alt="image"/></div>
                    </Link>
                </SwiperSlide>)}
            </Swiper>
        </div>
    )
};