import React from 'react'
import Main from '../components/section/Main';

import { todayText } from '../data/todayData';
import { Link } from "react-router-dom";

const Today = () => {
    return (
        <Main
            title="Today 추천 영상"
            description="오늘의 추천 유튜브 영상입니다.">
            <section id="todayPage">
                <h2>🥰 오늘의 추천 영상입니다.</h2>
                {todayText.map((today, key) => (
                    <div className="today-inner">
                        <div className="today-thumb play-icon">
                            <Link to={today.page}>
                                <img src={today.img} alt={today.title} />
                            </Link>
                        </div>
                        <div className="today-text">
                            <span className="today">today!</span>
                            <h3 className="title">
                                <Link to={today.page}>{today.title}</Link>
                            </h3>
                            <p className="desc">{today.desc}</p>
                            <div className="info">
                                <span className="author">
                                    <Link to={`/channel/${today.channelId}`}>{today.author}</Link>
                                </span>
                                <span className="date">{today.date}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </Main>
    )
}

export default Today
