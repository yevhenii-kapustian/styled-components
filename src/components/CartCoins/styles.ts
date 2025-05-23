'use client'

import styled from 'styled-components'
import { StyledButton, StyledDisplayCenter } from "@/utils/mixins"
import { screens } from '@/utils/breakpoints';

type CartCoinsActive = {
    $active: boolean
}

export const StyledCart = styled.div`
    position: absolute;
    top: 70px;
    right: 0;
    width: 100%;

    @media only screen and (${screens.md}) {
        width: 60%;
    }

    @media only screen and (${screens.bg}) {
        width: 30%;
    }
`
export const StyledCartItemsContainer = styled.div`
    max-height: 50vh;
    overflow-y: scroll;
`
export const StyledCartItems = styled.div<CartCoinsActive>`
    padding: 32px;
    display: ${props => props.$active ? "flex" : "none"};
    flex-direction: column;
    ${StyledDisplayCenter()}
    align-items: stretch;
    min-height: 200px;
    background-color: white;
    border-radius: 0 0 0 5px;

    p, h3 {
        color: black;
    }

    div {
        padding-bottom: 12px;
        display: flex;
        flex-direction: column;
        ${StyledDisplayCenter()};
        align-items: center;
        border-bottom: solid 1px black;

        @media only screen and (${screens.sm}) {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-template-rows: repeat(1, 1fr);
        }
    }
`
export const StyledCoinsContainer = styled.div<CartCoinsActive>` 
    width: ${props => props.$active ? "100%" : "0"};
    height: ${props => props.$active ? "6vh" : "0"};
    background-color: white;
    border-radius: 5px 0 0 0;
`
export const StyledCartLength = styled.p<{$color:boolean}>`
    position: absolute;
    top: 30px;
    right: 40px;
    color: ${props => props.$color ? "black" : "white"}
`
export const StyledCoinsItemRemove = styled.button`
    ${StyledButton()}
`