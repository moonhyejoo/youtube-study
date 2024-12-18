import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Search = () => {
    const [searchKeyword, setSearchKeyword] = useState("");
    const navigate = useNavigate();  // 주소값을 가져옴


    const handleSearch = () => {
        console.log(searchKeyword)
        if (searchKeyword) {
            navigate(`/search/${searchKeyword}`);
            setSearchKeyword("");
        }
    }


    return (
        <div id="search">
            <div className="search-inner">
                <label htmlFor="searchInput">
                    <span className="ir">검색</span>
                </label>
                <input
                    type="search"
                    name="searchInput"
                    id="searchInput"
                    autoComplete="off"
                    className="search-input"
                    placeholder="검색어를 입력해 주세요"
                    onChange={e => setSearchKeyword(e.target.value)}
                    onKeyDown={e => {
                        if (e.key === "Enter") {
                            handleSearch();
                        }
                    }}
                />
            </div>

        </div>
    )
}

export default Search
