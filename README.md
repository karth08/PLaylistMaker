# Jammming

Jammming is a React web application that allows users to search the Spotify library, create custom playlists, and save them directly to their Spotify accounts. This project leverages the Spotify API to deliver an interactive and personalized music experience.

## Purpose

The purpose of this project is to provide users with a seamless way to explore Spotify's vast music library and curate their own playlists. By integrating with the Spotify API, Jammming offers a user-friendly platform where users can search for tracks, add them to a playlist, and save their playlists to their Spotify account with just a few clicks.

## Technologies Used

- **React**: For building the user interface and managing component states.
- **Spotify API**: For retrieving track data and interacting with user playlists.
- **JavaScript (ES6)**: Core programming language used in the project.
- **HTML5**: Markup language for structuring the web application.
- **CSS3**: Styling the application and ensuring responsive design.
- **Git & GitHub**: Version control and hosting the project repository.
- **GitHub Pages**: For deploying the application to the web.

## Features

- **Search Functionality**:
  - Users can search for songs by song title.
  - Optionally, users can search by other attributes such as artist name or genre.
  
- **Song Information**:
  - Users can view detailed information about each song, including the title, artist, and album.
  - The app displays search results in an easy-to-read format.

- **Playlist Management**:
  - Users can create a custom playlist by adding songs from the search results.
  - The app allows users to remove songs from the playlist.

- **Spotify Integration**:
  - Users can log in to their Spotify account directly from the app.
  - Once logged in, users can export their custom playlist directly to their Spotify account.

## Future Work

In future iterations of Jammming, the following features and enhancements could be added:

- **Enhanced Search Options**: Expand search functionality to include additional filters such as release date, popularity, or album type.
- **Playlist Editing**: Allow users to edit existing playlists stored in their Spotify account directly within the app.
- **Song Previews**: Integrate a feature that lets users listen to song previews before adding them to a playlist.
- **UI/UX Improvements**: Refine the user interface for better accessibility and mobile responsiveness.
- **OAuth Flow Improvements**: Streamline the authentication process with Spotify, potentially offering multiple OAuth flows to accommodate different user needs.

## Deployment

The application is deployed on GitHub Pages. You can access the live version of Jammming at: [Jammming on GitHub Pages](https://goshawke.github.io/spotify_playlist_maker).

## How to Use

1. **Search for Songs**: Enter a song title, artist name, or genre in the search bar and hit "Search."
2. **Create a Playlist**: Browse through the search results and add your favorite songs to the playlist.
3. **Save to Spotify**: Once your playlist is complete, click "Save to Spotify" to export your playlist to your Spotify account.

## Getting Started

### Prerequisites

To run this project locally, you will need:

- Node.js (v14 or higher)
- npm (v6 or higher)
- A Spotify Developer account for API access

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/goshawke/spotify_playlist_maker.git

2. Navigate to the project directory:
   ```bash
   cd spotify_playlist_maker
   
3. Install dependencies:
   ```bash
   npm install

4. Start the development server:
  ```bash
    npm start
  ```

5. Open your browser and go to http://localhost:3000.
