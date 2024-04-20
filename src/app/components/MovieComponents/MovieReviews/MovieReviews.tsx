"use client";
import React from "react";
import cl from "@/app/components/MovieComponents/MovieReviews/MovieReviews.module.scss";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import CustomButton from "@/app/components/UI/CustomButton/CustomButton";

export default function MovieReviews() {

    interface Reviews {
        id: number,
        name: string,
        time: string,
        raiting: number,
        text: string,
    }

    const movies: Array<Reviews> = [
        {
            id: 1,
            name: 'Николай',
            time:'10 Мая 2023',
            raiting: 9,
            text: "Как по мне, обсуждать качество сериала довольно глупо. Субъективно для меня — оно очевидно плохого уровня. Это ни капельки не похоже на Ведьмака, к которому мы привыкли в играх и книгах. Отсутствие оригинальности в сюжете и персонажах делает сериал предсказуемым и скучным. В общем, «Ведьмак» - это просто пустая траты времени и потерянный потенциал. Я разочарован и не рекомендую этот сериал никому.",
        },
        {
            id: 2,
            name: 'Николай',
            time:'10 Мая 2023',
            raiting: 9,
            text: "Как по мне, обсуждать качество сериала довольно глупо. Субъективно для меня — оно очевидно плохого уровня. Это ни капельки не похоже на Ведьмака, к которому мы привыкли в играх и книгах. Отсутствие оригинальности в сюжете и персонажах делает сериал предсказуемым и скучным. В общем, «Ведьмак» - это просто пустая траты времени и потерянный потенциал. Я разочарован и не рекомендую этот сериал никому.",
        },
        {
            id: 3,
            name: 'Николай',
            time:'10 Мая 2023',
            raiting: 9,
            text: "Как по мне, обсуждать качество сериала довольно глупо. Субъективно для меня — оно очевидно плохого уровня. Это ни капельки не похоже на Ведьмака, к которому мы привыкли в играх и книгах. Отсутствие оригинальности в сюжете и персонажах делает сериал предсказуемым и скучным. В общем, «Ведьмак» - это просто пустая траты времени и потерянный потенциал. Я разочарован и не рекомендую этот сериал никому.",
        },
        {
            id: 4,
            name: 'Николай',
            time:'10 Мая 2023',
            raiting: 9,
            text: "Как по мне, обсуждать качество сериала довольно глупо. Субъективно для меня — оно очевидно плохого уровня. Это ни капельки не похоже на Ведьмака, к которому мы привыкли в играх и книгах. Отсутствие оригинальности в сюжете и персонажах делает сериал предсказуемым и скучным. В общем, «Ведьмак» - это просто пустая траты времени и потерянный потенциал. Я разочарован и не рекомендую этот сериал никому.",
        },
        {
            id: 5,
            name: 'Николай',
            time:'10 Мая 2023',
            raiting: 9,
            text: "Как по мне, обсуждать качество сериала довольно глупо. Субъективно для меня — оно очевидно плохого уровня. Это ни капельки не похоже на Ведьмака, к которому мы привыкли в играх и книгах. Отсутствие оригинальности в сюжете и персонажах делает сериал предсказуемым и скучным. В общем, «Ведьмак» - это просто пустая траты времени и потерянный потенциал. Я разочарован и не рекомендую этот сериал никому.",
        },
        {
            id: 6,
            name: 'Николай',
            time:'10 Мая 2023',
            raiting: 9,
            text: "Как по мне, обсуждать качество сериала довольно глупо. Субъективно для меня — оно очевидно плохого уровня. Это ни капельки не похоже на Ведьмака, к которому мы привыкли в играх и книгах. Отсутствие оригинальности в сюжете и персонажах делает сериал предсказуемым и скучным. В общем, «Ведьмак» - это просто пустая траты времени и потерянный потенциал. Я разочарован и не рекомендую этот сериал никому.",
        },

    ]
    return (
        <div className={cl.reviews}>
            <div className={cl.reviewsTitle}>
                <span>Рейтинг TVOЁ 8.4</span>
                <CustomButton
                    background={'transparent'}
                    filter={'0'}
                    color={'rgba(188, 136, 255, 1)'}
                    padding={'0'}
                    radius={'0'}
                >
                    Поставить оценку
                </CustomButton>
            </div>
            <h2>
                <span>Отзывы </span>
                <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.9427 24.1093L20.552 16.5L12.9427 8.89062L11.0574 10.776L16.7814 16.5L11.0574 22.224L12.9427 24.1093Z" fill="white"/>
                </svg>
            </h2>
            <Swiper className={cl.reviewsSwiper}
                    spaceBetween={8}
                    slidesPerView="auto"
                    breakpoints={{
                        600: {
                            spaceBetween: 20,
                        },
                    }}
            >
                {movies.map((item) =>
                    <SwiperSlide className={cl.reviewsSwiperSlide}
                        key={item.id}>
                        <div className={cl.reviewsHeader}>
                            <div>
                                <div className={cl.reviewsName}>
                                    {item.name}
                                </div>
                                <div className={cl.reviewsTime}>
                                    {item.time}
                                </div>
                            </div>
                            <div className={cl.reviewsRate}>
                                {item.raiting}
                            </div>
                        </div>
                        <div className={cl.reviewsText}>
                           <p>
                               {item.text}
                           </p>
                        </div>
                        <CustomButton
                            background={'transparent'}
                            filter={'0'}
                            color={'rgba(255, 255, 255, 0.3)'}
                            padding={'0'}
                            radius={'0'}
                        >
                            Читать дальше
                        </CustomButton>
                    </SwiperSlide>)}
            </Swiper>
        </div>
    )
}