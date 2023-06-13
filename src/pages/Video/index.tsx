import React, { useState } from "react";
import ReactPlayer from "react-player";
import ThumbnailCircle from "../../components/ThumbnailCircle";

const Video = () => {
  const [showThumbnails, setShowThumbnails] = useState(false);
  const [playerVideo, setPlayerVideo] = useState(
    "https://www.youtube.com/watch?v=ysz5S6PUM-U"
  );
  const videoURLS = [
    "https://www.youtube.com/watch?v=KUpwupYj_tY",
    "https://www.youtube.com/watch?v=K3Han3RItZ4",
    "https://www.youtube.com/watch?v=KA4APfVz5I8",
    "https://www.youtube.com/watch?v=Tw8iApinXoU",
    "https://www.youtube.com/watch?v=S--StI31EHA",
    "https://www.youtube.com/watch?v=0YqFAhlh0Ho",
    "https://www.youtube.com/watch?v=g27_NuSWP0g",
    "https://www.youtube.com/watch?v=7kcjLAqdTy4",
    "https://www.youtube.com/watch?v=muqcO9Zox2w",
    "https://www.youtube.com/watch?v=_ai1KXa_kDw",
  ];

  const handleThumbnailClick = (url: string) => {
    setPlayerVideo(url);
  };

  return (
    <div className="mt-20 w-5/12 m-auto">
      <div className="text-blue-800 font-bold ml-72 mb-10">Video Player</div>
      <div>
        <ReactPlayer url={playerVideo} />
      </div>
      <div
        onMouseEnter={() => setShowThumbnails(true)}
        onMouseLeave={() => setShowThumbnails(false)}
      >
        <div className="overflow-x-scroll	overflow-y-hidden	whitespace-nowrap mt-4">
          {showThumbnails &&
            videoURLS.map((url, index) => (
              <ThumbnailCircle
                key={index}
                imageUrl={url}
                onClick={() => handleThumbnailClick(url)}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Video;
