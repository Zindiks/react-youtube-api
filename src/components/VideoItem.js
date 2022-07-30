import React from "react";
import fromNow from "../functions/stackoverflow";






const VideoItem = ({video,onVideoSelect})=>{



    return (


    <div onClick={()=>onVideoSelect(video)} className="item">
    <div className="image">
      <img src={video.snippet.thumbnails.medium.url} alt={video.etag}/>
    </div>
    <div className="content">
      <p className="header">{video.snippet.title}</p>
      <div className="meta">
        <span>{video.snippet.channelTitle}</span>
      </div>

      <div className="extra">
      {fromNow(video.snippet.publishedAt)}
      </div>
    </div>
  </div>
 
        )
}




export default VideoItem;