import React from 'react';

export default function Header() {
    return (
        <header className='flex items-center justify-between gap-4 p-4'>
            <a href="/" className='flex items-center gap-2'>
                <img src="/exc.jpg" alt="FreeScribe Logo" className='h-8' />
                <h1 className='font-medium text-xl'>
                    Exo<span className='text-amber-500 font-bold'>Scribe</span>
                </h1>
            </a>
            <div className='gap-4 flex items-center'>
                <a href="https://matt.savvy91psinnovates.tech/" target='_blank' className='text-amber-500 cursor-pointer' rel="noreferrer">
                    More..
                </a>
                <a href="/" className='flex items-center gap-2 specialBtn px-3 py-2 rounded-lg text-amber-400'>
                    <p>Create New</p>
                    <i className="fa-solid fa-plus"></i>
                </a>
            </div>
        </header>
    );
}
