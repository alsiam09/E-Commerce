import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ContextApi } from './component/ContextApi.jsx'
import store from './store.js'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextApi>
    <Provider store={store}> 
      <App/>
    </Provider>
  </ContextApi>
)
