'use client'
import React, { useState } from "react";

import HeaderBar from "./headerBar";
import ChevronDown from "@/icons/ChevronDown";
import ChevronUp from "@/icons/ChevronUp";

const ContractSummary: React.FC = () => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="p-4 bg-white rounded-lg  w-full max-w-md">
            <div className="flex w-full">
                
                <HeaderBar title=" Contract Summary" fontSize="text-xl"/>
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
                <>
                <div className="flex items-center mt-4">
                <div className="w-16 h-14 bg-gradient-to-r from-blue-600 to-red-600 flex items-center justify-center rounded-md">
                    
                </div>
                <div className="ml-4 text-gradient bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent font-bold ">
                    <p>This Will Be Service Name &</p>
                    <p>It Can Be Over 2 Lines Based On Your Needs</p>
                </div>
            </div>

            <hr className="my-4 border-gray-300" />

            <div className="space-y-2 font-bold">
                <div className="flex justify-between">
                    <span className="text-blue-600 ">Order ID:</span>
                    <span className="text-gray-400">#ORDSRV-123</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-blue-600 ">Tier :</span>
                    <span className="text-gray-400">&lt;Tier Name&gt;</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-blue-600 ">Sold By:</span>
                    <span className="text-gray-400">&lt;V-Lancer Name&gt;</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-blue-600 ">Sold To:</span>
                    <span className="text-gray-400">&lt;V-Client Name&gt;</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-blue-600 ">Price:</span>
                    <span className="text-gray-400">$100</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-blue-600 ">Escrow Amount:</span>
                    <span className="text-gray-400">$100</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-blue-600 ">Starting Date:</span>
                    <span className="text-gray-400">09-Sep-2023 05:45 PM</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-blue-600 ">Delivery Date:</span>
                    <span className="text-gray-400">15-Sep-2023 05:45 PM</span>
                </div>
            </div>
                </>
            
            )}
        </div>
           
    );
};

export default ContractSummary;
