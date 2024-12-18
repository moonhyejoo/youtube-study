import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main';

import VideoCards from "../components/video/VideoCard"
import { websiteText } from "../data/website"

const Website = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 300);
    }, []);

    const webSiteClass = loading ? "isLoading" : "isLoaded";


    return (
        <Main
            title="웹표준 사이트"
            description="웹표준 사이트 튜토리얼 강의입니다.">
            <section id="websitePage" className={webSiteClass}>
                <h2>😛 웹표준 사이트 만들기 기초 다지기</h2>
                <div className="video-inner">
                    <VideoCards videos={websiteText} />
                </div>
            </section>
        </Main>
    )
}

export default Website
