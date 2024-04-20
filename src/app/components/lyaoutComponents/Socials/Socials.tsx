import cl from "@/app/components/lyaoutComponents/Socials/Socials.module.scss";
import Image from 'next/image';
import Tg from "@/app/assets/img/tg.svg";
import Vk from "@/app/assets/img/vk.svg";
import Youtube from "@/app/assets/img/youtube.svg";


export default function Socials() {
    return (
            <ul className={cl.socials}>
                <li>
                    <a  href="https://www.youtube.com" target="_blank">
                        <span>Youtube</span>
                        <Image
                            alt="Youtube icon"
                            src={Youtube}
                            fill={false}
                            quality={100}
                        />
                    </a>
                </li>
                <li>
                    <a href="@/app/components/lyaoutComponents/Socials/Socials" target="_blank">
                        <span>ВКонтакте</span>
                        <Image
                            alt="Youtube icon"
                            src={Vk}
                            fill={false}
                            quality={100}
                        />
                    </a>
                </li>
                <li>
                    <a href="@/app/components/lyaoutComponents/Socials/Socials" target="_blank">
                        <span>Telegram</span>
                        <Image
                            alt="Youtube icon"
                            src={Tg}
                            fill={false}
                            quality={100}
                        />
                    </a>
                </li>
            </ul>
    )
};
