// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck

export const rootPathName = '/base-url'
export const formStructureNewRole = [
    {
        id: 1,
        componentType: 'TextField',
        label: 'نام',
        grid: 3,
        type: 'input',
        name: 'name',
    },
    {
        id: 2,
        componentType: 'TextField',
        label: 'نام خانوادگی',
        grid: 3,
        type: 'input',
        name: 'last-name',
    },
    {
        id: 3,
        componentType: 'TextField',
        label: 'سن',
        grid: 3,
        type: 'calendar',
        name: 'last-name',
    },
    {
        id: 4,
        componentType: 'TextField',
        label: 'انتخاب',
        grid: 3,
        type: 'select',
        name: 'last-name',
        value: [
            {
                id: 1,
                name: 'دهم',
                value: '10'
            },{
                id: 2,
                name: 'یازدهم',
                value: '11'
            },{
                id: 3,
                name: 'دوازدهم',
                value: '12'
            },
        ]
    },
];
export const formStructureNewUser = [
    {
        id: 1,
        componentType: 'TextField',
        label: 'نام',
        grid: 3,
        type: 'input',
        name: 'name',
    },
    {
        id: 2,
        componentType: 'TextField',
        label: 'نام خانوادگی',
        grid: 3,
        type: 'input',
        name: 'last-name',
    },
    // {
    //     id: 3,
    //     componentType: 'TextField',
    //     label: 'سن',
    //     grid: 3,
    //     type: 'calendar',
    //     name: 'last-name',
    // },
    {
        id: 4,
        componentType: 'TextField',
        label: 'انتخاب',
        grid: 3,
        type: 'select',
        name: 'last-name',
        value: [
            {
                id: 1,
                name: 'دهم',
                value: '10'
            },{
                id: 2,
                name: 'یازدهم',
                value: '11'
            },{
                id: 3,
                name: 'دوازدهم',
                value: '12'
            },
        ]
    },
    {
        id: 5,
        componentType: 'TextField',
        label: 'رمز عبور',
        grid: 3,
        type: 'input',
        name: 'last-name',
    },
];
export const formStructureNewOperation = [
    {
        id: 1,
        componentType: 'TextField',
        label: 'نام',
        grid: 3,
        type: 'input',
        name: 'name',
    },
    {
        id: 2,
        componentType: 'TextField',
        label: 'نام خانوادگی',
        grid: 3,
        type: 'input',
        name: 'last-name',
    },
    {
        id: 3,
        componentType: 'TextField',
        label: 'انتخاب عملیات',
        grid: 3,
        type: 'select',
        name: 'last-name',
        value: [
            {
                id: 1,
                name: 'دهم',
                value: '10'
            },{
                id: 2,
                name: 'یازدهم',
                value: '11'
            },{
                id: 3,
                name: 'دوازدهم',
                value: '12'
            },
        ]
    },
    {
        id: 4,
        componentType: 'TextField',
        label: 'سن',
        grid: 3,
        type: 'calendar',
        name: 'last-name',
    },


]
export const tableComlumnsUser = [
    {field: 'id', headerName: 'ID', width: 30},
    {field: 'firstName', headerName: 'نام', width: 100},
    {field: 'lastName', headerName: 'نام خانوادگی', width: 100},
    {field: 'age', headerName: 'سن', width: 30},
    {
        field: 'fullName',
        headerName: 'نام کامل',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 150,
        valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
    },
];

