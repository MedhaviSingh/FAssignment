import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </Router>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
