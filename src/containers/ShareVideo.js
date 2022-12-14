import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useVideoContext } from "../context";

let ShareVideo = () => {
  let navigate = useNavigate();
  const { shareVideo } = useVideoContext();
  let [url, setUrl] = useState("");
  let handleSubmit = async (e) => {
    e.preventDefault();
    shareVideo(url);
    setUrl("");
    navigate("/");
  };

  return (
    <div className="share-movie">
      <fieldset>
        <legend>Share a Youtube movie</legend>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Youtube URL: </label>
            <input
              required
              type={"text"}
              value={url}
              autoFocus
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>
          <button type="submit">Share</button>
        </form>
      </fieldset>
    </div>
  );
};

export default ShareVideo;
