import styled from 'styled-components'

export default styled.p`
font-size: 16px;
line-height: 1.75;
color: #3b3b3b;
font-family: ${({ theme }) => theme.bodyFont};
text-align: ${({ align }) => align || 'left'};
`