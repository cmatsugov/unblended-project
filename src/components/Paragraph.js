import styled from 'styled-components'

export default styled.p`
text-align: ${({ align }) => align || 'left'};
`