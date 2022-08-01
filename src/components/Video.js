import React, { useEffect, useState } from "react";
import axios from "axios";

const VideoItem = ({ item }) => {
  return (
    <div className="movie-item">
      <div>
        <iframe
          width={450}
          height={300}
          src={`https://www.youtube.com/embed/${item.embedId}`}
          title={item.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="info">
        <p className="title">{item.title}</p>
        <p>
          <strong>Shared by: {item.createdBy}</strong>
        </p>
        <p>
          <strong>Description: </strong>
        </p>
        <div className="description">{item.description}</div>
      </div>
    </div>
  );
};

const Videos = () => {
  let [videos, setVideos] = useState();
  useEffect(async () => {
    axios.get("/api/movies").then((res) => {
      setVideos(res.data.movies);
    });
  }, []);

  return (
    <div className="movie-list">
      {videos?.map((item) => {
        return <VideoItem key={item._id} item={item} />;
      })}
    </div>
  );
};

export default Videos;
