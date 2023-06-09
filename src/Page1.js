import React, { useState } from 'react';
import { Chatbot } from 'react-chatbot-kit';
import ActionProvider from './components/ActionProvider';
import MessageParser from './components/MessageParser';
import config from './components/config';
const Page1 = () => {
  const [showChatbot, setShowChatbot] = useState(false);

  const pageStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundImage: 'url(max.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const headingStyles = {
    color: 'white',
    fontSize: '24px',
    marginBottom: '20px',
  };

  const buttonStyles = {
    backgroundColor: 'black',
    color: 'white',
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '4px',
    transition: 'background-color 0.3s ease',
  };

  const handleButtonHover = (event) => {
    event.target.style.backgroundColor = 'orange';
  };

  const handleButtonLeave = (event) => {
    event.target.style.backgroundColor = 'black';
  };

  const handleEnrollNow = () => {
    setShowChatbot(true);
  };

  return (
    <div style={pageStyles}>
      <h1 style={headingStyles}>Enter into Student Info System</h1>
      {showChatbot ? (
        <Chatbot
        config={config}
        actionProvider={ActionProvider}
        messageParser={MessageParser}
      />
      ) : (
        <button
          style={buttonStyles}
          onMouseEnter={handleButtonHover}
          onMouseLeave={handleButtonLeave}
          onClick={handleEnrollNow}
        >
          Enroll Now!
        </button>
      )}
    </div>
  );
};

export default Page1;
