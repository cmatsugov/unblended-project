import React from 'react';
import { render } from 'react-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { Router, Switch, Route, Redirect, NavLink as _NavLink, Link as _Link } from 'react-router-dom';
import styled, { injectGlobal, css } from 'styled-components';

const history = createBrowserHistory();


export const media = {
  mobile: (...args) => css`
    @media (max-width: 480px) {
      ${css(...args)}
    }
  `
}

// Global Styles

injectGlobal`
  * {
    box-sizing: border-box;
  }
  html, body {
    margin: 0;
    padding: 0;
    font-family: helvetica, sans-serif;
  }
`

// Components

const NavBar = styled.nav`
  background: #fff;
  height: 40px;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-flow: row wrap;
  ${media.mobile`
    justify-content: center;
    height: 80px;
  `}
`

const NavLink = styled(_NavLink)`
  color: black;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 12px;
  display: block;
  padding: 10px;
  font-family: Helvetica, Arial, sans-serif;
  transition: all .3s linear;
  &:hover {
    color: violet;

  }
  &.active {
    color: red;
  }
`;

const LogoLink = styled(_NavLink)`
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

const Logo = () => (
  // Update the logo here
  // just copy + paste :)
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 249.21 20.73"><title>Asset 1</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M15.54,0h1.58V11.16q0,4.58-2.39,7.08a8.18,8.18,0,0,1-6.18,2.49,8.21,8.21,0,0,1-6.17-2.46A9.27,9.27,0,0,1,0,11.53V0H1.6V11.47A8,8,0,0,0,3.54,17.2a6.57,6.57,0,0,0,5,2.07,6.57,6.57,0,0,0,5-2.09,8.38,8.38,0,0,0,1.94-5.93Z" /><path d="M50,0V20.46h-1.3L33.15,2.58V20.46H31.57V0h1.34L48.43,17.89V0Z" /><path d="M65,0h4.26a7.9,7.9,0,0,1,5.08,1.41A4.73,4.73,0,0,1,76,5.29a5,5,0,0,1-2.94,4.56q4.73,1,4.73,5.19A4.8,4.8,0,0,1,76,19a7.85,7.85,0,0,1-5,1.47H65Zm1.58,1.32V9.48h2.2q5.58,0,5.58-4.07T68.68,1.32Zm0,9.49v8.33h4.23a6.11,6.11,0,0,0,4-1.13,3.72,3.72,0,0,0,1.36-3q0-4.19-6-4.19Z" /><path d="M92.64,0V19.15h10.12v1.32H91.05V0Z" /><path d="M126.52,0V1.32h-9.58V9.51h9.33v1.33h-9.33v8.31h9.81v1.32h-11.4V0Z" /><path d="M158.65,0V20.46h-1.3L141.79,2.58V20.46h-1.58V0h1.34l15.52,17.89V0Z" /><path d="M173.57,0h7.16q5.43,0,8.3,2.86a10,10,0,0,1,2.86,7.38,10,10,0,0,1-2.83,7.33q-2.83,2.89-8,2.89h-7.44Zm1.58,1.32V19.15h5.77a9.38,9.38,0,0,0,6.61-2.44,8.38,8.38,0,0,0,2.64-6.47,8.5,8.5,0,0,0-2.61-6.43,9.37,9.37,0,0,0-6.75-2.49Z" /><path d="M217.17,0V1.32h-9.58V9.51h9.33v1.33h-9.33v8.31h9.81v1.32H206V0Z" /><path d="M230.88,0H238q5.43,0,8.3,2.86a10,10,0,0,1,2.86,7.38,10,10,0,0,1-2.83,7.33q-2.83,2.89-8,2.89h-7.44Zm1.58,1.32V19.15h5.77a9.38,9.38,0,0,0,6.61-2.44,8.38,8.38,0,0,0,2.64-6.47,8.5,8.5,0,0,0-2.61-6.43,9.37,9.37,0,0,0-6.75-2.49Z" /></g></g></svg>
)

const Hero = styled.div`
  width: 100vw;
  height: calc(100vh - 100px);
  min-height: 300px;
  background-image: url('${({ image }) => image}');
  background-size: cover;
`

const Paragraph = styled.p`
  text-align: ${({ align }) => align || 'left'};
`

const Link = styled(_Link)`
  // this is a comment
  // you can erase this and
  // put styles here
`

// Top Nav

const Navigation = () => (
  <NavBar>
    <LogoLink to="/"><Logo /></LogoLink>
    <NavLink to="/about">about</NavLink>
    <NavLink to="/bios">bios</NavLink>
    <NavLink to="/resources">resources</NavLink>
    <NavLink to="/contact">contact</NavLink>
  </NavBar>
)

// Pages

const Home = () => (
  <div>
    <Navigation />
    <Hero image="http://placekitten.com.s3.amazonaws.com/homepage-samples/408/287.jpg" />
    <h2>Hi, we're Alisha and Chanel.</h2>
    <h3>This is our project.</h3>
    <p>foo foo foo foo foo foof foo foo foo foo foo fooffoo foo foo foo foo fooffoo foo foo foo foo fooffoo foo foo foo foo fooffoo foo foo foo foo foof.</p>
    <Paragraph align="center">
      <Link to="/about">Learn more</Link>
    </Paragraph>
  </div>
)

const About = () => (
  <div>
    <Navigation />
    <h2>About</h2>
    <p>about info here.</p>
  </div>
)

const Bios = () => (
  <div>
    <Navigation />
    <h2>Bios</h2>
    <p>bios info here.</p>
  </div>
)

const Resources = () => (
  <div>
    <Navigation />
    <h2>Resources</h2>
    <p>resources info here.</p>
  </div>
)

const Contact = () => (
  <div>
    <Navigation />
    <h2>Contact</h2>
    <p>contact info here.</p>
  </div>
)

// Router

const App = () => (
  <div>
    <Router history={history}>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/bios" component={Bios} />
        <Route path="/resources" component={Resources} />
        <Route path="/contact" component={Contact} />
        <Route component={Home} />
        <Redirect to="/" />
      </Switch>
    </Router>
  </div>
);




/* ignore this */
render(<App />, document.getElementById('root'));
