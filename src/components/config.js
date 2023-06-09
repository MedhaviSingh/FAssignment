import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  initialMessages: [
    createChatBotMessage("Hello, Welcome to student info system!"),
    createChatBotMessage("Enter your Name"),
  ],
};

export default config;
