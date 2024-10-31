import { FC } from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const ContractTimeline: FC = () => {
    const steps = [
        { label: 'Contract Started', color: 'from-blue-500 to-gray-500' },
        { label: 'Contract Requirements Submitted', color: 'from-blue-500 to-gray-500' },
        { label: 'Contract In Progress', color: 'from-blue-500 to-gray-500' },
        { label: 'Contract Closure', color: 'from-red-500 to-gray-500' },
    ];

    return (
        <div className="relative flex flex-col items-start pl-4">
            {steps.map((step, index) => (
                <div key={index} className="flex items-center mb-8 relative">
                    <div className="flex flex-col items-center absolute -left-4 top-0">
                        <div className={`rounded-full w-9 h-9 flex items-center justify-center bg-gradient-to-r ${step.color}`}>
                            <FaCheckCircle className="text-white" />
                        </div>
                        {index < steps.length - 1 && (
                            <div className="h-8 border-l-2 border-blue-300 "></div>
                        )}
                    </div>
                    <span className="ml-8 text-gray-500 font-semibold">{step.label}</span>
                </div>
            ))}
        </div>
    );
};

export default ContractTimeline;
