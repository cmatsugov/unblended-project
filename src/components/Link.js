import React from 'react'
import styled from 'styled-components'
import { Link as _Link } from 'react-router-dom'

export const Link = styled(_Link)`
padding: 8px;
border-radius: 3px;
color: #fff;
text-decoration: none;
font-family: ${({ theme }) => theme.bodyFont};
background: ${({ theme }) => theme.primary};
`

export const ExternalLink = styled.a`
padding: 8px;
border-radius: 3px;
color: #fff;
text-decoration: none;
font-family: ${({ theme }) => theme.bodyFont};
background: ${({ theme }) => theme.primary};
`

export default ({ to, ...props }) =>
  to.indexOf('://') > -1
    ? <ExternalLink target="_blank" href={to} {...props} />
    : <Link to={to} {...props} />
