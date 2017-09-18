import styled from 'styled-components'

export default styled.h4`
font-size: 18px;
font-weight: 300;
font-family: ${({ theme }) => theme.headingFont};
color: ${({ color, theme }) => color ? theme[color] : '#000'};
`