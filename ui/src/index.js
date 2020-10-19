import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker';
import store from './store'
import App from './App'
import { PersistGate } from 'redux-persist/integration/react'
import persistor from './store/reduxPersist'

render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)

serviceWorker.unregister();
