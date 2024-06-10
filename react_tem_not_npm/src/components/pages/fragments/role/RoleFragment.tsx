// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import React from 'react';
import BasicModal from "../../components/modals/BasicModal";
import {formStructureNewRole, tableComlumnsRole, tableRowsRole} from "../../../assets/data/1";
import RenderFormElement from "../../../assets/customHooks/RenderFormElement";
import BasicTable from "../../components/tables/BasicTable";


const RoleFragment = () => {
    const pageTitle = 'نقش ها'
    const formName = 'فرم ایجاد نقش'
    const formFragment =
        <RenderFormElement
            etcFragment={<div>test</div>}
            form={formStructureNewRole}
        />
    return (
        <div className={' flex flex-col justify-between items-center'}>
            <div className={'flex items-center self-start px-5'}>
                <BasicModal title={formName} fragment={formFragment}/>
            </div>
            <h1 className={'my-2'}>{pageTitle}</h1>
            {/*<DataTable tableRows={tableRows} tableComlumns={tableComlumns}/>*/}
            <BasicTable columns={tableComlumnsRole} rows={tableRowsRole}/>
        </div>
    );
};

export default RoleFragment;

