import React from 'react'
import NavBar from './NavBar'
import LogoLink from './LogoLink'
import Logo from './Logo'
import NavLink from './NavLink'
import routes from '../routes'

export default () => (
  <NavBar>
    <LogoLink to="/"><Logo /></LogoLink>
    {routes.filter(x => x.navbar).map(({ path, name, title }) =>
      title && <NavLink key={title} to={path} exact>{title || name}</NavLink>
    ).filter(x => x)}
  </NavBar>
)