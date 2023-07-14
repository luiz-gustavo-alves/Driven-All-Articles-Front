import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import ResetStyle from './styles/ResetStyle'
import GlobalStyle from './styles/GlobalStyle'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ResetStyle />
    <GlobalStyle />
    <App />
  </React.StrictMode>,
)
