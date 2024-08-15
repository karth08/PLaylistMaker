import React, { useState } from 'react';

import style from '../styles/SearchBtn.module.css'

import {search} from './spotifyUtils';

function SearchBtn(props){

    let sampleResults = [
        {artist: 'Alvvays', title: 'Party Police', album: 'Antisocialites'},
        {artist: 'Blink-182', title: 'Dont Leave Me', album: 'Enema of State'},
        {artist: 'Arcade Fire', title: 'Modern Man', album: 'The Suburbs'},
        {artist: 'Death Cab For Cutie', title: 'Sound of Settling', album: 'Transatlanticism'}
      ];

    async function handleSubmit(e){
        e.preventDefault(); // Prevent the default form submission
        // alert(`Searching for ${props.searchterm}`);
        
        // use Spotify API call to search using searchTerm

        // save to a variable
        const results = await search(props.searchterm);

        // call addToResults function
        props.clearResults();
        props.addToResults(results);

    }

    return (
        <button className={style.button} type='submit' searchterm={props.searchterm} onClick={handleSubmit}>Search</button>
    );
}

export default SearchBtn;