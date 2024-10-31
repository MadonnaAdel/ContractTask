import { FC, useState } from 'react';
import { FaEllipsisV } from 'react-icons/fa';

interface FileCardProps {
    icon: React.ReactNode;
    label: string;
}

const FileCard: FC<FileCardProps> = ({ icon, label }) => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

    return (
        <div className="w-32 h-20 relative flex items-center justify-center bg-gradient-to-r from-blue-500 to-red-500 rounded-md shadow-lg">
            <span className="w-15 h-15 flex justify-center items-center text-white">
                {icon}
            </span>

            <button
                onClick={toggleDropdown}
                className="absolute top-2 right-2 p-1 bg-white rounded-full text-gray-400 hover:text-gray-700 font-thin text-sm"
            >
                <FaEllipsisV />
            </button>

            {isDropdownOpen && (
                <div className="absolute top-10 right-2 bg-white border border-gray-300 rounded-md shadow-md z-10">
                    <ul className="text-gray-700 text-sm">
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Download </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default FileCard;
