import React, { useEffect, useState } from 'react';

import styles from '../styles/SearchResults.module.css'

import Track from '../components/Track';


function SearchResults(props){


    return (
        <div className={styles.container}>
            {props.results.length != 0?
                 (<h2 className={styles.h2}>RESULTS</h2>) : (
                    <></>
                )
            }
            
            <ul>
                {props.results.map((track, index)=>{
                    return (
                        <>
                            <li>
                                <Track key={index} title={track.title} artist={track.artist} album={track.album} uri={track.uri} symbol='+'
                                        isAdded={props.addedTracks.some(t => t.title === track.title)}  
                                        onClick={() => props.addToPlaylist(track)}/>
                            </li>
                        </>
                    )
                })}
            </ul>
        </div>
    )

}

export default SearchResults;