import React, { useEffect, useState } from 'react';
import "./NavBar.css";
import hidePasswordIcon from "./NavBarAssets/hidepassicon.webp";
import showPasswordIcon from "./NavBarAssets/showpassicon.png";
import closeLoginWindowIcon from "./NavBarAssets/closeloginwindowicon.png";
import Login from '../Login';

//Go mobile first
//Add "hide navbar button", as well as a "open navbar button"



const NavBar = () => {
    let [selectedTab, setSelectedTab] = useState("Login");
    let [hidePass, setHidePass] = useState(true);
    let [loginModal, setLoginModal] = useState("");
    let loginModalEle = document.getElementById("loginModal");

    //Login modal animation
    let x: number;
    // let y: number;
    if (loginModalEle) {

        //Get elements current position
        // y = loginModalEle.offsetTop;
        x = loginModalEle.offsetLeft;
        // console.log("actual:", loginModalEle.offsetLeft);
        // console.log("math.round:", Math.round((window.innerWidth / 2) - (loginModalEle.offsetWidth / 2)))
        // console.log("no rounding:",(window.innerWidth / 2) - (loginModalEle.offsetWidth / 2))

    }
    let id: NodeJS.Timer;
    if (loginModal === "closed") {
        id = setInterval(closeLoginModal, 1);
    } else if (loginModal === "open") {
        id = setInterval(openLoginModal, 1);
    }

    function closeLoginModal() {
        console.log("close modal frame running");
        if (loginModalEle) {
            if (x <= -300) {
                clearInterval(id);
            } else {
                x -= 20;
                loginModalEle.style.left = x + "px";
            }
        } else {
            console.log("modal not found in closeLoginModal");
        }
    }

    function openLoginModal() {
        console.log("open modal frame running");
        if (loginModalEle) {
            //Place the modal in the middle of the screen and then remove the width of the modal so it's centered in the screen, the round
            if (x >= Math.round((window.innerWidth / 2) - (loginModalEle.offsetWidth / 2))) {
                clearInterval(id);
                console.log("ending X = :", x);
            } else {
                x += 20;
                loginModalEle.style.left = x + "px";
            }
        } else {
            console.log("modal not found in openLoginModal");
        }
    }

    return (
        <div className='flex items-center justify-center h-screen w-screen absolute'>
            <button onClick={(event) => { setLoginModal("open"); event.preventDefault(); }} >BRING IT BACK</button>
            <div id='loginModal' className={`fixed bg-green-300 rounded-xl border-green-500 border-2 min-h-[300px]`}>

                <div className='flex justify-evenly w-full min-h-[50px] border-b-2 border-green-500'>
                    <button onClick={() => { setSelectedTab("Login") }} className={`navbarTab rounded-tl-xl ${selectedTab === "Login" ? "bg-green-300" : "bg-green-200"}`}>
                        <p>Login</p>
                    </button>
                    <button onClick={() => { setSelectedTab("Register") }} className={`navbarTab rounded-tr-xl ${selectedTab === "Register" ? "bg-green-300" : "bg-green-200"}`}>
                        <p>Register</p>
                    </button>
                </div>
                <div className='h-full'>
                    {selectedTab === "Login" &&
                        <div className='h-full'>

                            <form className='flex flex-col items-center h-2/4'>
                                <div className='w-full flex items-center justify-center'>
                                    <button onClick={(event) => { setLoginModal("closed"); event.preventDefault(); }} className='absolute left-0 ml-[10px]'>
                                        <img src={closeLoginWindowIcon} className='w-[20px]' alt='closeloginwindowicon' />
                                    </button>
                                    <h1 className='text-3xl'>Login</h1>
                                </div>

                                <div className='flex flex-col items-center mt-[20px]'>
                                    <label>Username</label>
                                    <input type='text'></input>
                                </div>

                                <div className='flex flex-col items-center'>
                                    <label>Password</label>
                                    <div className='relative'>
                                        <input type={hidePass ? "password" : "text"} className=''></input>
                                        <div className='absolute top-0 right-0 mr-[5px]' onClick={() => { setHidePass(!hidePass) }}>
                                            {hidePass
                                                ?
                                                (<img src={hidePasswordIcon} alt='hidepasswordicon' className='w-[25px]' />)
                                                :
                                                (<img src={showPasswordIcon} alt='hidepasswordicon' className='w-[25px]' />)
                                            }
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    }

                    {selectedTab === "Register" &&
                        <div>
                        </div>
                    }

                </div>


            </div>
        </div>


    );
};



export default NavBar;