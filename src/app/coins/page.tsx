'use client'

import styled from 'styled-components'
import CoinsDisplay from "@/components/CoinsDisplay"

const StyledCoins = styled.div`
    padding: 32px;
`
const StyledCoinsText = styled.div``
const StyledCoinsTextTitle = styled.h1`
    text-align: center;
`

const CoinsPage = () => {
    return(
        <StyledCoins>
            <StyledCoinsText>
                <StyledCoinsTextTitle>Coins</StyledCoinsTextTitle>
            </StyledCoinsText>

            <CoinsDisplay/>
        </StyledCoins>
    )
}

export default CoinsPage 