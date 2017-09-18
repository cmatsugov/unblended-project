import React from 'react'
import styled from 'styled-components'
import { Link as _Link } from 'react-router-dom'

const Anchor = styled(_Link)`
text-decoration: none;
color: ${({ theme }) => theme.primary};
font-family: ${({ theme }) => theme.bodyFont};
`

const ExternalAnchor = styled.a`
text-decoration: none;
color: ${({ theme }) => theme.primary};
font-family: ${({ theme }) => theme.bodyFont};
`

export default ({ to, ...props }) =>
  to.indexOf('://') > -1
    ? <ExternalAnchor target="_blank" href={to} {...props} />
    : <Anchor to={to} {...props} />