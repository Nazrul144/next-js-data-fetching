import React from 'react';

export const metadata = {
    title: 'About',
    keywords: ['About', 'About'],
    description: 'This is about page'
}

const getTime = async()=>{
    // const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`,${next: {revalidate:5}})
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URLS}/time`, { next: { revalidate: 5 } }); //After 5 second the time will be updated by refreshing.
    const data = await res.json()
    return data.currentTime
}


const AboutPage = async() => {
    const currentTime = getTime();
    return (
        <div className='h-screen'>
            <h1>This is about page</h1>
            <h1 className='font-bold text-4xl text-center mt-56 text-purple-400'>Current Time:{currentTime}</h1>
        </div>
    );
}

export default AboutPage;
