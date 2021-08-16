import React, { useState } from 'react';
import Header from './../../common/header/Header';
import Form from './Form';
import './Home.css';
import UpcomingMovies from './UpcomingMovies';
import {Link} from 'react-router-dom'
import moviesData from '../../common/moviesData';
import ImageListItem from '@material-ui/core/ImageListItem';
import { makeStyles } from '@material-ui/core/styles';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import ImageList from '@material-ui/core/ImageList';
import moment from 'moment';

const useStyles = makeStyles(() => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
    },
    imageList: {
      width: 500,
      height: 450,
    },
  }));
function Home() {
  const [filteredMovies, setFilteredMovies] = useState(moviesData);
  const [moviename, setMovieName] = React.useState("");
  const [genre, setGenre] = React.useState([]);
  const [artist, setArtist] = React.useState([]);

  const handleMovieChange = (event) => {
    setMovieName(event.target.value);
  };
  
  const handleGenreChange = (event) => {
    setGenre(event.target.value);
  };

  const handleArtistChange = (event) => {
    setArtist(event.target.value);
  };

  function getFilteredByMovieName(moviesData, moviename) {
    if (!moviename) {
      return moviesData;
    }
    return moviesData.filter(
      (item) => item.title.toLowerCase() === moviename.toLowerCase())};


  const getFilteredOnGenre = (movies) => {
    if (genre.length === 0) {
      return movies;
    }

    return movies.filter((movie) => {
      for (let i = 0; i < movie.genres.length; i++) {
        if (genre.includes(movie.genres[i])) {
          return true;
        }
      }
      return false;
    });
  };

  const getFilteredOnArtists = (movies) => {
    if (artist.length === 0) {
      return movies;
    }

    return movies.filter((movie) => {
      let movieArtists = movie.artists.map(
        (artist) => artist.first_name + "" + artist.last_name
      );
      for (let i = 0; i < movieArtists.length; i++) {
        if (artist.includes(movieArtists[i])) {
          return true;
        }
      }
      return false;
    });
  };

  const handleFilter = () => {
    const filterOnMovieName = getFilteredByMovieName(moviesData, moviename);
    const filteredOnGenre = getFilteredOnGenre(filterOnMovieName);
    const filteredOnArtist = getFilteredOnArtists(filteredOnGenre);
    setFilteredMovies(filteredOnArtist);
  };
    
        return (
            <div>
                <Header />
                <span className="heading">Upcoming Movies</span>

                <UpcomingMovies />
                <div className="flex-container">
                    <div className="left">
                       <div className={useStyles.root}>
                       <ImageList rowHeight={350} cols={4} className={useStyles.imageList}>
                         <ImageListItem  cols={4} style={{ height: 'auto' }}>
                         </ImageListItem>
                        {filteredMovies.map((item) => (

                          <ImageListItem key={item.poster_url}>
                            <Link to={`/details/${item.id}`}>
                              <img src={item.poster_url} alt={item.title} style={{width: "100%"}}/></Link>
                             <ImageListItemBar
                               title={item.title}
                               subtitle={<span>Release Date: {moment(item.release_date).format("ddd ll")}</span>}
                             /> 
                           </ImageListItem>
                         ))}
                       </ImageList>
                       
                     </div>
                    </div>
                    <div className="right">
                        <Form 
                        moviename={moviename}
                        genre={genre}
                        artist={artist}
                        handleMovieChange={handleMovieChange}
                        handleArtistChange={handleArtistChange}
                        handleGenreChange={handleGenreChange}
                        handleFilter={handleFilter}
                        />
                    </div>
                </div>
            </div>
        );
    }

export default Home;




