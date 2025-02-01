
import PostData from '@/getData/postData';
import React from 'react';

export async function generateMetadata({params}){
    const posts = await PostData()
    const singlePost = await posts.find((post=> post.id === Number(params.id)))
    return {
        title: `${singlePost.name}`,
        description: singlePost.username,
        keywords: singlePost.username.split(' ')
    }
}

const DetailsPage = async({params}) => {
    const posts = await PostData()
    const singlePost = posts.find((post=> post.id === Number(params.id)))
    return (
        <div className='bg-gray-300 rounded-md'>
         <h1>Name:{singlePost.name}</h1>
         <h1>Email:{singlePost.email}</h1>
         <h1>Street:{singlePost.address.street}</h1>
         <h1>City:{singlePost.address.city}</h1>
        </div>
    );
}

export default DetailsPage;
