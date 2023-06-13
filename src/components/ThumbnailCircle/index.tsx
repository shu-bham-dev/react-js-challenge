import React from "react";

interface ThumbnailCircleProps {
  imageUrl: any;
  onClick: () => void;
}

const ThumbnailCircle: React.FC<ThumbnailCircleProps> = ({
  imageUrl,
  onClick,
}) => {
  const getThumbnailfromUrl = imageUrl.split("=")[1];
  const imgThumbnail = `http://img.youtube.com/vi/${getThumbnailfromUrl}/1.jpg`;

  return (
    <button
      className="w-20 h-20 mr-2 rounded-full border-2 border-white hover:border-gray-300 focus:border-gray-300 focus:outline-none overflow-hidden"
      onClick={onClick}
    >
      <img
        className="w-full h-full object-cover"
        src={imgThumbnail}
        alt="Thumbnail"
      />
    </button>
  );
};

export default ThumbnailCircle;
