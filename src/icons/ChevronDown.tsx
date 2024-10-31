import { SVGProps } from "react";

const ChevronDown: React.FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg width="30" height="30" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" {...props}>
        <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: "red", stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: "blue", stopOpacity: 1 }} />
            </linearGradient>
        </defs>

        <path
            d="M60 80 L100 120 L140 80"
            stroke="url(#gradient)" strokeWidth="12" fill="none" strokeLinecap="round"
        />
    </svg>
);

export default ChevronDown;
