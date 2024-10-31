'use client'
import { FC, useState } from 'react';
import HeaderBar from './headerBar';
import ChevronUp from '@/icons/ChevronUp';
import ChevronDown from '@/icons/ChevronDown';
import ContractTimeline from './ContractTimeline';

const ContractPhases: FC = () => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="px-4 bg-white rounded-lg  w-full max-w-md">
                <div className="flex w-full">
                    <HeaderBar title="Contract Phases" fontSize="text-xl" />
                    <div>
                        <button
                            onClick={toggleOpen}
                            className="flex justify-between w-full p-2 text-left text-lg font-semibold bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent"
                        >
                            {isOpen ? <ChevronUp /> : <ChevronDown />}
                        </button>
                    </div>
                </div>
                {isOpen && (
                    <div className="mt-4">
                        <ContractTimeline />
                    </div>
                )}
                <div />

            </div>

        </>
    );
};

export default ContractPhases;
