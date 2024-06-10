// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import * as React from 'react';
import {DataGrid} from '@mui/x-data-grid';


export default function DataTable({columns, rows}: any) {

    return (
        <div style={{height: 400, width: '100%'}} className={'w-full lg:py-2 lg:px-12 md:p-2 mb-4'}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: {page: 0, pageSize: 5},
                        },
                    }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                />
        </div>
    );
}
