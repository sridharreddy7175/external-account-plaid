import React from "react";
import { Box, Label } from "theme-ui";


export interface LabelProps {
    name: any
}

const Labelbox = (props: LabelProps) => {
    return (
        <Box pl={5} pr={5}>
            <Label htmlFor={props.name} mt={3} mb={2} style={{ fontWeight: 600 }}>
                {props.name}
            </Label>
        </Box>
    );
};

export default Labelbox;
