
import PostData from '@/getData/postData';
import React from 'react';

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
