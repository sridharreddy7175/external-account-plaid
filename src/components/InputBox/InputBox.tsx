import React from "react";
import { Box, Input } from "theme-ui";

export interface InputProps {
    name: string;
    type: string;
    value: string;
    onChange: any;
}

const InputBox = (props: InputProps) => {
    return (

        <Box pl={5} pr={5}>
            <Input
                name={props.name}
                type={props.type}
                mb={3}
                style={{ height: "45px" }}
                value={props.value}
                onChange={props.onChange}
            />

            {/* <p style={{ color: "red" }}>{emailError}</p> */}
        </Box>
    );
};

export default InputBox;
