import {css} from 'styled-components';

export const StyledButton = (padding = "12px 24px", borderRadius = "12px", border = "solid 1px #1f1643") => css`
    padding: ${padding};
    border-radius: ${borderRadius};
    cursor: pointer;
    border: ${border};
`

export const StyledDisplayCenter = (justify = "center", gap = "16px") => css`
    justify-content: ${justify};
    gap: ${gap};
`