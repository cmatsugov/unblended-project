import React from 'react'
import styled, { keyframes } from 'styled-components'
import Link from './Link'

const fadeIn = keyframes`
 0% {
   opacity: 0;
   transform: translateY(20px);
 }
 100% {
   opacity: 1;
   transform: none;
 }
`

const Hero = styled.div`
position: relative;
width: 100vw;
min-height: 300px;
background-size: cover;
background-position: ${props => props.position
  ? props.position
  : 'center center'};
height: calc(${props => props.full ? '100vh' : '50vh'} - 40px);
background-image: url('${({ image }) => image}');
`

const HeroContent = styled.div`
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
display: flex;
flex-flow: row wrap;
justify-content: center;
align-items: center;
background: rgba(0, 0, 0, .6);
text-align: center;
animation: ${fadeIn} 1s linear 1 forwards;
& h1, h2, h3, h4, p {
  color: #fff;
}
& h1, h2, h3, h4 {
  text-transform: capitalize;
  text-shadow: 0 2px 3px rgba(0,0,0,1);
}
& ${Link} {
  display: inline-block;
  border: 2px solid #fff;
  background: none;
  margin: 18px;
  padding: 18px;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: all .3s linear;
}
& ${Link}:hover {
  color: #fff;
  transform: translateY(-2px);
  background: ${({ theme }) => theme.primary};
  border-color: ${({ theme }) => theme.primary};
}
`

export default ({ children, ...props }) => (
  <Hero {...props}>
    {children &&
      <HeroContent><div>{children}</div></HeroContent>}
  </Hero>
)