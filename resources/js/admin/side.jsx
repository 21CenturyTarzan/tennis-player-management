import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PageLoader from '../components/pageloader';

export default function Side() {
    const [selected, setSelected] = useState('');
    const [loading, setLoading] = useState(true);

    const handleLogout = () => {
        setLoading(true);
        axios.post('/logout')
        .then(() => location.href = '/')
    }

    return (
        <div className="l-side">
            <div className="l-side-logo">
                <a href="">
                    <img src="/images/top_mv_logo.svg" width="200px" height="200px" alt="logo" />    
                </a>
            </div>
            <nav className="mypage-nav">
                <ul className="mypage-nav-list">
                    <li className={`mypage-nav-list__item  ${(selected == 'info' || (selected == '' && document.getElementById('player_router').value == 'info')) && "nav-active"}`}
                        onClick={e => {
                            e.preventDefault();
                            setSelected('info');
                        }}>
                        <Link to="/player/info" className="mypage-nav-list__link">
                            <i className="icon info"></i><span>個人情報</span>
                        </Link>
                    </li>
                    <li className={`mypage-nav-list__item  ${(selected == 'goal' || (selected == '' && document.getElementById('player_router').value == 'goal')) && "nav-active"}`}
                        onClick={e => {
                            e.preventDefault();
                            setSelected('goal');
                        }}>
                        <Link to="/player/goal" className="mypage-nav-list__link">
                            <i className="icon parents"></i><span>目標管理</span>
                        </Link>
                    </li>
                    <li className={`mypage-nav-list__item  ${(selected == 'match' || (selected == '' && document.getElementById('player_router').value == 'match')) && "nav-active"}`}
                        onClick={e => {
                            e.preventDefault();
                            setSelected('match');
                        }}>
                        <Link to="/player/match" className="mypage-nav-list__link">
                            <i className="icon meeting"></i><span>試合管理</span>
                        </Link>
                    </li>
                    <li className={`mypage-nav-list__item  ${(selected == 'favourite' || (selected == '' && document.getElementById('player_router').value == 'favourite')) && "nav-active"}`}
                        onClick={e => {
                            e.preventDefault();
                            setSelected('favourite');
                        }}>
                        <Link to="/player/favourite" className="user-icon mypage-nav-list__link">
                            <i className="icon star"></i><span>お気に入り</span>
                        </Link>
                    </li>
                    <li className={`mypage-nav-list__item  ${(selected == 'logout') && "nav-active"}`}
                        onClick={e => {
                            e.preventDefault();
                            setSelected('logout');
                        }}>

                        <a className="mypage-nav-list__link" onClick={handleLogout}>
                            <i className="icon log-out"></i><span>ログアウト</span>
                        </a>
                    </li>
                </ul>
            </nav>
            {!loading && <PageLoader query="#player-app .l-content"/>}
        </div>
    );
}