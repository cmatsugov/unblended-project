import styled from 'styled-components';
import { NavLink as _NavLink } from 'react-router-dom';

export default styled(_NavLink) `
color: black;
text-decoration: none;
text-transform: uppercase;
font-size: 12px;
display: block;
padding: 4px 10px;
font-family: Helvetica, Arial, sans-serif;
transition: all .3s linear;
&:hover {
  background: ${({ theme }) => theme.highlight};
}
&.active {
  background: ${({ theme }) => theme.highlight};
}
`;
