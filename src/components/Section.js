import React from 'react'
import styled from 'styled-components'
import H2 from './H2'
import media from '../media'

const SectionBg = styled.section`
padding: 20px;
background: ${({ background, theme }) => background ? theme.primary : 'none'};
& h1, h2, h3, h4 {
  text-align: center;
  padding: 8px 6px 14px 6px;
}
${props => props.background
? `& h1, h2, h3, h4, p, a {
    color: #fff;
  }
  & p {
    border-color: #fff;    
  }
  & svg {
    fill: #fff !important;
  }
`
: ``}`

const BoxContainer = styled.div`
display: flex;
justify-content: center;
align-contents: flex-start;
${media.mobile`
  flex-flow: row wrap
`}
`

export default ({ title, children, background, ...props }) => (
  <SectionBg background={background} {...props}>
    {title && <H2 color={!background && 'primary'}>{title}</H2>}
    <BoxContainer>{children}</BoxContainer>
  </SectionBg>
)