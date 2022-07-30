import React from "react";




const VideoDetail =({video})=> {

    if (!video) {
        return <div></div>
    }else{






    return (


        <div >
            
                <iframe 
                    width="640" 
                    height="360" 
                    src={`https://www.youtube.com/embed/${video.id.videoId}`}
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>


                <div class="ui message">
                <div class="header">
                    {video.snippet.title}
                </div>
                <p>{video.snippet.description}</p>
                </div>
            
            <div>

            </div>
        </div>

    )
}
}



export default VideoDetail;