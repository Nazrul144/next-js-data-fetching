import React from 'react';

export const PostData = async() => {
    const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`)
    const posts = await data.json()
    return posts;
}

export default PostData;
