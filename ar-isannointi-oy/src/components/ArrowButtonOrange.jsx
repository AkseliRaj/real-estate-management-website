import React from 'react';
import '../css/ArrowButtonOrange.css'
import RightArrowIcon from '../assets/svg/rightArrowIcon.svg';
import RightArrowIconDark from '../assets/svg/rightArrowIconDark.svg';

const BUTTON_VARIANTS = {
    orange: {
        backgroundColor: "#F57021",
        textColor: "#FFFFFF",
    },
    white: {
        backgroundColor: "#FFFFFF",
        textColor: "#333333",
    },
};

const ArrowButton = ({
    label,
    altText = "icon",
    onClick,
    type = "button",
    variant = "orange",
    buttonColor,
    textColor,
    showArrow = true,
    className = "",
    style,
    ...props
}) => {
    const variantColors = BUTTON_VARIANTS[variant] || BUTTON_VARIANTS.orange;
    const resolvedBackgroundColor = buttonColor || variantColors.backgroundColor;
    const resolvedTextColor = textColor || variantColors.textColor;
    const isDarkArrow = String(resolvedTextColor).trim().toLowerCase() === "#333333";
    const resolvedArrowIcon = isDarkArrow ? RightArrowIconDark : RightArrowIcon;

    return (
        <button
            type={type}
            className={`icon-button ${className}`}
            onClick={onClick}
            style={{
                ...style,
                backgroundColor: resolvedBackgroundColor,
                color: resolvedTextColor,
            }}
            {...props}
        >
            {label}
            {showArrow && (
                <span className="icon-wrapper">
                    <img src={resolvedArrowIcon} alt={altText} className="btn-icon" />
                </span>
            )}
        </button>
    );
};

export default ArrowButton;