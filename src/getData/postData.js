import React from 'react';

export const PostData = async() => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users')
    const posts = await data.json()
    return posts;
}

export default PostData;
