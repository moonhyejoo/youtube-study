import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'

import VideoCards from "../components/video/VideoCard"
import { portfolioText } from "../data/portfolio"

const Port = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 300);
    }, []);

    const portPageClass = loading ? "isLoading" : "isLoaded";


    return (
        <Main
            title="포트폴리오 사이트"
            description="포트폴리오 사이트 튜토리얼 강의입니다.">
            <section id="portPage" className={portPageClass}>
                <h2>🤗 포트폴리오 만드는 방법을 공유합니다.</h2>
                <div className="video-inner">
                    <VideoCards videos={portfolioText} />
                </div>
            </section>
        </Main>
    )
}

export default Port
