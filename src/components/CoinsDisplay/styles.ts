'use client'

import styled from 'styled-components'
import { StyledButton } from '@/utils/mixins'
import { screens } from '@/utils/breakpoints'

export const StyledCoinsItemsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const StyledCoinsItems = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 32px;
`
export const StyledCoinsItemCoin = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    gap: 8px;

    @media only screen and (${screens.sm}) {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
    }

`
export const StyledCoinsItemCoinName = styled.h3``
export const StyledCoinsItemCoinPrice = styled.p``
export const StyledCoinsItemCoinImage = styled.div``
export const StyledCoinsItemSave = styled.button`
    ${StyledButton()}
`

export const StyledCoinsLoadingButton = styled.button`
    margin-top: 24px;
    width: 50%;
    ${StyledButton()}

    @media only screen and (${screens.sm}) {
        width: 20%;
    }
`