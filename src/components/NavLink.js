import styled from 'styled-components';
import { NavLink as _NavLink } from 'react-router-dom';

export default styled(_NavLink)`
color: black;
text-decoration: none;
text-transform: uppercase;
font-size: 12px;
display: block;
padding: 4px 10px;
transition: all .3s linear;
font-family: ${({ theme }) => theme.bodyFont};
&:hover {
  background: ${({ theme }) => theme.secondary};
}
&.active {
  background: ${({ theme }) => theme.secondary};
}
`;
