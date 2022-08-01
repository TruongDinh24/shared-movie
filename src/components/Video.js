import React from "react";
import { useVideoContext } from "../context";

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
  const { videos } = useVideoContext();

  return (
    <div className="movie-list">
      {videos?.map((item) => {
        return <VideoItem key={item._id} item={item} />;
      })}
    </div>
  );
};

export default Videos;
