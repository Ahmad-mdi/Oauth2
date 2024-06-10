// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import React from 'react';
import DataTable from "../../components/tables/DataTable";
import BasicModal from "../../components/modals/BasicModal";
import {formStructureNewUser, tableComlumnsUser, tableRowsUser} from "../../../assets/data/1";
import RenderFormElement from "../../../assets/customHooks/RenderFormElement";


const UserFragment = () => {
    const pageTitle = 'کاربران'
    const formName = 'فرم ایجاد کاربر'
    const formFragment =
        <RenderFormElement
            etcFragment={<div>test3</div>}
            form={formStructureNewUser}
        />
    return (
        <div className={' flex flex-col justify-between items-center'}>
            <div className={'flex items-center self-start px-5'}>
                <BasicModal title={formName} fragment={formFragment}/>
            </div>
            <h1 className={'my-2'}>{pageTitle}</h1>
            <DataTable rows={tableRowsUser} columns={tableComlumnsUser}/>
            <DataTable rows={tableRowsUser} columns={tableComlumnsUser}/>
        </div>
    );
};

export default UserFragment;