import Image from 'next/image';
import styles from "@/app/page.module.css";
import cl from "@/app/components/HomeComponents/Hero/Hero.module.scss";
import Background from "@/app/assets/img/hero-banner.png";
import Name from "@/app/assets/img/name.svg";
import Link from 'next/link';
import CustomButton from "@/app/components/UI/CustomButton/CustomButton";

export default function Hero() {
    return (
        <section className={cl.hero}>
            <div className={cl.heroBg}>
                <Image
                    alt="Аватар легенда"
                    src={Background}
                    fill={true}
                    quality={100}
                />
            </div>
            <div className={styles.container}>
                <div className={cl.heroName}>
                    <Image
                        alt="Аватар легенда об Аанге"
                        src={Name}
                        quality={100}
                    />
                </div>
                <div className={cl.heroTags}>
                    <div className={cl.heroRate}>7,9</div>
                    <div className={cl.heroYears}>2024</div>
                    <div className={cl.heroGenre}>Фентези</div>
                    <div className={cl.heroCountry}>США</div>
                    <div className={cl.heroAgeRate}>16+</div>
                </div>
                <div className={cl.heroActions}>
                    <Link href={`/movie/1`} className={cl.heroLink}>Подробнее</Link>
                    <CustomButton
                        background={'linear-gradient(180deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.13) 50%, rgba(255, 255, 255, 0.10) 100%)'}
                        filter={'blur(10px)'}
                        color={'white'}
                        padding={'14px 20px'}
                        radius={'16px'}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 2H6C4.897 2 4 2.897 4 4V22L12 17.428L20 22V4C20 2.897 19.103 2 18 2ZM18 18.553L12 15.125L6 18.553V4H18V18.553Z" fill="#BABABA"/>
                        </svg>
                    </CustomButton>

                    <CustomButton
                        background={'linear-gradient(180deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.13) 50%, rgba(255, 255, 255, 0.10) 100%)'}
                        filter={'blur(10px)'}
                        color={'white'}
                        padding={'14px 20px'}
                        radius={'16px'}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.2806 9.97033L14.7806 2.47033C14.6757 2.36538 14.5421 2.29387 14.3967 2.26486C14.2512 2.23584 14.1004 2.25061 13.9633 2.30731C13.8262 2.36401 13.709 2.46008 13.6265 2.58339C13.5441 2.70669 13.5 2.85168 13.4999 3.00002V6.78283C11.0681 6.99096 8.38213 8.18158 6.17244 10.0556C3.51182 12.3131 1.85526 15.2222 1.50744 18.2466C1.48026 18.4817 1.52794 18.7194 1.64368 18.9259C1.75943 19.1324 1.93735 19.2971 2.15212 19.3966C2.36689 19.496 2.60757 19.5253 2.83991 19.48C3.07225 19.4348 3.28441 19.3175 3.44619 19.1447C4.47744 18.0469 8.14682 14.5753 13.4999 14.2697V18C13.5 18.1484 13.5441 18.2934 13.6265 18.4167C13.709 18.54 13.8262 18.636 13.9633 18.6927C14.1004 18.7494 14.2512 18.7642 14.3967 18.7352C14.5421 18.7062 14.6757 18.6347 14.7806 18.5297L22.2806 11.0297C22.4208 10.8891 22.4996 10.6986 22.4996 10.5C22.4996 10.3014 22.4208 10.1109 22.2806 9.97033ZM14.9999 16.1897V13.5C14.9999 13.3011 14.9209 13.1103 14.7803 12.9697C14.6396 12.829 14.4489 12.75 14.2499 12.75C11.6174 12.75 9.05338 13.4372 6.629 14.7938C5.39427 15.4877 4.24383 16.322 3.20057 17.28C3.74432 15.045 5.11494 12.9197 7.14276 11.1994C9.31963 9.35346 11.9765 8.25002 14.2499 8.25002C14.4489 8.25002 14.6396 8.171 14.7803 8.03035C14.9209 7.8897 14.9999 7.69893 14.9999 7.50002V4.81127L20.6896 10.5L14.9999 16.1897Z" fill="#BABABA"/>
                        </svg>
                    </CustomButton>
                    <CustomButton
                        background={'linear-gradient(180deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.13) 50%, rgba(255, 255, 255, 0.10) 100%)'}
                        filter={'blur(10px)'}
                        color={'white'}
                        padding={'14px 20px'}
                        radius={'16px'}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 4.59499C10.9104 3.59309 9.48419 3.03703 8.00398 3.03699C7.22052 3.0378 6.44495 3.19355 5.72192 3.49526C4.99888 3.79696 4.34265 4.23868 3.79098 4.79499C1.43798 7.15799 1.43898 10.854 3.79298 13.207L11.125 20.539C11.295 20.838 11.623 21.031 12 21.031C12.1548 21.0295 12.3071 20.9917 12.4446 20.9207C12.5822 20.8496 12.7011 20.7473 12.792 20.622L20.207 13.207C22.561 10.853 22.561 7.15799 20.205 4.79099C19.6536 4.2357 18.9979 3.79488 18.2756 3.49387C17.5532 3.19286 16.7785 3.03759 15.996 3.03699C14.5158 3.03723 13.0897 3.59326 12 4.59499ZM18.791 6.20499C20.354 7.77599 20.355 10.23 18.793 11.793L12 18.586L5.20698 11.793C3.64498 10.23 3.64598 7.77599 5.20498 6.20899C5.96498 5.45299 6.95898 5.03699 8.00398 5.03699C9.04898 5.03699 10.039 5.45299 10.793 6.20699L11.293 6.70699C11.3858 6.79993 11.496 6.87367 11.6173 6.92398C11.7386 6.97429 11.8686 7.00019 12 7.00019C12.1313 7.00019 12.2614 6.97429 12.3827 6.92398C12.504 6.87367 12.6142 6.79993 12.707 6.70699L13.207 6.20699C14.719 4.69799 17.281 4.70199 18.791 6.20499Z" fill="#BABABA"/>
                        </svg>
                    </CustomButton>
                </div>
            </div>
        </section>
    )
};