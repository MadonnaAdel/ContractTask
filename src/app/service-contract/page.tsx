import ButtonBack from '@/components/buttonBack'
import ContractActions from '@/components/ContractActions'
import ContractDeliverables from '@/components/ContractDeliverables'
import ContractPhases from '@/components/ContractPhases'
import ContractSummary from '@/components/ContractSummary'
import ContractTracker from '@/components/ContractTracker'
import HeaderBar from '@/components/headerBar'
import React from 'react'

export default function page() {
    return (
        <div className='my-16 mx-5 '>
            <div className="flex items-center py-2 px-4">
                <ButtonBack />
                <HeaderBar title="Service Contract" fontSize='text-2xl'/>
            </div>

            <div className="grid grid-cols-3 gap-4 my-6 ">
                <div className="col-span-2  bg-white rounded-xl border border-gray-200 p-3 shadow-md min-h-2 h-fit">
                    <ContractTracker></ContractTracker>
                    <ContractDeliverables />

                   
                </div>
                <div className=" bg-white rounded-xl border border-gray-200 p-3 shadow-md min-h-2 h-fit">
                    <ContractSummary />
                    <ContractActions />
                    <ContractPhases/>
                </div>
            </div>
        </div>
    )
}
