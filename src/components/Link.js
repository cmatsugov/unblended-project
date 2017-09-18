import styled from 'styled-components'
import { Link as _Link } from 'react-router-dom'

export default styled(_Link) `
padding: 8px;
border-radius: 3px;
color: #fff;
text-decoration: none;
background: ${({ theme }) => theme.primary};
`