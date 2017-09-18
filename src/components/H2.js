import styled from 'styled-components'

export default styled.h2`
font-size: 36px;
font-weight: 300;
margin: ${({ margin }) => margin
  ? margin
  : 'initial'};
font-family: ${({ theme }) => theme.headingFont};
color: ${({ color, theme }) => color ? theme[color] : '#000'};
`