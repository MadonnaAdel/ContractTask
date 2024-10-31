'use client'
import React, { useState } from "react";

import HeaderBar from "./headerBar";
import ChevronDown from "@/icons/ChevronDown";
import ChevronUp from "@/icons/ChevronUp";
import MainButton from "./MainButton";

const ContractActions: React.FC = () => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="p-4 bg-white rounded-lg  w-full max-w-md">
            <div className="flex w-full">

                <HeaderBar title=" Contract Acions" fontSize="text-xl" />
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
                    <MainButton text='Endorse Client' onClick={()=>console.log('object')}/>
                </>
            )}
        </div>

    );
};

export default ContractActions;
