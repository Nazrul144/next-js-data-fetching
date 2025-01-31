import PostData from '@/getData/postData';
import Link from 'next/link';
import React from 'react';

const Posts = async() => {
  const posts = await PostData()
  
    return (
        <div > 
           <div className='grid grid-cols-4 gap-6 shadow-md'> 
            {
                posts?.map((post=>(
                    <div className='bg-orange-400 rounded-md p-4'>
                        <h1>Name:{post.name}</h1>
                        <h1>Email:{post.email}</h1>
                        <h1>Address:{post.address.street}</h1>
                        <h1>City:{post.address.city}</h1>
                        <button className='bg-sky-300 rounded-md p-2 mt-4'>
                            <Link href={`/posts/${post.id}`}>View Details</Link>
                        </button>
                    </div>
                )))
            }
           </div>
        </div>
    );
}

export default Posts;
