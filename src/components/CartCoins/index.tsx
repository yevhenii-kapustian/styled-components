'use client'

import Image from 'next/image';
import { Coins } from "@phosphor-icons/react";
import { useState } from 'react';
import { CoinsItem } from '@/utils/types';
import {
    StyledCart,
    StyledCartItemsContainer,
    StyledCartItems,
    StyledCoinsContainer,
    StyledCartLength,
    StyledCoinsItemRemove
} from '../CartCoins/styles'

type CartCoinsProps = {
    savedCoins: CoinsItem[],
    handleRemoveCoin: (item: CoinsItem) => void
}

const CartCoins = ({ savedCoins, handleRemoveCoin }: CartCoinsProps) => {
    const [cartItems, setCartItems] = useState<boolean>(false)

    const handleClick = () => {
        setCartItems(prev => !prev)
    }

    return (
        <StyledCart>
            <StyledCoinsContainer $active={cartItems}>
                <Coins size={32} color={cartItems ? "black" : "white"} onClick={handleClick} style={{
                    cursor: "pointer",
                    position: "absolute",
                    top: "10px",
                    right: "20px"
                }} />
                {savedCoins && <StyledCartLength $color={cartItems}>{savedCoins.length}</StyledCartLength>}
            </StyledCoinsContainer>

            <StyledCartItemsContainer>
                <StyledCartItems $active={cartItems}>
                    {savedCoins?.length ? (
                        savedCoins.map((item, index) => (
                            <div key={index}>
                                <Image src={item.image} width={100} height={100} alt={item.name} priority style={{
                                    width: "80px",
                                    height: "auto"
                                }}/>
                                <h3>{item.name}</h3>
                                <p>{item.current_price}</p>
                                <StyledCoinsItemRemove onClick={() => handleRemoveCoin(item)}>Remove</StyledCoinsItemRemove>
                            </div>
                    ))
                ) : (
                    <p>No saved coins</p>
                )}


                </StyledCartItems>

            </StyledCartItemsContainer>
        </StyledCart>
    )
}

export default CartCoins
