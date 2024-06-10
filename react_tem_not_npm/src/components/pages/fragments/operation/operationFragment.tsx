// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import React from 'react';
import BasicModal from "../../components/modals/BasicModal";
import {
    formStructureNewOperation,
    tableComlumnsOperation, tableRowsOperation,
} from "../../../assets/data/1";
import RenderFormElement from "../../../assets/customHooks/RenderFormElement";

import DenseTable from "../../components/tables/DenseTable";


const OperationFragment = () => {
    const pageTitle = 'عملیات ها'
    const formName = 'فرم ایجاد عملیات'
    const formFragment =
        <RenderFormElement
            etcFragment={<div>test2</div>}
            form={formStructureNewOperation}
        />
    return (
        <div className={' flex flex-col justify-between items-center'}>
            <div className={'flex items-center self-start px-5'}>
                <BasicModal title={formName} fragment={formFragment}/>
            </div>
            <h1 className={'my-2'}>{pageTitle}</h1>
            <DenseTable rows={tableRowsOperation} columns={tableComlumnsOperation}/>
        </div>
    );
};

export default OperationFragment;