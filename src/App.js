import React, { useEffect, useState } from 'react';
import { getUserToken, getAccessTokenFromUrl } from './components/spotifyUtils';
import './styles/App.css';

import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';

const sampleTracks = [
  {artist: 'Alvvays', title: 'Pimsol Punks', album: 'Antisocialites'},
  {artist: 'Alvvays', title: 'Saved by a Waif', album: 'Antisocialites'},
  {artist: 'Blink-182', title: 'Dont Leave Me', album: 'Enema of State'},
  {artist: 'Blink-182', title: 'Josie', album: 'Enema of State'},
  {artist: 'Arcade Fire', title: 'Modern Man', album: 'The Suburbs'},
  {artist: 'Arcade Fire', title: 'Ready to Start', album: 'The Suburbs'},
  {artist: 'Death Cab For Cutie', title: 'Sound of Settling', album: 'Transatlanticism'},
  {artist: 'Death Cab For Cutie', title: 'New Year', album: 'Transatlanticism'}
];

const samplePlaylistTracks = [
  {artist: 'Alvvays', title: 'Party Police', album: 'Antisocialites'},
  {artist: 'Blink-182', title: 'Dont Leave Me', album: 'Enema of State'},
  {artist: 'Arcade Fire', title: 'Modern Man', album: 'The Suburbs'},
  {artist: 'Death Cab For Cutie', title: 'Sound of Settling', album: 'Transatlanticism'}
];


function App() {
  
  const [accessToken, setAccessToken] = useState(null);
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const token = getAccessTokenFromUrl();
    if (token) {
      setAccessToken(token);
    } else {
      getUserToken();
    }
  }, []);


  const addToPlaylist = (trackToAdd) => {
    if (!playlistTracks.includes(trackToAdd)) {
      setPlaylistTracks((prev) => [...prev, trackToAdd]);
    }
  };


  const removeFromPlaylist = (trackToRemove) => {
    setPlaylistTracks((prev)=> prev.filter((track)=> track != trackToRemove));
  };


  const addToResults = (tracks) => {
    setResults((prev) => {
      const newTracks = tracks.filter(
        (track) => !prev.some((existingTrack) =>
          existingTrack.artist === track.artist &&
          existingTrack.title === track.title &&
          existingTrack.album === track.album
        )
      );
      return [...prev, ...newTracks];
    });
  }

  const clearResults = () => {
    setResults([]);
  }

  useEffect(() => {
    console.log("Results updated:", results);
  }, [results]);


  return (
    <div className="App">

      {!accessToken ? (
              <p>Redirecting to Spotify login...</p>
            ) : (
      <div>
      <h1>SPOTIFY PLAYLIST MAKER</h1>
      <div id='form-container'>
        <SearchBar results={results} addToResults={addToResults} clearResults={clearResults}/>
      </div>

      <div id='main-div'>
        <div id='results-div'>
          <SearchResults results={results} addedTracks={playlistTracks} addToPlaylist={addToPlaylist}/>
        </div>

        <div id='playlist-div'>
          <Playlist addedTracks={playlistTracks} removeFromPlaylist={removeFromPlaylist}/>
        </div>
      </div>
      </div>)}

      
    </div>
  );
}

export default App;
