import { FC } from 'react';

interface HeaderBarProps {
    title: string;
    fontSize:string
}

const HeaderBar: FC<HeaderBarProps> = ({ title,fontSize }) => {
    return (
        <div className="flex items-center w-full">
            <h1 className={`font-bold bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent ${fontSize}`}>
                {title}
            </h1>
            <div className="flex-grow ml-4 h-[2px] bg-gradient-to-r from-blue-600 to-red-600"></div>
        </div>
    );

};

export default HeaderBar;
