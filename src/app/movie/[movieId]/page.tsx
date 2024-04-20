import styles from "@/app/page.module.css";
import Hero from "@/app/components/MovieComponents/Hero/Hero";
import MovieTabs from "@/app/components/MovieComponents/MovieTabs/MovieTabs";
import MovieInfo from "@/app/components/MovieComponents/MovieInfo/MovieInfo";
import MovieReviews from "@/app/components/MovieComponents/MovieReviews/MovieReviews";

export default function Movie({params}: { params: { movieId: string } }) {
    return (
        <>
            <Hero/>
            <div className={styles.container}>
                <MovieTabs/>
                <MovieInfo/>
                <MovieReviews/>
            </div>
        </>
    )
}