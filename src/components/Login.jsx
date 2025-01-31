import React from 'react';

const Login = () => {
    return (
        <div>
            <h1>This is login page.</h1>
            <div className='border border-green-300 rounded-md p-4 bg-orange-200'>
                <form className='w-96 mx-auto'>
                    <input className='rounded-md p-2' type="text" placeholder='enter your name' /><br /><br />
                    <input className='rounded-md p-2' type="password" placeholder='enter password' /><br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
}

export default Login;
