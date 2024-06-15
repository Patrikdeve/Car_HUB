
"use client"
import React, { MouseEventHandler } from 'react'
import Image from 'next/image'

type CustomButtonProps  = {
    title:string; 
    containerStyles?: string; 
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button"|"submit"; 
    textStyles?:string
    rightIcon?:string
    isDisabled?:boolean
}
const CustomButton = (props: CustomButtonProps) => {
 const{title, containerStyles, handleClick, btnType, textStyles, rightIcon} = props;
 
    return (
    <button
    disabled={false}
    type = {btnType}
    className={`custom-btn ${containerStyles}`}
    onClick={handleClick}
    >
        <span className={`flex-1 ${textStyles}`}>
            {title}
        </span>
        {rightIcon && (
            <div className='relative w-6 h-6'>
                <Image 
                src={rightIcon}
                alt="righticon"
                fill
                className='object-contain'
                />

            </div>
        )}
    </button>
  )
}

export default CustomButton
