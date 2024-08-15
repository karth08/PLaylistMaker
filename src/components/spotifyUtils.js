

const apiUrl = 'https://api.spotify.com';
const client_id = "3a489fa4b5054c6cbec8c1b668716fd3";
const client_secret = "f2606832c3254cf7942fb43c1d9d27d6";
// const redirect_uri = window.location.origin.includes('github.io') 
//     ? 'https://goshawke.github.io/spotify_playlist_maker/' 
//     : 'http://localhost:3000';

const redirect_uri = 'https://goshawke.github.io/spotify_playlist_maker/' 


// Gets an application-level bearer token (not user-specific)
async function getBearerToken(){
    const TokenEndpoint = `https://accounts.spotify.com/api/token`;

    try{
        
        const response = await fetch(TokenEndpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: new URLSearchParams({
                grant_type: "client_credentials",
                client_id: client_id,
                client_secret: client_secret
            })});

        if(response.ok){
            const jsonResponse = await response.json();
            return jsonResponse.access_token;
        }
        throw new Error(`Response status: ${response.status}`);

    } catch(error){
        console.log(error)
    }
}

// Redirects user to Spotify's authorization page
async function getUserToken(){
    const scopes = 'playlist-modify-public playlist-modify-private';
    const authorizeUrl = `https://accounts.spotify.com/authorize?response_type=token&client_id=${client_id}&scope=${encodeURIComponent(scopes)}&redirect_uri=${encodeURIComponent(redirect_uri)}`;
    console.log("Redirecting to:", authorizeUrl);
    window.location.href = authorizeUrl;
}

// Extracts the access token from the URL hash
function getAccessTokenFromUrl() {
    const hash = window.location.hash;
    if (!hash) {
        return null;
    }
    const params = new URLSearchParams(hash.substring(1));
    return params.get('access_token');
}


// Searches for tracks using an application-level bearer token
async function search(searchTerm){
    const endpoint = `${apiUrl}/v1/search?q=${searchTerm}&type=track&limit=20`;
    const token = await getBearerToken();
    // console.log(token);

    try{
        const response = await fetch(endpoint, {
            method:"GET",
            headers:{
                Authorization: `Bearer ${token}`,
            },
            redirect: "follow"
        })

        if (response.ok) {
            const result = await response.json();
            return parseSearch(await result.tracks.items);
        }
        throw new Error(`Response status: ${response.status}`);
    } catch(error){
        console.log(error);
    }
}


// parses search results
function parseSearch(results){
    let parsedResults=[];

    for(const result of results){
        parsedResults.push({
            artist: result.artists[0].name,
            album: result.album.name,
            title: result.name,
            uri: result.uri
        })
    }

    return parsedResults;
}

// Creates and Saves a playlist using the user-specific access token
async function savePlaylist(track_uris, name){
    const user_token = getAccessTokenFromUrl();
    const endpoint = `${apiUrl}/v1/me/playlists`;

    if (!user_token) {
        alert('User token not found. Please authorize the app.');
        return;
    }

    try{
        const response = await fetch(endpoint, {
            method:"POST",
            headers:{
                'Authorization': `Bearer ${user_token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                public: false
            })
        })

        if (response.ok) {
            const result = await response.json();

            // testing
            /*
            alert('Playlist created successfully!');
            alert(track_uris);
            */

            await add_tracks_to_playlist(result.id, track_uris);
            return result; 
        }
        throw new Error(`Response status: ${response.status}`);
    } catch(error){
        console.log(error);
        alert(`Error: ${error.response ? error.response.data.error.message : error.message}`);
    }

}

async function add_tracks_to_playlist(playlist_id, track_uris){
    const endpoint = `${apiUrl}/v1/playlists/${playlist_id}/tracks`;
    const user_token = getAccessTokenFromUrl();

    try{
        const response = await fetch(endpoint, {
            method:"POST",
            headers:{
                'Authorization': `Bearer ${user_token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                uris: track_uris,
                position: 0
            })
        })

        if (response.ok) {
            const result = await response.json();

            // testing
            //alert('Tracks added successfully!');

            return result; 
        }
        throw new Error(`Response status: ${response.status}`);
    } catch(error){
        console.log(error);
        alert(`Error: ${error.response ? error.response.data.error.message : error.message}`);
    }
}

export {search, savePlaylist, getUserToken, getAccessTokenFromUrl};