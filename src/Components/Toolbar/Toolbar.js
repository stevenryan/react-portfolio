import React from 'react';
import SidebarToggleButton from '../Sidebar/SidebarToggleButton'
import './Toolbar.css';

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar__navigation">
            <div className="toolbar__toggle-container">
                <SidebarToggleButton click={props.sidebarClickHandler} />
            </div>
            <div className="toolbar__logo"><a href="/"><img src='pixel-face.png' alt="site logo" className="logoImg"/></a></div>
            <div className="toolbar__navigation-items">
                <ul>
                    <li><a href="/">HOME</a></li>
                    <li><a href="/">ABOUT</a></li>
                    <li><a href="/">SKILLS</a></li>
                    <li><a href="/">PORTFOLIO</a></li>
                    <li><a href="/">RESUME</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;