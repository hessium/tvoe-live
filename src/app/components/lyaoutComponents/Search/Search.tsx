import React from 'react';
import styles from "@/app/components/lyaoutComponents/Search/Search.module.scss";

const Search = () => {
    return (
        <form action="@/app/components/lyaoutComponents/Search/Search" className={styles.search}>
            <label htmlFor="search-input" className={styles.label}>
                <input id='search-input' type="text" className={styles.input}/>
                <button className={styles.button}>
                    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.1954 24.8613C16.562 24.8608 18.8604 24.0686 20.7247 22.6107L26.586 28.472L28.4714 26.5867L22.61 20.7253C24.0687 18.8609 24.8615 16.5619 24.862 14.1947C24.862 8.31332 20.0767 3.52798 14.1954 3.52798C8.31402 3.52798 3.52869 8.31332 3.52869 14.1947C3.52869 20.076 8.31402 24.8613 14.1954 24.8613ZM14.1954 6.19465C18.6074 6.19465 22.1954 9.78265 22.1954 14.1947C22.1954 18.6067 18.6074 22.1947 14.1954 22.1947C9.78335 22.1947 6.19535 18.6067 6.19535 14.1947C6.19535 9.78265 9.78335 6.19465 14.1954 6.19465Z" fill="#BABABA"/>
                    </svg>
                </button>
            </label>
        </form>
    )
}
export default Search