export const tableRowsUser = [
    {
        id: 1,
        firstName: 'امین',
        lastName: 'محمدی',
        age: 26,
        'father-name': 'احمد',
        'birth-day': new Date(),
        systems: 'test1',
        activity: 'فعال',
        password: 'test',
        actions: ['delete', 'edit'],
    },
    {
        id: 2,
        firstName: 'اکبر',
        lastName: 'محمدی',
        age: 32,
        'father-name': 'عرفان',
        'birth-day': new Date(),
        systems: 'test1',
        activity: 'فعال',
        actions: [],
    },
    {
        id: 3,
        firstName: 'نگین',
        lastName: 'پور مختار',
        age: 53,
        'father-name': 'ستار',
        'birth-day': new Date(),
        systems: 'test1',
        activity: 'غیرفعال',
        actions: ['delete'],
    },
    {
        id: 4,
        firstName: 'علی',
        lastName: 'پور مختار',
        age: 52,
        'father-name': 'ستار',
        'birth-day': new Date(),
        systems: 'test1',
        activity: 'غیرفعال',
        actions: ['delete'],
    },
    {
        id: 5,
        firstName: 'نگار',
        lastName: 'مختاری',
        age: 43,
        'father-name': 'ستار',
        'birth-day': new Date(),
        systems: 'test1',
        activity: 'غیرفعال',
        actions: ['delete'],
    },
    {
        id: 6,
        firstName: 'علی',
        lastName: 'پور تقی',
        age: 23,
        'father-name': 'ستار',
        'birth-day': new Date(),
        systems: 'test1',
        activity: 'غیرفعال',
        actions: ['delete'],
    },
];

export const tableComlumnsRole =[
    {
        id:1,
        label:'نام'
    },{
        id:2,
        label:'نام خانوادگی'
    },{
        id:3,
        label:'نقش'
    },{
        id:4,
        label:'تاریخ'
    },
]
export const tableRowsRole=[
    {
        id:1,
        firstName:'ناصر',
        lastName:'نصرتی',
        role:'معمولی',
        date:'03/01/12',
    },{
        id:2,
        firstName:'قادر',
        lastName:'سجادی پور',
        role:'معمولی',
        date:'03/02/17',
    },{
        id:3,
        firstName:'عباس',
        lastName:'قلی خانی',
        role:'ویژه',
        date:'02/11/01',
    },{
        id:4,
        firstName:'قلی',
        lastName:'بذرپاش',
        role:'ویژه',
        date:'01/03/05',
    },{
        id:5,
        firstName:'زهرا',
        lastName:'ملکوتی',
        role:'معمولی',
        date:'01/06/17',
    },{
        id:6,
        firstName:'فاطمه',
        lastName:'اکبری',
        role:'ادمین',
        date:'99/07/19',
    },
]
export const tableComlumnsOperation =[
    {
        id:1,
        label:'نام'
    },{
        id:2,
        label:'نام خانوادگی'
    },{
        id:3,
        label:'نقش'
    },{
        id:4,
        label:'تاریخ شروع'
    },{
        id:5,
        label:'تاریخ پایان'
    },{
        id:6,
        label:'شرح عملیات'
    },
]
export const tableRowsOperation=[
    {
        id:1,
        firstName:'ناصر',
        lastName:'نصرتی',
        role:'معمولی',
        startDate:'03/01/12',
        endDate:'03/02/13',
        description:'موفق'
    },{
        id:2,
        firstName:'قادر',
        lastName:'سجادی پور',
        role:'معمولی',
        startDate:'03/02/17',
        endDate:'03/03/12',
        description:'موفق'
    },{
        id:3,
        firstName:'عباس',
        lastName:'قلی خانی',
        role:'ویژه',
        startDate:'02/11/01',
        endDate:'02/11/12',
        description:'نا موفق'
    },{
        id:4,
        firstName:'قلی',
        lastName:'بذرپاش',
        role:'ویژه',
        startDate:'01/03/05',
        endDate:'01/04/12',
        description:'نا موفق'
    },{
        id:5,
        firstName:'زهرا',
        lastName:'ملکوتی',
        role:'معمولی',
        startDate:'01/06/17',
        endDate:'02/01/12',
        description:'موفق'
    },{
        id:6,
        firstName:'فاطمه',
        lastName:'اکبری',
        role:'ادمین',
        startDate:'99/07/19',
        endDate:'00/02/18',
        description:'موفق'
    },
]
