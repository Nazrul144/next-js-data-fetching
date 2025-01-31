'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {

    const pathName = usePathname()
    const links = [
        {
            title:'Home',
            path: '/home'
        },
        {
            title:'About',
            path: '/about'
        },
        {
            title:'Posts',
            path: '/posts'
        },
        {
            title:'Contact',
            path: '/contact'
        },
        {
            title:'Dashboard',
            path: '/dashboard'
        },
    ]


    return (
        <div>
            <nav className='flex justify-between p-4'>
                <h1 className='font-bold text-2xl text-purple-400'>Hero</h1>
                <ul className='flex space-x-4 text-xl font-bold'>
                    {
                        links.map((link => <Link className={`${pathName == link.path? "text-green-400" : ""}`} href={link.path} key={link.path}>{link.title}</Link>))
                    }
                </ul>
                <button className='font-bold bg-sky-300 rounded-md p-2'><Link href={'/login'}>Login</Link></button>
            </nav>
        </div>
    );
}

export default Navbar;
