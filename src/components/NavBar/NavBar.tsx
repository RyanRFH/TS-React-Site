import React, { useState } from 'react';
import "./NavBar.css";
import hidePasswordIcon from "./NavBarAssets/hidepassicon.webp";
import showPasswordIcon from "./NavBarAssets/showpassicon.png";
//Fix hide pass button position
//Go mobile first
//Add "hide navbar button", as well as a "open navbar button"



const NavBar = () => {
    let [selectedTab, setSelectedTab] = useState("Login");
    let [hidePass, setHidePass] = useState(true);

    return (
        <div className='flex items-center justify-center h-screen w-2/12 ml-[20px]'>
            <div className='h-2/4 w-2/12 fixed bg-green-300 rounded-xl'>
                <div className='flex justify-evenly w-full min-h-[50px]'>
                    <div onClick={() => { setSelectedTab("Login") }} className={`navbarTab rounded-tl-xl ${selectedTab === "Login" ? "bg-green-300" : "bg-green-200"}`}>
                        <p>Login</p>
                    </div>
                    <div onClick={() => { setSelectedTab("Register") }} className={`navbarTab rounded-tr-xl ${selectedTab === "Register" ? "bg-green-300" : "bg-green-200"}`}>
                        <p>Register</p>
                    </div>
                </div>
                <div className='h-full'>
                    {selectedTab === "Login" &&
                        <div className='h-full'>

                            <form className='flex flex-col items-center h-2/4'>
                                <h1 className='text-3xl'>Login</h1>
                                <div className='flex flex-col items-center'>
                                    <label>Username</label>
                                    <input type='text'></input>
                                </div>

                                <div className='flex flex-col items-center'>
                                    <label>Password</label>
                                    <div className='flex'>
                                        <input type="password" className=''></input>
                                        <div className='flex pr-[25px]'>
                                            <div onClick={() => { setHidePass(!hidePass) }}>
                                                {hidePass
                                                    ?
                                                    (<img src={hidePasswordIcon} alt='hidepasswordicon' className='flex w-[25px]' />)
                                                    :
                                                    (<img src={showPasswordIcon} alt='hidepasswordicon' className='flex w-[25px]' />)
                                                }
                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </form>
                        </div>
                    }

                    {selectedTab === "Register" &&
                        <div className='h-full'>
                            <form className='flex flex-col items-center h-2/4'>
                                <h1 className='text-3xl'>Register</h1>
                                <div className='flex flex-col items-center'>
                                    <label>Username</label>
                                    <input type='text'></input>
                                </div>

                                <div className='flex flex-col items-center'>
                                    <label>Password</label>
                                    <div className='flex'>
                                        <input type="password" className=''></input>
                                        <div className='flex pr-[25px]'>
                                            <div onClick={() => { setHidePass(!hidePass) }}>
                                                {hidePass
                                                    ?
                                                    (<img src={hidePasswordIcon} alt='hidepasswordicon' className='flex w-[25px]' />)
                                                    :
                                                    (<img src={showPasswordIcon} alt='hidepasswordicon' className='flex w-[25px]' />)
                                                }
                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </form>
                        </div>
                    }

                </div>


            </div>

        </div>

    );
};

export default NavBar;