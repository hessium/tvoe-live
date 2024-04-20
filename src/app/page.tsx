import styles from "@/app/page.module.css";
import Hero from "@/app/components/HomeComponents/Hero/Hero";
import TopList from "@/app/components/HomeComponents/TopList/TopList";
import NewList from "@/app/components/HomeComponents/NewList/NewList";
import {Banner} from "@/app/components/HomeComponents/Banner/Banner";

export default function Home() {
  return (
      <div className={styles.wrapper}>
          <Hero/>
            <div className={styles.container}>
                <NewList name={'Новинки'}/>
                <Banner name={'Смотри зарубежное кино'}/>
                <TopList name={'ТОП НЕДЕЛИ'}/>
            </div>
      </div>
  );
}
