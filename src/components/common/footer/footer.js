import React from 'react';
import Link from 'next/link';
const Footer = props => {
    return (
        <div className='bg-sky-700 text-white fixed bottom-0 w-full'>
            <div className='container py-3 text-center'>
                Powered By{' '}
                <Link
                    href='https://github.com/Mohammadjt2/'
                    className='hover:text-white/60 font-bold'>
                    Mohammad Jalilvand
                </Link>
            </div>
        </div>
    );
};

export default Footer;
