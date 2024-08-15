import React, { useState, useEffect } from 'react';
import Track from '../components/Track'

import styles from '../styles/Tracklist.module.css'

function Tracklist(props){

    return (
        <>
            <ul className={styles.container}>
                {props.tracks.map((track, index)=>{
                    return (
                        <>
                            <li>
                                <Track key={index} uri={track.uri} title={track.title} artist={track.artist} album={track.album} symbol='-'
                                        onClick={() => props.removeFromPlaylist(track)}/>
                            </li>
                        </>
                        
                    )                    
                })}
            </ul>
        </>
    )

}


export default Tracklist;