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
    children,
    altText = "icon",
    onClick,
    type = "button",
    variant = "orange",
    buttonColor,
    textColor,
    isLoading = false,
    spinnerVariant = "light",
    spinnerSmall = true,
    showArrow = true,
    className = "",
    style,
    disabled = false,
    ...props
}) => {
    const variantColors = BUTTON_VARIANTS[variant] || BUTTON_VARIANTS.orange;
    const resolvedBackgroundColor = buttonColor || variantColors.backgroundColor;
    const resolvedTextColor = textColor || variantColors.textColor;
    const isDarkArrow = String(resolvedTextColor).trim().toLowerCase() === "#333333";
    const resolvedArrowIcon = isDarkArrow ? RightArrowIconDark : RightArrowIcon;
    const buttonContent = children || label;

    return (
        <button
            type={type}
            className={`icon-button ${className}`}
            onClick={onClick}
            disabled={disabled || isLoading}
            aria-busy={isLoading}
            style={{
                ...style,
                backgroundColor: resolvedBackgroundColor,
                color: resolvedTextColor,
            }}
            {...props}
        >
            {isLoading && (
                <span
                    className={`spinner-border ${spinnerSmall ? "spinner-border-sm" : ""} me-2 text-${spinnerVariant}`}
                    role="status"
                    aria-hidden="true"
                />
            )}
            {buttonContent}
            {showArrow && !isLoading && (
                <span className="icon-wrapper">
                    <img src={resolvedArrowIcon} alt={altText} className="btn-icon" />
                </span>
            )}
        </button>
    );
};

export default ArrowButton;