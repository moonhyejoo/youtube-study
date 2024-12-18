import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'

import VideoCards from "../components/video/VideoCard"
import { youtubeText } from "../data/youtube"


const Youtube = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 300);
    }, []);

    const youtubeClass = loading ? "isLoading" : "isLoaded";


    return (
        <Main
            title="유튜브 사이트"
            description="유튜브 사이트 튜토리얼 강의입니다.">
            <section id="youtubePage" className={youtubeClass}>
                <h2>😱 지금 이 코딩을 영상으로</h2>
                <div className="video-inner">
                    <VideoCards videos={youtubeText} />
                </div>
            </section>
        </Main>
    )
}

export default Youtube
