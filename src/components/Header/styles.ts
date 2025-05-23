'use client'

import styled from 'styled-components'

export const StyledHeader = styled.header`
    padding: 16px;
    background-color: #131820;
    border-bottom: solid 1px white;

`
export const StyledHeaderItems = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

    a {

        color: white;
        text-decoration: none;
        font-weight: 600;
        transition: all 0.3s;

        &:hover {
            color: #f0f0f0;
            transform: scale(1.1);
        }
    }
`