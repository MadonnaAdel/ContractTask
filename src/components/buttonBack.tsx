"use client";
import LeftArrow from '@/icons/leftAerrow';
import { useRouter } from 'next/navigation';

const ButtonBack = () => {
    const router = useRouter();

    return (
        <button
            onClick={() => router.back()}
            className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-red-500 text-white mr-2 flex justify-center items-center text-xl p-2"
        >
           <LeftArrow/>
        </button>
    );
};
export default ButtonBack
