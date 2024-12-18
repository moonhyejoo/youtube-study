import React from "react"
import { Link } from "react-router-dom"

const VideoSearch = ({ videos }) => {
    return (
        <>
            {videos.map((video, index) => (
                <div className="video" key={index}>
                    <div className="video-thumb play-icon">
                        <Link
                            to={`/video/${video.id.videoId}`}
                            style={{ backgroundImage: `url(${video.snippet.thumbnails.high.url})` }}>
                        </Link>
                    </div>
                    <div className="video-info">
                        <div className="title">
                            <Link to={`/video/${video.id.videoId}`}>{video.snippet.title}</Link>
                        </div>
                        <div className="info">
                            <span className="author">
                                <Link to={`/channel/${video.snippet.channelId}`}>{video.snippet.channelTitle}</Link>
                            </span>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default VideoSearch