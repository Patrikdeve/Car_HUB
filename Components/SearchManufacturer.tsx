
"use client"
import React from 'react'
import Image from 'next/image';
import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions, Transition } from '@headlessui/react';
import { useState, Fragment } from 'react';
import { manufacturers } from '@/Constants';


type SearchManufacturerProps = {
    manufacturer: string, 
    setManufacturer: (manufacturer: string) => void
}
const SearchManufacturer = (props: SearchManufacturerProps) => {

    const {manufacturer, setManufacturer} = props; 
    
    const [query, setQuery] = useState(''); 
    

    const filteredManufacturers = query === "" ? 
    manufacturers : 
    manufacturers.filter((item) => (
        item.toLowerCase().replace(/\s+/g, "") //These replace function removing the empty space before and after the query and the item
        //the toLowerCase to ensure all search predominantly good
        .includes(query.toLowerCase().replace(/\s+/g,""))
    ))

    return (
    <div className='search-manufacturer'>
        <Combobox value = {manufacturer} onChange={setManufacturer}>
            <div className='relative w-full overflow-y-auto'>
                <ComboboxButton className='absolute top-[14px]'>
                    <Image 
                    src= "/car-logo.svg"
                    alt='wolkswagonlogo' 
                    width={20}
                    height={20}
                    className='ml-4 object-contain'
                    />

                </ComboboxButton>
                <ComboboxInput className='search-manufacturer__input'
                placeholder='Volkswagen'
                displayValue={(manufacturer:string) => manufacturer}
                onChange = {(e) => setQuery(e.target.value)}
                />

                <Transition
                    as = {Fragment}
                    leave='transition ease-in duration-100'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                    afterLeave={() => setQuery('')}
                >
                    <ComboboxOptions>
                        {filteredManufacturers.length === 0 && query !== "" ? (
                            <ComboboxOption value = {query}
                            className = "search-manufacturer__option">
                                No Results of "{query}"

                            </ComboboxOption>
                        ) : (
                            filteredManufacturers.map((item) => (
                                <ComboboxOption
                                key= {item}
                                value = {item}
                                className = {({active}) => `
                                relative search-manufacturer__option
                                ${active ? 'bg-primary-blue text-white': 'text-gray-900'}
                                `}
                                >
                                   {({selected, active}) => (
                                    <>
                                        <span 
                                        className={`block truncate ${
                                            selected?'font-medium':'font-normal'
                                        }`}>
                                            {item}
                                        </span>
                                    
                                        {selected ? (
                                            <span 
                                                className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                                    active? 'text-white':'text-teal-600'
                                                }`}
                                            >
                                            </span>
                                        ): null}
                                    </>
                                   )}
                                </ComboboxOption>
                            ))
                        )}
                    </ComboboxOptions>
                </Transition>
                
            </div>
        </Combobox>
    </div>
  )
}

export default SearchManufacturer
