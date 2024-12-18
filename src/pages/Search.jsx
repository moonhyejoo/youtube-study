import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'
import VideoSearch from '../components/video/VideoSearch'
import { useParams } from 'react-router-dom'

const Search = () => {
    const { searchId } = useParams();
    const [videos, serVideos] = useState([]);

    useEffect(() => {
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=48&q=${searchId}&type=video&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`)
            .then(response => response.json())
            .then(result => {
                console.log(result)
                serVideos(result.items)
            })
            .catch(error => console.log(error))
    }, [searchId])

    return (
        <Main
            title="유투브 검색"
            description="유튜브 검색 결과 페이지입니다.">
            <section id="searchPage">
                <div className="video-inner search">
                    <VideoSearch videos={videos} />
                </div>
            </section>
        </Main>
    )
}

export default Search
