import {Box} from "@material-ui/core";
import React from "react";


export function getPropsTabs(index: number) {
    return {
        id: `tab-${index}`,
        'aria-controls': `panel-${index}`,
    };
}

function TabPanel(props: any) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box pt={1}>
                    {children}
                </Box>
            )}
        </div>
    );
}

export default TabPanel