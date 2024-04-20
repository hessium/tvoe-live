"use client"
import styles from "@/app/page.module.css";
import cl from "@/app/components/lyaoutComponents/Footer/Footer.module.scss";
import Socials from "@/app/components/lyaoutComponents/Socials/Socials";
import Links from "@/app/components/lyaoutComponents/Links/Links";
import Link from 'next/link';
import Logo from "@/app/components/lyaoutComponents/Logo/Logo";

export default function Footer() {

    return (
       <footer className={cl.footer} >
           <div className={styles.container}>
               <div className={cl.wrapper}>
                   <div className={cl.top}>
                       <Link href="#" className={`${cl.promo} ${cl.mobile}`}>
                           <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                               <path d="M16.6666 5.83342H15.6591C15.7813 5.42823 15.8401 5.00657 15.8333 4.58341C15.8333 2.97508 14.525 1.66675 12.9166 1.66675C11.565 1.66675 10.6625 2.90175 10.08 4.23758C9.50579 2.97508 8.55746 1.66675 7.08329 1.66675C5.47496 1.66675 4.16663 2.97508 4.16663 4.58341C4.16663 5.08008 4.23246 5.49091 4.34079 5.83342H3.33329C2.41413 5.83342 1.66663 6.58091 1.66663 7.50008V9.16675C1.66663 10.0859 2.41413 10.8334 3.33329 10.8334V16.6667C3.33329 17.5859 4.08079 18.3334 4.99996 18.3334H15C15.9191 18.3334 16.6666 17.5859 16.6666 16.6667V10.8334C17.5858 10.8334 18.3333 10.0859 18.3333 9.16675V7.50008C18.3333 6.58091 17.5858 5.83342 16.6666 5.83342ZM12.9166 3.33341C13.6058 3.33341 14.1666 3.89425 14.1666 4.58341C14.1666 5.83342 13.645 5.83342 13.3333 5.83342H11.2683C11.6941 4.52008 12.3125 3.33341 12.9166 3.33341ZM5.83329 4.58341C5.83329 3.89425 6.39413 3.33341 7.08329 3.33341C7.82329 3.33341 8.51163 4.60425 8.91496 5.83342H6.66663C6.35496 5.83342 5.83329 5.83342 5.83329 4.58341ZM3.33329 7.50008H9.16663V9.16675H3.33329V7.50008ZM4.99996 16.6667V10.8334H9.16663V16.6667H4.99996ZM15 16.6667H10.8333V10.8334H15V16.6667ZM10.8333 9.16675V7.57092L10.8475 7.50008H16.6666L16.6675 9.16675H10.8333Z" fill="white"/>
                           </svg>
                           <span>Ввести промокод</span>
                       </Link>
                       <button className={`${cl.support} ${cl.desktop}`}>
                           Написать в поддержку
                       </button>
                       <Socials />
                   </div>
                   <Links/>
                   <button className={`${cl.support} ${cl.mobile}`}>
                       Написать в поддержку
                   </button>
                   <div className={cl.bottom}>
                       <div className={cl.info}>
                           2023, ООО «ТВОЁ ЛАЙВ» 18+<br/>
                           ИНН  7720904034
                       </div>
                       <Link href="#" className={cl.logo}>
                           <Logo/>
                       </Link>
                       <div className={cl.info}></div>
                   </div>
               </div>
           </div>
       </footer>
    )
};