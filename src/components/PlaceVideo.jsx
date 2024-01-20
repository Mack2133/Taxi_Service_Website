import React from "react"
import video from "../assets/video.mp4"

const PlaceVideo = () => {
    
  return (
    <div className="container flex flex-col items-center justify-center pt-10 pb-40">
        <h1 className="title text-balance">Most Beautiful Place in the World!</h1>
      <video
        className="h-auto max-w-full border-4 border-gray-400 rounded-lg shadow-md md:w-4/6 autoplay"
        autoPlay 
        controls
        controlsList="nodownload nofullscreen"
        disablePictureInPicture={true}
        preload={"auto"}
        onTouchStart={() => this.pauseVideo(index)}
        muted={true}
      >
        <source src={video} type="video/mp4" />
      </video>
    </div>
  )
}

export default PlaceVideo
