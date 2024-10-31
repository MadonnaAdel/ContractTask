import { SVGProps } from "react";

const CrossMark: React.FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg width="50" height="50" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" {...props}>
        <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: "blue", stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: "red", stopOpacity: 1 }} />
            </linearGradient>
        </defs>

        <circle cx="100" cy="100" r="90" stroke="url(#gradient)" strokeWidth="5" fill="none" />

        <path
            d="M80 80 L120 120 M120 80 L80 120"
            stroke="url(#gradient)" strokeWidth="5" fill="none" strokeLinecap="round"
        />
    </svg>
);

export default CrossMark;
