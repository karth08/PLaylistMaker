import React, { useState } from 'react';

import styles from '../styles/SearchBar.module.css'
import SearchBtn from '../components/SearchBtn';


function SearchBar(props){

    const [searchterm, setSearchterm] = useState('');

    function handleChange(e){
        setSearchterm(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault(); // Prevent the default form submission
    }

    return (
        <form name="searchbar" className={styles.form} onSubmit={handleSubmit}>
            <input className={styles.input} type="text" value={searchterm} onChange={handleChange} placeholder='song, artist, album'></input>
            <SearchBtn searchterm={searchterm} addToResults={props.addToResults} clearResults={props.clearResults}/>
        </form>
    );
}

export default SearchBar;