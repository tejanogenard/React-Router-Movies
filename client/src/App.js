import React, { useState } from 'react';
import { Route } from "react-router-dom" ;
import SavedList from './Movies/SavedList';
import MovieList from  "./Movies/MovieList";
import MovieCard from "./Movies/MovieCard";

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path = "/"><MovieList/></Route>
      <Route excat path = "/Movies/:movieID"><MovieCard/></Route>
    </div>
  );
};

export default App;
