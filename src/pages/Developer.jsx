import React from 'react'
import Main from '../components/section/Main'

import { developerText } from "../data/developer"
import { Link } from "react-router-dom"

const Developer = () => {
    return (
        <Main
            title="Developer > 추천 개발자"
            description="오늘의 추천 개발자 유튜버입니다.">
            <section id="developerPage">
                <h2>🥰 오늘의 추천 개발자입니다.</h2>
                <div className="developer-inner">
                    {developerText.map((developer, key) => (
                        <div className="developer" key={key}>
                            <div className="developer-img play-icon">
                                <Link to={`/channel/${developer.channelId}`}>
                                    <img src={developer.img} alt={developer.name} />
                                </Link>
                            </div>
                            <div className="developer-info">
                                <Link to={`/channel/${developer.channelId}`}>
                                    {developer.name}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </Main>
    )
}

export default Developer
