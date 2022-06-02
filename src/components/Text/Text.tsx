import React from 'react'
import { Box, Text as ThemiUiText } from 'theme-ui'

const Text = (props: any) => {
    return (
        <Box>
            <ThemiUiText p={props.padding}>
                {props.textName}
            </ThemiUiText>
        </Box>
    )
}

export default Text
