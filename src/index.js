// Standard imports
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// Local imports
import vmlApp from './reducers';
import App from './app';
import PageHome from './pages/home';

// Styles
import './style/index.scss';

// Store
const store = createStore(vmlApp);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Route exact path="/" component={PageHome} />
      </App>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
