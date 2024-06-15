
"use client"
import React from 'react'
import { Fragment, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Listbox, ListboxButton, ListboxOption, ListboxOptions, Transition } from '@headlessui/react'
import { updateSearchParams } from '@/utils'

type OptionProps = {
  title: string
  value:string
}
type CustomFilterProps = {
    title: string
    options: OptionProps[]
}
const CustomFilter = (props: CustomFilterProps) => {
  const{title, options} = props; 
  const [selected, setSelected] = useState(options[0]); 
  const router = useRouter(); 
  
  
  const handleUpdateParams = ( e:{title:string, value: string}) => {
    const nwePathName = updateSearchParams(e.title, e.value.toLowerCase()); 

    router.push(nwePathName)
  }
  return (
    <div className='w-fit'>
        <Listbox
          value={selected}
          onChange={(e) => {setSelected(e)
            handleUpdateParams(e)
          }}
          >
            <div className='relative w-fit z-10'>
                <ListboxButton className='custom-filter__btn' >
                    <span className='block truncate'>{selected.title}</span>
                    <Image 
                    src="/chevron-up-down.svg"
                    width={20}
                    height={20}
                    className='ml-4 object-contain'
                    alt='chevron up down'
                    />
                
                </ListboxButton>
                <Transition
                as={Fragment}
                leave='transition ease-in duration-100'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
                >
                  <ListboxOptions className='custom-filter__options'>
                      {options.map((option) => (
                        <ListboxOption
                          key= {option.title}
                          value={option}
                          className={({active}) => `${
                            active?'  bg-primary-blue text-white text-xl':'text-gray-900'
                          }relative cursor-default select-none py-2 px-4`}
                        >
                            {({selected}) => (
                              <span className= {`block truncate ${selected?'font-medium': 'font-normal'}`}>
                                {option.title}
                              </span>
                            ) }
                        </ListboxOption>
                      ))}
                  </ListboxOptions>
                </Transition>
            </div>
        </Listbox>
    </div>
  )
}

export default CustomFilter
