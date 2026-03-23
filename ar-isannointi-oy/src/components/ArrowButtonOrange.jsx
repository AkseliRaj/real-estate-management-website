import React from 'react';
import '../css/ArrowButtonOrange.css'
import ArrowIconLeft from '../assets/svg/rightArrowIcon.svg'

const ArrowButtonOrange = ({
    label,
    altText = "icon",
    onClick,
    type = "button",
    className = "",
    ...props
}) => {
    return (
        <button
            type={type}
            className={`icon-button ${className}`}
            onClick={onClick}
            {...props}
        >
            {label}
            <span className="icon-wrapper">
                <img src={ArrowIconLeft} alt={altText} className="btn-icon" />
            </span>
        </button>
    );
};

export default ArrowButtonOrange;