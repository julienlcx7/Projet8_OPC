import React, { useState } from 'react';
import './Dropdown.scss';

function Dropdown({ title, content }) {
    // State to control the visibility of the dropdown content
    const [visible, setVisible] = useState(false);

    // Function to toggle the visibility of the dropdown content
    const toggleVisibility = () => {
        setVisible(!visible);
    };

    return (
        <div className="dropdown">
            <button className="dropdown-btn" onClick={toggleVisibility}>
                {title}
            </button>
            {/* Show the dropdown content only if visible is true */}
            {visible && (
                <div className="dropdown-content">
                    {content}
                </div>
            )}
        </div>
    );
}

export default Dropdown;
