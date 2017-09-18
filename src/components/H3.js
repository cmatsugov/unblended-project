import styled from 'styled-components'

export default styled.h3`
font-size: 26.5px;
font-weight: 300
font-family: ${({ theme }) => theme.headingFont};
color: ${({ color, theme }) => color ? theme[color] : '#000'};
`