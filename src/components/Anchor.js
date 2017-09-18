import styled from 'styled-components'
import { Link as _Link } from 'react-router-dom'

export default styled(_Link) `
text-decoration: none;
color: ${({ theme }) => theme.primary};
`