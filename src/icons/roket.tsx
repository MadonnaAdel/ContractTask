import { SVGProps } from "react";

const Rocket: React.FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg width="50" height="50" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" {...props}>
        <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: "blue", stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: "red", stopOpacity: 1 }} />
            </linearGradient>
        </defs>

        <circle cx="100" cy="100" r="90" stroke="url(#gradient)" strokeWidth="5" fill="none" />

        <path
            d="M100 60 L110 100 L90 100 L100 60 M95 100 L100 140 L105 100 L95 100 
           M98 140 L98 150 L102 150 L102 140 
           M92 70 A8 8 0 1 1 108 70 A8 8 0 1 1 92 70 Z"
            stroke="url(#gradient)" fill="none" strokeWidth="2"
        />
    </svg>
);

export default Rocket;
