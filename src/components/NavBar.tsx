import React from 'react';
//Look into best way to do conditional rendering
//Make selected tab same bg colour as navbar



const NavBar = () => {
    let selectedTab = "Login";
    return (
        <div className='flex items-center justify-center h-screen w-2/12 ml-[20px]'>
            <div className='flex h-2/4 w-2/12 fixed bg-green-300 rounded-xl'>
                <div className='flex justify-evenly w-full max-h-[50px]'>
                    <div className='flex items-center justify-center bg-green-600 rounded-tl-xl w-full'>
                        <p>Login</p>
                    </div>

                    <div className='flex items-center justify-center bg-blue-600 rounded-tr-xl w-full'>
                        <p>Register</p>
                        <p></p>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default NavBar;