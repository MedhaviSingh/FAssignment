import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Page1 from './Page1';
import Page3 from './Page3';
import './App.css';
import { Chatbot } from 'react-chatbot-kit';
import ActionProvider from './components/ActionProvider';
import MessageParser from './components/MessageParser';
import config from './components/config';

function App() {
  return (
    <div>

      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/page3" element={<Page3 />} />
      </Routes>
    </div>
  );
}

export default App;
