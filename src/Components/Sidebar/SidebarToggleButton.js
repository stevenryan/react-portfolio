import React from 'react';

import './SidebarToggleButton.css';

const sidebarToggleButton = props => (
    <button className="sidebar-button" onClick={props.click}>
        <div className="sidebar-button_toggle"></div>
        <div className="sidebar-button_toggle"></div>
        <div className="sidebar-button_toggle"></div>
    </button>
);

export default sidebarToggleButton;