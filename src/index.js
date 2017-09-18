import React from 'react';
import { render } from 'react-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import theme from './theme'
import routes from './routes'
import './styles'
import App from './components/App'

const props = {
  history: createBrowserHistory(),
  routes: routes.map(({ path, name, ...props }) => ({
    path,
    name,
    component: require(`./pages/${name}`).default,
    ...props
  })),
  theme
}
render(<App {...props} />, document.getElementById('root'))
