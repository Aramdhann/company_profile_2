import React from 'react'

const Item = ({ q, a }) => (
    <div className="relative overflow-hidden">
        <input type="checkbox" className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer" />
        <div className="w-full pl-5 pr-14 flex flex-wrap items-center text-primary font-semibold sm:text-xl text-lg">
            <h1 className='py-3'>
                {q}
            </h1>
        </div>
        <div className="absolute top-3 right-3 transition-transform duration-500 rotate-0 peer-checked:-rotate-90">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
        </div>
        <div className="overflow-hidden bg-abu transition-all duration-500 max-h-0 peer-checked:max-h-40">
            <div className="p-5 border-t">{a}</div>
        </div>
    </div>
);

export default Item