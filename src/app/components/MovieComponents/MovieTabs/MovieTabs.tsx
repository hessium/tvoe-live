"use client";
import React from "react";
import cl from "@/app/components/MovieComponents/MovieTabs/MovieTabs.module.scss";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import Link from "next/link";
import Image, {StaticImageData} from "next/image";
import movie from "@/app/assets/img/serial.png";


export default function MovieTabs() {
    interface Tabs {
        id: number,
        name: string,
        active: boolean,
    }
    interface Movies {
        id: number,
        name: string,
        watching: string,
        time: string,
        image: StaticImageData,
    }
    const tabs: Array<Tabs> = [
        {
            id: 1,
            name: 'Трейлер',
            active: false,
        },
        {
            id: 2,
            name: '1 сезон',
            active: true,
        },
        {
            id: 3,
            name: '2 сезон',
            active: false,
        },
        {
            id: 4,
            name: '3 сезон',
            active: false
        },
        {
            id: 5,
            name: '4 сезон',
            active: false
        },
    ]
    const movies: Array<Movies> = [
        {
            id: 1,
            name: '1 серия',
            watching: "просмотренно",
            time: "43:54",
            image: movie,
        },
        {
            id: 2,
            name: '2 серия',
            watching: "просмотренно",
            time: "43:54",
            image: movie,
        },
        {
            id: 3,
            name: '3 серия',
            watching: "просмотренно",
            time: "43:54",
            image: movie,
        },
        {
            id: 4,
            name: '4 серия',
            watching: "не просмотренно",
            time: "43:54",
            image: movie,
        },
        {
            id: 5,
            name: '5 серия',
            watching: "не просмотренно",
            time: "43:54",
            image: movie,
        },
    ]
    return (
        <div className={cl.tabs}>
            <Swiper className={cl.tabsList}
                    spaceBetween={12}
                    slidesPerView='auto'
            >
                {tabs.map((item) =>
                       <SwiperSlide
                           className={cl.tabsListSlide}
                           key={item.id}>
                           <Link className={`${cl.tabsItem} ${item.active ? cl.tabsActive : ''}`} href="#" >
                               {item.name}
                           </Link>
                       </SwiperSlide>
                   )}
            </Swiper>

            <Swiper className={cl.tabsSwiper}
                    spaceBetween={16}
                    slidesPerView="auto"
                    breakpoints={{
                        600: {
                            spaceBetween: 20,
                        },
                    }}
            >
                {movies.map((item) => <SwiperSlide
                    className={cl.tabsSwiperSlide}
                    key={item.id}>
                    <Link href="#">
                        <div className={cl.tabsSwiperImage}>
                            <Image
                                src={item.image}
                                alt={item.name}
                                fill
                            />
                            <div className={cl.tabsSwiperTime}>
                                {item.time}
                            </div>
                        </div>
                        <div className={cl.tabsSwiperName}>
                            {item.name}
                        </div>
                        <div className={cl.tabsSwiperWatch}>
                            {item.watching}
                        </div>
                    </Link>
                </SwiperSlide>)}
            </Swiper>
        </div>
    )
}