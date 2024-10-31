import React, { SVGProps } from "react";

const PaperIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg width="100" height="100" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" {...props}>
        <defs>
            <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="blue" stopOpacity="1" />
                <stop offset="100%" stopColor="red" stopOpacity="1" />
            </linearGradient>
            <linearGradient id="docGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="blue" stopOpacity="1" />
                <stop offset="100%" stopColor="red" stopOpacity="1" />
            </linearGradient>
        </defs>

        <circle cx="32" cy="32" r="30" fill="none" stroke="url(#circleGradient)" strokeWidth="2" />

        <rect x="23" y="20" width="18" height="24" rx="2" ry="2" fill="none" stroke="url(#docGradient)" strokeWidth="1.5" />
        <rect x="26" y="23" width="18" height="24" rx="2" ry="2" fill="none" stroke="url(#docGradient)" strokeWidth="1.5" />
        <rect x="29" y="26" width="18" height="24" rx="2" ry="2" fill="none" stroke="url(#docGradient)" strokeWidth="1.5" />

        <line x1="29" y1="30" x2="42" y2="30" stroke="blue" strokeWidth="1" />
        <line x1="29" y1="34" x2="42" y2="34" stroke="red" strokeWidth="1" />
    </svg>
);

export default PaperIcon;
