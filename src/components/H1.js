import styled from 'styled-components'

export default styled.h1`
font-size: 36px;
font-weight: 300;
font-family: ${({ theme }) => theme.headingFont};
color: ${({ color, theme }) => color ? theme[color] : '#000'};
`