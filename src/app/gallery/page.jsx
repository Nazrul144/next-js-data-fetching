import Image from 'next/image';
import React from 'react';

const Page = () => {
    return (
        <div>
            <h1>This is image gallery</h1>
           {
            [1,2,3,4,5]?.map((img =>(
                <Image key={img} src={`/Images/${img}.jpg`} alt='image' height="1080" width="1920"/>
            )))
           }
            
        </div>
    );
}

export default Page;
