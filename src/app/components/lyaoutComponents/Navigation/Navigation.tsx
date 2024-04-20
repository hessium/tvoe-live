"use client";
import Link from 'next/link';
import Image from 'next/image';
import cl from "@/app/components/lyaoutComponents/Navigation/Navigation.module.scss";
import Home from "@/app/assets/img/home.svg";
import TV from "@/app/assets/img/canals.svg";
import Favorite from "@/app/assets/img/favorite.svg";
import Serial from "@/app/assets/img/serial.svg";
import Movie from "@/app/assets/img/nav-movie.svg";
import useMediaQueries from "@/app/utils";

const Navigation = () => {
    const { md } = useMediaQueries();
    return (
        <div className={cl.navigation}>
            {md ? <Link href="/Users/hessi/PhpstormProjects/tvoe-live/public" className={cl.btn}>Попробовать бесплатно</Link>
                : <></>}
            <nav className={cl.wrapper}>
                <ul>
                    <li >
                        <Link href='/Users/hessi/PhpstormProjects/tvoe-live/public'>
                            <div className={`${cl.bg} ${cl.active}`}>
                            </div>
                            <Image
                                alt="home icon"
                                src={Home}
                                fill={false}
                                quality={100}
                            />
                            <span>Главная</span>
                        </Link>
                    </li>
                    <li >
                        <Link href='/Users/hessi/PhpstormProjects/tvoe-live/public'>
                            <div className={`${cl.bg}`}>
                            </div>
                            <Image
                                alt="Movie icon"
                                src={Movie}
                                fill={false}
                                quality={100}
                            />
                            <span>Сериалы</span>
                        </Link>
                    </li>
                    <li >
                        <Link href='/Users/hessi/PhpstormProjects/tvoe-live/public'>
                            <div className={`${cl.bg}`}>
                            </div>
                            <Image
                                alt="Serial icon"
                                src={Serial}
                                fill={false}
                                quality={100}
                            />
                            <span>Главная</span>
                        </Link>
                    </li>
                    <li >
                        <Link href='/Users/hessi/PhpstormProjects/tvoe-live/public'>
                            <div className={`${cl.bg}`}>
                            </div>
                            <Image
                                alt="TV icon"
                                src={TV}
                                fill={false}
                                quality={100}
                            />
                            <span>ТВ каналы</span>
                        </Link>
                    </li>
                    <li >
                        <Link href='/Users/hessi/PhpstormProjects/tvoe-live/public'>
                            <div className={`${cl.bg}`}>
                            </div>
                            <Image
                                alt="Favorite icon"
                                src={Favorite}
                                fill={false}
                                quality={100}
                            />
                            <span>Моё</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default Navigation
