// components/GradientButton.tsx
import React from 'react';

interface ButtonProps {
    text: string;
    onClick: () => void;
}

const MainButton: React.FC<ButtonProps> = ({ text, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="relative inline-block px-6 py-2.5 text-white font-medium w-full text-lg rounded-full transition duration-300 ease-in-out bg-gradient-to-r from-blue-500 to-red-500 hover:from-red-500 hover:to-blue-500"
        >
            {text}
        </button>
    );
};

export default MainButton;
