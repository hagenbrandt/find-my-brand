import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from './common/GlobalStyles'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>
  ,
  document.getElementById('root')
);

reportWebVitals();
