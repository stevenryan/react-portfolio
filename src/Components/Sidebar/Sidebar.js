import React from 'react';

import './Sidebar.css';

const sidebar = props => {
    let sidebarClasses = 'sidebar';

    if (props.show) {
        sidebarClasses = 'sidebar is-open';
    };

    return (
        <nav className={sidebarClasses}>
            <ul>
                <li><a href="/">HOME</a></li>
                <li><a href="/">ABOUT</a></li>
                <li><a href="/">SKILLS</a></li>
                <li><a href="/">PORTFOLIO</a></li>
                <li><a href="/">RESUME</a></li>
            </ul>
        </nav>
    );
};

export default sidebar;