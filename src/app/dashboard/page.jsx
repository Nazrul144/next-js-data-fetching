"use client"

import { useRouter } from 'next/navigation';
import React from 'react';

const DashboardPage = () => {
    const router = useRouter()
    const orderConfirm = ()=>{
        alert("Order has been confirmed.")
        router.push('/about')
    }


    return (
        <div>
            <h1>This is dashboard</h1>
            <button onClick={orderConfirm} className='bg-sky-400 p-2 rounded-md'>Confirm Order</button>
        </div>
    );
}

export default DashboardPage;
