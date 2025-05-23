'use client'

import Image from 'next/image';
import { useState, useEffect } from 'react'
import { CoinsItem } from '@/utils/types';
import CartCoins from '../CartCoins';
import {
        StyledCoinsItemsContainer,
        StyledCoinsItems,
        StyledCoinsItemCoin,
        StyledCoinsItemCoinName,
        StyledCoinsItemCoinPrice,
        StyledCoinsItemCoinImage,
        StyledCoinsItemSave,
        StyledCoinsLoadingButton
} from '../CoinsDisplay/styles';


const CoinsDisplay = () => {
    const [coins, setCoins] = useState<CoinsItem[]>([])
    const [saveCoins, setSaveCoins] = useState<CoinsItem[]>([])
    const [visibleCount, setVisibleCount] = useState<number>(15)

    function sortByPriceAscending(items:CoinsItem[]):CoinsItem[] {
        return [...items].sort((a, b) => b.current_price - a.current_price);
    }

    const sortedCoins = sortByPriceAscending(coins)
    const visibleCoins = sortedCoins.slice(0, visibleCount)

    const fetchCoins = async ():Promise<void> => {
        try {
            const API_URL: string = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc';
            const response = await fetch(API_URL)
            const data: CoinsItem[] = await response.json()
            setCoins(data)


        } catch (error) {
            console.log(error);
        }
    }

    const handleLoadingItems = (): void => {
        setVisibleCount(prev => prev + 10)
    }

    const handleSaveItem = (item: CoinsItem): void => {
        const existCoin = saveCoins.find(coin => coin.name === item.name)
        if (!existCoin) {
            setSaveCoins(prev => [...prev, item])
        } else {
            console.log("This Coin exists!")
        }
    }

    const handleRemoveItem = (item: CoinsItem): void => {
        setSaveCoins(prev => prev.filter(coin => coin.name !== item.name))
    }

    useEffect(() => {
        fetchCoins()

        const localCoins = localStorage.getItem("saveLocalCoins")
        if (localCoins) {
            setSaveCoins(JSON.parse(localCoins))
        }

    }, [])

    useEffect(() => {
        if (saveCoins.length > 0) {
            localStorage.setItem("saveLocalCoins", JSON.stringify(saveCoins))
        } else {
            localStorage.removeItem("saveLocalCoins")
        }
    }, [saveCoins])


    return (
        <>
        <StyledCoinsItemsContainer>
            <StyledCoinsItems>
                {visibleCoins.map((coin: CoinsItem) => (
                    <StyledCoinsItemCoin key={coin.id}>
                        <StyledCoinsItemCoinImage>
                            <Image src={coin.image} alt={coin.name} width={300} height={300} priority style={{
                                width: "100px",
                                height: "auto"
                            }}/>
                        </StyledCoinsItemCoinImage>
                        <StyledCoinsItemCoinName>{coin.name}</StyledCoinsItemCoinName>
                        <StyledCoinsItemCoinPrice>{coin.current_price}</StyledCoinsItemCoinPrice>
                        <StyledCoinsItemSave onClick={() => handleSaveItem(coin)}>Save Coin</StyledCoinsItemSave>
                    </StyledCoinsItemCoin>
                ))}
            </StyledCoinsItems>
            {visibleCount < coins.length && (
                <StyledCoinsLoadingButton onClick={handleLoadingItems}>Load More</StyledCoinsLoadingButton>
            )}
        </StyledCoinsItemsContainer>
        <CartCoins handleRemoveCoin={handleRemoveItem} savedCoins={saveCoins} />
        </>
    )
}

export default CoinsDisplay
