import React from "react";
import useCountRenders from "./useCountRenders";

export const Movie = ({ title, releaseDate, memo }) => {
  useCountRenders(memo ? "MemoizedMovie" : "Movie");
  return (
    <div>
      <div>Movie title: {title}</div>
      <div>Release date: {releaseDate}</div>
    </div>
  );
};

export const MemoizedMovie = React.memo(Movie);
