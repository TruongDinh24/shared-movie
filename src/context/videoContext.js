import React, { useContext } from "react";

export let VideoContext = React.createContext({
  videos: [
    {
      createdBy: "sharedmovie@gmail.com",
      title: "Howl's Moving Castle [OST - Theme Song]",
      description: "",
      url: "https://www.youtube.com/watch?v=UwxatzcYf9Q",
      embedId: "UwxatzcYf9Q",
    },
  ],
  shareVideo: async (url) => {},
});

let useVideoContext = () => useContext(VideoContext);

export default useVideoContext;
