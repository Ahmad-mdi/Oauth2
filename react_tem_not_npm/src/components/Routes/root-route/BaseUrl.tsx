// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import React, { useState } from 'react';
import {routeObject} from "../objects/routeObject";


// تعریف صفحات به صورت داینامیک


// کامپوننت اصلی
const BaseUrl = ({pages,currentPage}:any) => {

    // تابعی برای رندر کردن کامپوننت بر اساس صفحه فعلی
    const renderComponent = () => {
        const page = pages.find(p => p.path === currentPage);
        return page && page.elementTest ;
    };

    return (
        <div className={'pt-36 min-h-screen '}>
            {renderComponent()}
        </div>
    );
};




export default BaseUrl;
