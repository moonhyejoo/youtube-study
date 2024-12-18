import React from "react"

import { portfolioText } from "../../data/portfolio"
import { Link } from "react-router-dom"

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h2>🤗 포트폴리오 만드는 방법을 공유합니다.</h2>
            <div className="video-inner">
                {portfolioText.map((video, key) => (
                    <div className="video" key={key}>
                        <div className="video-thumb play-icon">
                            <Link to={`/video/${video.videoId}`}>
                                <img src={video.img} alt={video.title} />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Portfolio;