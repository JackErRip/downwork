import React from 'react';

function YouTubeEmbeded({ ytLink, classname }) {
  return (
    <div className={classname}>
      <div className="relative w-full pb-[56.25%] h-0 overflow-hidden rounded-lg">
        <iframe
          className="absolute top-0 left-0 w-full h-full rounded"
          src={ytLink}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default YouTubeEmbeded;
