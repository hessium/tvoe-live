import cl from '@/app/components/HomeComponents/Banner/Banner.module.scss'
import Image, {StaticImageData} from "next/image";
import BannerImg from '@/app/assets/img/banner.png';
import like from '@/app/assets/img/like.svg';
import star from '@/app/assets/img/star.svg';
import movie from '@/app/assets/img/movie.svg';
import device from '@/app/assets/img/device.svg';
import CustomButton from "@/app/components/UI/CustomButton/CustomButton";

interface Benefits {
    id: number,
    text: string,
    icon: StaticImageData,
}
const benefits: Array<Benefits> = [
    {
        id: 1,
        text: 'От 149 ₽ в месяц',
        icon:  like
    },
    {
        id: 2,
        text: 'Доступно на любом устройстве',
        icon:  device
    },
    {
        id: 3,
        text: 'Никакой рекламы',
        icon:  movie
    },
    {
        id: 4,
        text: 'Единая подписка без доплат',
        icon:  star
    },
]

export const Banner = (props: {name: string}) => {
    return (
        <div className={cl.banner}>
            <div className={cl.bannerContent}>
                <h2>{props?.name}</h2>
                <ul className={cl.bannerList}>
                    {benefits.map((item) =>
                        <li key={item.id}>
                            <div className={cl.bannerIcon}><Image src={item.icon} alt="banner"/> </div>
                            <span>{item.text}</span>
                        </li>
                    )}
                </ul>
               <div className={cl.bannerBtn}>
                   <CustomButton
                       background={'linear-gradient(90deg, #6A11CB 0%, #2575FC 100%)'}
                       filter={'blur(0)'}
                       color={'white'}
                       padding={'14px 20px'}
                       radius={'12px'}
                   >
                       Смотреть 7 дней за 0₽
                   </CustomButton>
               </div>
            </div>
            <div className={cl.bannerImage}>
                <Image src={BannerImg} alt="banner" quality={100}/>
            </div>
        </div>
    )
}

