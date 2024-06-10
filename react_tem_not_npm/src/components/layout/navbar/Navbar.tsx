// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import React from 'react';
import {useLocation} from "react-router-dom";
import {routeObject} from "../../Routes/objects/routeObject";
import {Button, TextField} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import MenuSimple from "../../assets/port/UserMenu";
import TabsWrappedLabel from "../tab-bar/TabsWrappedLabel";
import {rootPathName} from "../../assets/data/1";

const Navbar = (
    {
        setDirection,
        direction,
        openPages,
        setOpenPages,
        setCurrentPage,
        currentPage,
        sideNav,
        setSideNav
    }
        :
        any) => {
    const location = useLocation();
    const openPage = (page: any) => {
        if (!openPages.some(p => p.path === page.path)) {
            setOpenPages([...openPages, page]);
        }
    };

    const list = () => (

        <div className={'flex flex-col  items-center justify-between'}>
            <div className={'absolute lg:hidden right-0 top-1 '}>
                <Button  onClick={() => setSideNav(!sideNav)}>{sideNav ? <MenuOpenIcon/> : <MenuIcon/>}</Button>
            </div>
            <h1 className={'mt-2  pb-3 text-black border-b w-full flex items-center justify-center  '}>فهرست</h1>
            {routeObject.map((route) => (
                <div key={route.id} className={'w-[90%]'} style={{marginTop: 2.5, marginBottom: 2.5}}
                     onClick={() => {
                         openPage(route)
                         setCurrentPage(route.path)
                     }}>
                    <Button size={'large'} className={'flex w-[100%] items-center justify-between h-[2rem]'}
                            dir={'rtl'}>
                        <span className={'absolute right-2'}>{route.name}</span>
                        <span className={'absolute left-2'}>{route.icon}</span>
                    </Button>
                </div>
            ))}
        </div>

    );
    return (
        <div
            className={`${location.pathname == rootPathName ? 'flex' : 'hidden'} px-6 ${sideNav ? 'w-calc-layout' : 'w-[97%]'} shadow items-center lg:m-6 m-2 rounded-lg  border-b h-[6rem] fixed bg-white z-50`}>
            <MenuSimple/>
            <Button onClick={() => setSideNav(!sideNav)}>{sideNav ? <MenuOpenIcon/> : <MenuIcon/>}</Button>
            <div
                className={`${direction ? 'left-0 ' : 'right-0'} ${sideNav ? 'fixed' : 'hidden'} transition-all shadow top-0 rounded-lg z-50 w-[250px]  lg:m-6 lg:mt-6 mt-2 bg-white h-screen`}>
                {list()}
            </div>
            <Button onClick={() => setDirection(!direction)}>{direction ? 'fa' : 'en'}</Button>
            <TextField id="outlined-basic" size="small" label="Search here" variant="outlined" />
            <TabsWrappedLabel direction={direction} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        </div>
    );
};

export default Navbar;