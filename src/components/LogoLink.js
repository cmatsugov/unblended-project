import styled from 'styled-components'
import { NavLink as _NavLink } from 'react-router-dom'
import media from '../media'

export default styled(_NavLink)`
display: flex;
align-items: center;
margin-right: auto;
width: 200px;
height: 40px;
padding: 20px;
// width of logo svg
// probably don't change this
& svg {
  width: 100%;
}
// mess around with the logo color here if you want
& svg path {
  // fill: blue;
}
${media.mobile`
  width: 100vw;
  padding: 0 25vw;
`}
`