import React from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/Home.css';

import doeAvatar from '../images/doe-avatar.svg';
import smithAvatar from '../images/smith-avatar.svg';


const Home = () => {
    return (
        <>
            <section className="login__container">
                <div className="logo__wrapper">
                    Chat
                    <div className="logo__subtitle">to JS master</div>
                </div>
                <div className="login__wrapper">
                    <NavLink to="/chat/John-Doe" className="login__button gray__background">
                        <div className="account__wrapper">
                            <img src={doeAvatar} alt="" className="account__avatar" />
                            <p className="account__paragraph">John Doe</p>
                        </div>
                    </NavLink>
                    <NavLink to="/chat/John-Smith" className="login__button">
                        <div className="account__wrapper">
                            <img src={smithAvatar} alt="" className="account__avatar" />
                            <p className="account__paragraph">John Smith</p>
                        </div>
                    </NavLink>
                </div>
                <div className="description__wrapper">
                    <p className="description__wrapper--paraghraph">
                        Choice your accountand start a conversation
                    </p>
                </div>
            </section>
        </>
    );
}

export default Home;