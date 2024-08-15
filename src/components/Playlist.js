import React, { useState, useEffect } from 'react';

import styles from '../styles/Playlist.module.css'

import Tracklist from '../components/Tracklist';
import SaveBtn from '../components/SaveBtn';



function Playlist(props){

    const [playlistName, setPlaylistName] = useState('');

    function handleUserInput(e){
        setPlaylistName(e.target.value);
    }


    return(
        <div className={styles.container}>
            <form className={styles.form}>
                <input type='text' value={playlistName} onChange={handleUserInput} placeholder='Your Playlist Name...' required />
            </form>
            <Tracklist className={styles.tracklist} tracks={props.addedTracks} removeFromPlaylist={props.removeFromPlaylist}/>
            
            {Array.isArray(props.addedTracks) && props.addedTracks.length? (
                <SaveBtn playlistName={playlistName} tracksToSave={props.addedTracks}/>
            ) : (
                <></>
            )}
            
            
        </div>
    )

}

export default Playlist;