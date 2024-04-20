"use client";
import React from 'react';
import cl from './NewList.module.scss'
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import Link from "next/link";
import Image, {StaticImageData} from "next/image";
import movie1 from '@/app/assets/img/movie1.png'
import movie2 from '@/app/assets/img/movie2.png'
import movie3 from '@/app/assets/img/movie3.png'
import movie4 from '@/app/assets/img/movie4.png'

export default function NewList(props: {name: string}) {

    interface Movies {
        id: number,
        name: string,
        tags?: string,
        rating: number,
        years: number,
        time: string,
        image: StaticImageData,
    }

    const movies: Array<Movies> = [
        {
            id: 1,
            name: 'На грани',
            rating: 10,
            tags: '',
            years: 2022,
            time: "2 часа 37 мин",
            image: movie1,
        },
        {
            id: 2,
            name: '8 подруг Оушена',
            rating: 6.9,
            tags: '',
            years: 2022,
            time: "2 часа 37 мин",
            image: movie2
        },
        {
            id: 3,
            name: 'Нэнси Дрю',
            rating: 5.8,
            tags: 'Новый сезон',
            years: 2022,
            time: "2 часа 37 мин",
            image: movie3
        },
        {
            id: 4,
            name: 'На западном фронте без перемен',
            rating: 7.0,
            tags: 'Премьера',
            years: 2022,
            time: "2 часа 37 мин",
            image: movie4
        },
        {
            id: 5,
            name: 'На западном фронте без перемен',
            rating: 7.0,
            tags: '',
            years: 2022,
            time: "2 часа 37 мин",
            image: movie4
        },
        {
            id: 6,
            name: 'На западном фронте без перемен',
            rating: 7.0,
            tags: '',
            years: 2022,
            time: "2 часа 37 мин",
            image: movie4
        },
        {
            id: 7,
            name: 'На западном фронте без перемен',
            rating: 7.0,
            tags: '',
            years: 2022,
            time: "2 часа 37 мин",
            image: movie4
        },
        {
            id: 8,
            name: 'На западном фронте без перемен',
            rating: 7.0,
            tags: '',
            years: 2022,
            time: "2 часа 37 мин",
            image: movie4
        },
        {
            id: 9,
            name: 'На западном фронте без перемен',
            rating: 7.0,
            tags: '',
            years: 2022,
            time: "2 часа 37 мин",
            image: movie4
        },
        {
            id:10,
            name: 'На западном фронте без перемен',
            rating: 7.0,
            tags: '',
            years: 2022,
            time: "2 часа 37 мин",
            image: movie4
        },
    ]

    return (
        <div className={cl.new}>
            <h2>{props.name}</h2>
            <Swiper className={cl.newSwiper}
                    spaceBetween={8}
                    slidesPerView="auto"
                    breakpoints={{
                        600: {
                            spaceBetween: 20
                        }
                    }}
            >
                {movies.map((item) => <SwiperSlide
                    className={cl.newSwiperSlide}
                    key={item.id}>
                    <Link href={`/movie/${item.id}`}>
                        <div className={cl.newSwiperInfo}>
                            <div className={cl.newSwiperRaiting}>{item.rating}</div>
                            {item.tags ? <div className={cl.newSwiperTag}>{item.tags}</div> : <></>}
                        </div>
                        <div className={cl.newSwiperImage}>
                            <Image src={item.image} alt={item.name}/>
                        </div>
                        <div className={cl.newText}>
                            <div className={cl.newName}>{item.name}</div>
                            <div><span className={cl.newYears}>{item.years}</span><span className={cl.newTime}>, {item.time}</span></div>
                        </div>
                    </Link>
                </SwiperSlide>)}
            </Swiper>
        </div>
    )
}