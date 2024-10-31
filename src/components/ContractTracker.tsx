'use client'
import React, { useState } from 'react';
import HeaderBar from './headerBar';
import { BsRocketTakeoff } from 'react-icons/bs';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import Rocket from '@/icons/roket';
import CheckMark from '@/icons/CheckMark';
import CrossMark from '@/icons/CrossMark';
import ChevronUp from '@/icons/ChevronUp';
import ChevronDown from '@/icons/ChevronDown';

function ContractTracker() {
    const [isOpen, setIsOpen] = useState(true);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };
    const contractUpdates = [
        {
            icon: 
              <Rocket></Rocket>
            ,
            message: "Your Contract Started With Madonna",
            date: "09-Sep-2023 05:45 PM",
            link: "View Requirements",
            linkColor: "text-red-500",
        },
        {
            icon: <CrossMark></CrossMark>,
            message: "Contract Funds Are Being Held in Escrow",
            date: "11-Sep-2024 11:35 AM",
        },
        {
            icon: (
                <CheckMark></CheckMark>
            ),
            message: "You Submitted a Delivery to Madonna",
            date: "11-Sep-2024 11:35 AM",
        },
        {
            icon: <CrossMark></CrossMark>,
            message: "Madonna Declined The Delivery",
            date: "11-Sep-2024 02:00 PM",
        },
        {
            icon:<CheckMark></CheckMark>,
            message: "You Submitted a Delivery to Madonna",
            date: "12-Sep-2024 07:45 PM",
        },
    ];

    return (
        <div className="bg-white p-4 rounded-xl border border-gray-200 m-4">
            <div className="flex w-full">
                <HeaderBar title="Contract Tracker" fontSize='text-2xl' />
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
                <div
                    className={`transition-max-height duration-1000 ease-in-out overflow-hidden text-gray-400  ${isOpen ? 'max-h-96' : 'max-h-0'}`}
                >
                    {contractUpdates.map((update, index) => (
                        <React.Fragment key={index}>
                            <div className="flex items-center justify-between py-3 text-sm">
                                <div className="flex items-center space-x-2 font-bold">
                                    {update.icon}
                                    <p>{update.message}</p>
                                </div>
                                <div className="font-medium">
                                    {update.date}
                                    {update.link && (
                                        <>
                                            <span className='mx-2 text-gray-200'>|</span>
                                          <a
                                            href="#"
                                            className={` bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent font-bold ${update.linkColor}`}
                                        > 
                                            {update.link}
                                        </a>
                                        </>
                                      
                                    )}
                                </div>
                            </div>
                            <hr />
                        </React.Fragment>
                    ))}
                </div>
            )}

        </div>
    );
}

export default ContractTracker;
