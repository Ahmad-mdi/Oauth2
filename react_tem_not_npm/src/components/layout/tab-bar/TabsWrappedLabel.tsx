import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { routeObject } from "../../Routes/objects/routeObject";
import { useState, useEffect } from "react";

export default function TabsWrappedLabel({ setCurrentPage, currentPage,direction }: any) {
    const [value, setValue] = useState(currentPage);
    const [activeTabs, setActiveTabs] = useState<string[]>([]);

    useEffect(() => {
        setValue(currentPage);
        if (!activeTabs.includes(currentPage)) {
            setActiveTabs([...activeTabs, currentPage]);
        }
    }, [currentPage]);

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
        setCurrentPage(newValue);
    };

    const handleRemoveTab = (path: string) => {
        if (activeTabs.length > 1) {
            const newTabs = activeTabs.filter(tab => tab !== path);
            setActiveTabs(newTabs);
            if (value === path) {
                setCurrentPage(newTabs[0]);
                setValue(newTabs[0]);
            }
        }
    };

    return (
        <Box className={`mt-36 shadow absolute bg-white  rounded-lg ${direction?'right-0':'left-0'} -top-10`} sx={{ width: '100%' }}>
            <Tabs
                className={'rounded-lg'}
                variant="scrollable"
                scrollButtons="auto"
                value={value}
                onChange={handleChange}
                aria-label="wrapped label tabs example"
            >
                {activeTabs.map((path: string) => {
                    const tab = routeObject.find((route: any) => route.path === path);
                    return tab ? (
                        <Tab
                            key={tab.id}
                            value={tab.path}
                            label={
                                <Box display="flex" alignItems="center">
                                    {tab.name}
                                    {activeTabs.length > 1 && (
                                        <IconButton
                                            className={'scale-75'}
                                            size="small"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleRemoveTab(tab.path);
                                            }}
                                        >
                                            <CloseIcon  fontSize="small" className={'absolute right-0'} />
                                        </IconButton>
                                    )}
                                </Box>
                            }
                        />
                    ) : null;
                })}
            </Tabs>
        </Box>
    );
}
