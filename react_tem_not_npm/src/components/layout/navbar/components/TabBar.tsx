// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import React from 'react';
import {Link, useLocation, useNavigate} from "react-router-dom";
import {Button} from "@mui/material";

function TabBar({openPages, setOpenPages}: any) {
    const navigate = useNavigate();
    const location = useLocation();
    const closePage = (path, index: any) => {
        setOpenPages(openPages.filter(p => p.path !== path));
        if (index > 0) {
            navigate(`/${openPages[index - 1].path}`);

        } else {
            navigate(`/${openPages[index + 1].path}`);
        }
        console.log(index)
    };
    return (
        <div className={'flex items-center bg-white absolute h-[3rem] w-full top-[4rem] py-1'}>
            <div className="flex items-center ">
                {openPages.map((page, index) => (
                    <Button
                        className={'relative flex items-center'}
                        variant={location.pathname === `/${page.path}` ? "contained" : "outlined"}
                        style={{margin: 2.5}}
                        key={page.id}>
                        <Link to={`/${page.path}`}>{page.name}</Link>
                        <button
                            onClick={() => closePage(page.path, index)}
                            className={`${openPages.length == 1 && 'hidden'}  text-red-600 absolute left-[2px] -top-1`}>X
                        </button>
                    </Button>
                ))}
            </div>
        </div>
    );
}

export default TabBar;