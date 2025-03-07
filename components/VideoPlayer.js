import React from "react";

const VideoPlayer = ({ src }) => {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <iframe
        className="w-full h-64 sm:h-96"
        src={src}
        title="Anime Video"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
