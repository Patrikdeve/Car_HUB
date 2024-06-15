
"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import CustomButton from './CustomButton';
import { updateSearchParams } from '@/utils';


type ShowMoreProps = {
    pageNumber: number; 
    isNext: boolean
}
const ShowMore = ( props: ShowMoreProps) => {
    const {pageNumber, isNext}  = props; 
    const router = useRouter(); 

    const handleNavigation = () => {
        const newLimit = (pageNumber +1)*10;
        const newPathName = updateSearchParams("limit", `${newLimit}` )

        router.push(newPathName);
    }
    return (
    <div>
        <div className='w-full flex-center gap-5 mt-10'>
            {!isNext && (
                <CustomButton 
                    title='Show More'
                    btnType='button'
                    containerStyles='bg-primary-blue rounded-full text-white'
                    handleClick={handleNavigation}
                />
                
            )}

        </div>
    </div>
  )
}

export default ShowMore
