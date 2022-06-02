import React, { FC, ReactNode, MouseEvent } from "react";

import { Box, Button as ThemeUibutton } from "theme-ui";

export interface ButtonProps {
    onClick?: (e: MouseEvent<ReactNode>) => void;
    buttonName: any;
    buttonStyles: any;
    disabled?: boolean;
    sx?: any;
}

const Button = (props: ButtonProps) => {
    return (
        <Box>
            <ThemeUibutton
                sx={props.sx}
                style={props.buttonStyles}
                onClick={props.onClick}
                disabled={props.disabled}
            >
                {props.buttonName}
            </ThemeUibutton>
        </Box>
    );
};

export default Button;
