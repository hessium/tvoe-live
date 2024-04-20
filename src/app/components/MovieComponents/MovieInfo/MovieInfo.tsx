"use client";
import React from "react";
import cl from "@/app/components/MovieComponents/MovieInfo/MovieInfo.module.scss";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';

export default function MovieInfo() {
    interface Tabs {
        id: number,
        name: string,
        desc: string,
        active: boolean,
    }

    const tabs: Array<Tabs> = [
        {
            id: 1,
            name: 'Описание',
            desc:'Прекрасная планета Пандорра по-прежнему похожа  на рай, где нашел себе приют бывший солдат Салли. ' +
                'Подрастают дети его нового народа, они играют  на морских рифах и ' +
                'в подводном царстве. Кроме подростков на’ви на Пандорре растет и земной ребенок Джек Чемпион. ' +
                'Воскресают те, кто умер в былых сражениях: героиня Сигурни Уивер и зловещий полковник. ' +
                'Наконец, и земные корпорации снова предъявляют свои права на богатства Пандорры. ' +
                'Независимость фантастического первобытного рая придется отстаивать всем, кто его населяет',
            active: true,
        },
        {
            id: 2,
            name: 'Съемочная группа',
            desc:'Прекрасная планета Пандорра по-прежнему похожа  на рай, где нашел себе приют бывший солдат Салли. ' +
                'Подрастают дети его нового народа, они играют  на морских рифах и ' +
                'в подводном царстве. Кроме подростков на’ви на Пандорре растет и земной ребенок Джек Чемпион. ' +
                'Воскресают те, кто умер в былых сражениях: героиня Сигурни Уивер и зловещий полковник. ' +
                'Наконец, и земные корпорации снова предъявляют свои права на богатства Пандорры. ' +
                'Независимость фантастического первобытного рая придется отстаивать всем, кто его населяет',
            active: false,
        },
        {
            id: 3,
            name: 'Информация',
            desc:'Прекрасная планета Пандорра по-прежнему похожа  на рай, где нашел себе приют бывший солдат Салли. ' +
                'Подрастают дети его нового народа, они играют  на морских рифах и ' +
                'в подводном царстве. Кроме подростков на’ви на Пандорре растет и земной ребенок Джек Чемпион. ' +
                'Воскресают те, кто умер в былых сражениях: героиня Сигурни Уивер и зловещий полковник. ' +
                'Наконец, и земные корпорации снова предъявляют свои права на богатства Пандорры. ' +
                'Независимость фантастического первобытного рая придется отстаивать всем, кто его населяет',
            active: false,
        },
    ]


    return (
        <div className={cl.info}>
            <Swiper className={cl.infoList}
                    spaceBetween={16}
                    slidesPerView='auto'
                    breakpoints={{
                        600: {
                            spaceBetween: 24
                        }
                    }}
            >
                {tabs.map((item) =>
                    <SwiperSlide
                        className={cl.infoListSlide}
                        key={item.id}>
                        <div className={`${cl.infoItem} ${item.active ? cl.infoActive : ''}`}  >
                            {item.name}
                        </div>
                    </SwiperSlide>
                )}
            </Swiper>
            <div>
                {tabs.map((item) =>
                    <div key={item.id} className={`${cl.infoDesc} ${item.active ? cl.infoShow : ''}`}>
                        {item.desc}
                    </div>
                )}
            </div>
            <div className={cl.infoDisclamare}>
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.8093 44C26.4153 44.0034 28.9962 43.4876 31.4038 42.4823C33.8114 41.477 35.9982 40.002 37.8385 38.142C39.6836 36.2869 41.1469 34.0826 42.1442 31.6556C43.1415 29.2287 43.6532 26.627 43.6498 24C43.6531 21.3731 43.1414 18.7714 42.1441 16.3444C41.1468 13.9175 39.6836 11.7131 37.8385 9.85802C35.9982 7.99804 33.8114 6.52302 31.4038 5.5177C28.9962 4.51239 26.4153 3.99661 23.8093 4.00002C21.2033 3.99667 18.6224 4.51247 16.2148 5.51778C13.8072 6.52309 11.6204 7.99809 9.78005 9.85802C7.93496 11.7131 6.47172 13.9175 5.47443 16.3444C4.47713 18.7714 3.96544 21.3731 3.96877 24C3.96539 26.627 4.47705 29.2287 5.47435 31.6556C6.47165 34.0826 7.93491 36.2869 9.78005 38.142C11.6204 40.0019 13.8072 41.4769 16.2148 42.4823C18.6224 43.4876 21.2033 44.0034 23.8093 44Z" stroke="#4B4B4B" strokeWidth="4" strokeLinejoin="round"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M23.8082 37C24.4659 37 25.0968 36.7366 25.5619 36.2678C26.027 35.7989 26.2883 35.163 26.2883 34.5C26.2883 33.837 26.027 33.2011 25.5619 32.7322C25.0968 32.2634 24.4659 32 23.8082 32C23.1504 32 22.5196 32.2634 22.0545 32.7322C21.5894 33.2011 21.3281 33.837 21.3281 34.5C21.3281 35.163 21.5894 35.7989 22.0545 36.2678C22.5196 36.7366 23.1504 37 23.8082 37Z" fill="#4B4B4B"/>
                    <path d="M23.8086 12V28" stroke="#4B4B4B" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p>
                    Контент может содержать сцены курения и употребления спиртных напитков. Курение и чрезмерное употребление алкоголя вредит вашему здоровью.
                </p>
            </div>
        </div>
    )
}