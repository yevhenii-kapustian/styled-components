'use client'

import styled from 'styled-components'
import Image from 'next/image'

const StyledHome = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`
const StyledHomeText = styled.div``
const StyledHomeTitleCoin = styled(Image)`
  width: 400px;
  height: auto;
  top: 50%;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  filter: drop-shadow(0px 0px 20px #101522);

`
const StyledHomeBackground = styled(Image)`
  width: 100%;
  height: auto;
  object-fit: cover;
`

export default function Home() {
  return (
    <StyledHome>
      <StyledHomeText>
      <StyledHomeTitleCoin src="/coinLogo.png"
                               alt="logo"
                               width={1920} 
                               height={1080}
                               priority
      />
        <StyledHomeBackground  src="/background.jpg"
                               alt="background"
                               width={1920} 
                               height={1080}
                               priority
                               style={{
                                width: "100%",
                                height: "100vh"
                               }}
        />
      </StyledHomeText>
    </StyledHome>
  );
}
