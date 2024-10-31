'use client'
import React, { useState } from 'react';
import HeaderBar from './headerBar';
import { BsRocketTakeoff } from 'react-icons/bs';
import { FaCheckCircle, FaFileExcel, FaFilePdf, FaFilePowerpoint, FaFileWord, FaTimesCircle } from 'react-icons/fa';
import Rocket from '@/icons/roket';
import CheckMark from '@/icons/CheckMark';
import CrossMark from '@/icons/CrossMark';
import ChevronUp from '@/icons/ChevronUp';
import ChevronDown from '@/icons/ChevronDown';
import PaperIcon from '@/icons/papercon';
import FileCard from './FileCard';

function ContractDeliverables() {
    const [isOpen, setIsOpen] = useState(true);
    const [isSectionOpen, setIsSectionOpen] = useState(true);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };
    const toggleSectionOpen = () => {
        setIsSectionOpen(!isSectionOpen);
    };
  
    return (
        <div className="bg-white p-4 rounded-xl border border-gray-200 m-4">
            <div className="flex w-full">
                <HeaderBar title="Contract Deliverables" fontSize='text-2xl' />
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
                    className={`transition-max-height duration-1000 ease-in-out overflow-hidden text-gray-400 flex ${isOpen ? 'max-h-96' : 'max-h-0'}`}
                >
                    <PaperIcon />
                    
                    <div className=" bg-white p-4 rounded-xl border border-gray-200 m-4">
                            <div className="flex items-center justify-between mb-2">
                            <h2 className=" font-bold text-blue-600">Delivery-1</h2>
                            <div className="">
                                 <span className='text-sm'> 15-sep-2024 11:20Am</span>
                                <span className=" bg-gradient-to-r from-red-600 to-gray-600 text-white px-5 py-1 rounded-full ml-2">Declined</span>
                            </div>
                           
                        </div>

                        <hr />
                            <p className="text-gray-500 mb-4 font-semibold text-sm my-3">
                                Id risus urna neque nunc feugiat metus turpis vel. Quis sed adipiscing vitae aliquet tincidunt ut.
                                Ut fusce tellus bibendum at massa massa etiam. Fringilla.
                            </p>
                        <div className="flex items-center mb-4">
                            <div className="flex border border-gray-400  rounded-full items-center justify-between px-2">
                                <div className="text-gray-500 text-sm ">8 Files
                                </div>
                                <div>
                                    <button
                                    onClick={toggleSectionOpen}
                                    className="flex justify-between bg-black w-full text-left text-lg font-semibold bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent"
                                >
                                    {isSectionOpen ? <ChevronUp /> : <ChevronDown />}
                                    </button>
                                   
                                </div>
                            </div>
                            
                            <div className="flex-grow ml-4 h-[1px] bg-slate-300"></div>
                        </div>
                        {
                            isSectionOpen &&(
                             <div className="grid grid-cols-4 gap-4">
                                <FileCard icon="" label="Image" />
                                <FileCard icon="" label="Video" />
                                <FileCard icon="" label="Audio" />
                                <FileCard icon='' label="PDF" />
                                    <FileCard icon='' label="Excel" />
                                    <FileCard icon='' label="PowerPoint" />
                                    <FileCard icon='' label="Word" />
                                </div>
                            )
                        }
                           
                        </div>
                </div>
            )}

        </div>
    );
}

export default ContractDeliverables;
