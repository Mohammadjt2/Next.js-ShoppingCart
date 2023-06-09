import React, { useEffect, useState } from 'react';
import { ShoppingBag } from 'react-huge-icons/outline';
import { useCart } from '@/context/Cart/cartContext';
import Link from 'next/link';
import Image from 'next/image';

const Header = props => {
    const [cartItem, setCarItem] = useState();

    const [cart, dispatchCart] = useCart();

    useEffect(() => {
        const Items = cart.cart.reduce((count, curItem) => {
            return count + curItem.quantity;
        }, 0);
        setCarItem(Items);
    }, [cart]);

    return (
        <div className=' bg-sky-700 text-white sticky top-0 w-full z-[999]'>
            <div className='container flex items-center justify-between py-3'>
                <Link
                    href='/'
                    className='flex items-center gap-3'>
                    <Image
                        width='64'
                        height='24'
                        src='/assets/images/logo.png'
                        alt='Mohammadjt2 ATH Logo'
                        title='#0369A1'
                        className='w-10 h-10 rounded-full'
                    />
                    <p className='hidden md:flex text-lg lg:text-xl'>Mohammadjt2</p>
                </Link>
                <Link href='/products'>Products</Link>
                <Link
                    href='/cart'
                    className='relative'>
                    <ShoppingBag className='w-8 h-8' />
                    <p className='absolute -top-2 -right-2 text-[10px] bg-green-500 text-white p-1 rounded-full'>{cartItem}</p>
                </Link>
            </div>
        </div>
    );
};

export default Header;
