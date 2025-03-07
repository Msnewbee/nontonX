import React from "react";
import VideoJS from "video.js"; // Pastikan sudah menginstal Video.js
import "video.js/dist/video-js.css";

export default function VideoPlayer({ videoUrl }) {
  return (
    <div className="video-container">
      <video
        controls
        className="video-js vjs-default-skin"
        data-setup="{}"
        src={videoUrl}
      ></video>
    </div>
  );
}
