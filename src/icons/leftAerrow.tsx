import { SVGProps } from "react";

const LeftArrow: React.FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            d="M15 4 L7 12 L15 20"
            stroke="white"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
        />
    </svg>
);

export default LeftArrow;
