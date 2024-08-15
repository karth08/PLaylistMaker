import React, { useState } from 'react';

import styles from '../styles/Track.module.css'

function Track(props){

    return (
        <div className={styles.container}>
            <div>
                <h3>{props.title}</h3>
                <p>{props.artist} | {props.album}</p>
            </div>
            <div className="track-action">
                {<button className={styles.button} onClick={props.onClick}>{props.symbol}</button>}
            </div>

        </div>
    )

}

export default Track;