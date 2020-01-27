import React from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '../components/Logo';

import '../styles/Home.css';
import '../styles/Logo.css';

import doeAvatar from '../images/doe-avatar.svg';
import smithAvatar from '../images/smith-avatar.svg';


const Home = () => {
    return (
        <>
            <Logo />
            <section>
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
            </section>
            <div className="description__wrapper">
                <p className="description__wrapper--paraghraph">
                    Choice your accountand start a conversation
                    </p>
            </div>
        </>
    );
}

export default Home;