import React from 'react';

export default function Footer() {
    return (
        <footer className='text-center p-4'>
            <p className='text-sm text-amber-700'>
                &copy; {new Date().getFullYear()} Developed by George Exodus Nayan. All rights reserved.
            </p>
        </footer>
    );
}
