import React from 'react';
import {Button, TextField} from "@mui/material";
import {rootPathName} from "../../assets/data/1";
import {Link} from "react-router-dom";

function Login() {
    return (
        <div className={'w-full h-screen'}>
            <div className={'flex items-center mx-4 justify-center rounded-lg'}>
                <img className={'w-full h-[18rem] mt-4 rounded-lg object-cover '}
                     src="https://ioi2017.ir/files/Azadi.jpg" alt=""/>
            </div>
            <div className={'flex items-center -mt-[4rem] justify-center'}>
                <form className={'flex flex-col items-center  pb-10 w-[20rem]  rounded-lg shadow bg-white'}>
                    <div
                        className={'w-[92%] -mt-[2rem] text-white text-2xl flex items-center shadow justify-center h-[6rem] top-0 rounded-lg mx-auto bg-[#1976D2]'}>
                        Login
                    </div>
                    <div className={'my-2 mt-8 w-full flex items-center justify-center'}>
                        <TextField id="standard-basic" className={'w-[85%]'} label="Name" variant="standard"/>
                    </div>
                    <div className={'my-2 w-full flex items-center justify-center'}>
                        <TextField id="standard-basic" className={'w-[85%]'} label="Email" variant="standard"/>
                    </div>
                    <div className={'my-2 w-full flex items-center justify-center'}>
                        <TextField id="standard-basic" className={'w-[85%]'} label="Password" variant="standard"/>
                    </div>
                    <div className={'my-5 w-[85%] flex items-center '}>
                        <input
                            className="dark:border-white-400/20 dark:scale-100 transition-all duration-500 ease-in-out dark:hover:scale-110 dark:checked:scale-100 w-5 h-5"
                            type="checkbox"/>
                        <span className={'text-slate-600 mx-3 text-sm'}>
                            I agree the
                        <span className={'text-[#1976D2] mx-1 cursor-pointer'}>Terms and Conditions</span>
                        </span>
                    </div>
                    <Link className={'w-[92%] mt-4'} to={rootPathName}>
                        <Button
                            fullWidth
                            variant="contained"
                            className={' shadow justify-center  top-0 rounded-lg mx-auto '}>
                            Login
                        </Button>
                    </Link>
                </form>
            </div>
        </div>
    );
}

export default Login;