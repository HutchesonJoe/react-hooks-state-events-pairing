import React from "react";

function VideoWindow({title, views, createdAt, videoUrl}){
  return(
    <div>
      <iframe
        width="919"
        height="525"
        src={videoUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <h1>{title}</h1>
      <p>{views} | {createdAt}</p>
    </div>
  )
}

export default VideoWindow