// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, {useState} from 'react';
import {FormControl, Input, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import DatePicker from 'react-multi-date-picker';
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

function NewRoleForm({form, etcFragment}: any) {

    const handleRenderFormElement = (item: any) => { // تابع برای رندر کردن عنصر فرم بر اساس نوع
        const [value, setValue] = useState<any>(new Date()); // تعریف استیت برای نگهداری مقدار انتخاب شده در DatePicker
        const [age, setAge] = React.useState(''); // تعریف استیت برای نگهداری مقدار انتخاب شده در Select

        const handleChange = (event: SelectChangeEvent) => { // تابع برای هندل کردن تغییر مقدار Select
            setAge(event.target.value); // تنظیم مقدار جدید انتخاب شده
        };

        // شیء حاوی توابع رندر برای هر نوع عنصر
        const renderers = {
            input: () => ( // تابع رندر برای نوع input
                <Input key={item.id} placeholder={`${item.label} وارد نمایید`} className={'m-3'}/>
            ),
            calendar: () => ( // تابع رندر برای نوع calendar
                <DatePicker
                    calendar={persian}
                    locale={persian_fa}
                    key={item.id}
                    value={value}
                    onChange={setValue}
                />
            ),
            select: () => ( // تابع رندر برای نوع select
                <FormControl variant="standard" sx={{m: 1, minWidth: 120}}>
                    <InputLabel id="demo-simple-select-standard-label">{item.label}</InputLabel>
                    <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={age}
                        onChange={handleChange}
                        label="Age"
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {item.value.map((value: any) => ( // رندر کردن گزینه‌های Select با استفاده از متد map
                            <MenuItem key={value.id} value={value.value}>{value.name}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            )
        };

        // اجرای تابع رندر مربوط به نوع عنصر
        const renderElement = renderers[item.type]; // پیدا کردن تابع رندر برای نوع عنصر
        return renderElement ? renderElement() : null; // اجرای تابع رندر اگر موجود باشد، در غیر این صورت برگرداندن null
    };

    return (
        <div>
            <div className={'flex items-center flex-wrap justify-around'}>
                {form.map((item) => ( // استفاده از متد map برای رندر کردن عناصر فرم بر اساس آرایه form
                    <div key={item.id}>
                        {/*رندر کردن عنصر فرم با استفاده از تابع handleRenderFormElement*/}
                        {handleRenderFormElement(item)}

                    </div>
                ))}
            </div>
            {etcFragment}
        </div>
    );
}

export default NewRoleForm;