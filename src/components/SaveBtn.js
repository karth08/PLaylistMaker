import React, { useState } from 'react';

import styles from '../styles/SaveBtn.module.css'

import {savePlaylist} from './spotifyUtils';


function SaveBtn(props){

    function handleClick(e){
        // alert('Saving to Spotify');
        const track_uris = props.tracksToSave.map((track)=>track.uri);
        savePlaylist(track_uris, props.playlistName);
    }


    return (
        <button id="SaveBtn" type='Submit' onClick={handleClick} className={styles.button}>Save to Spotify</button>
    )

}

export default SaveBtn;