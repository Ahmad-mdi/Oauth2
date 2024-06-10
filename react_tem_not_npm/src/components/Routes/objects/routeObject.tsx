import FirstPageRoundedIcon from '@mui/icons-material/FirstPageRounded';
import PagePreview from "../page-preview/PagePreview";
import RoleFragment from "../../pages/fragments/role/RoleFragment";
import UserFragment from "../../pages/fragments/users/UserFragment";
import OperationFragment from "../../pages/fragments/operation/operationFragment";
import PagePreviewTest from "../page-preview/PagePreviewTest";


export const routeObject = [
    {
        id: 1,
        name: 'نقش ها',
        path: 'new-role',
        element: <PagePreview fragment={<RoleFragment/>}/>,
        elementTest:<PagePreviewTest fragment={<RoleFragment/>}/>,
        icon: <FirstPageRoundedIcon/>
    },
    {
        id: 2,
        name: 'کاربران',
        path: 'new-user',
        element: <PagePreview fragment={<UserFragment/>}/>,
        elementTest:<PagePreviewTest fragment={<UserFragment/>}/>,
        icon: <FirstPageRoundedIcon/>
    },
    {
        id: 3,
        name: 'عملیات ها',
        path: 'operation',
        element: <PagePreview fragment={<OperationFragment/>}/>,
        elementTest:<PagePreviewTest fragment={<OperationFragment/>}/>,
        icon: <FirstPageRoundedIcon/>
    },
]