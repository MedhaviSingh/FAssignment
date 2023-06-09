class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
      const { actionProvider } = this;
  
      if (message.includes("Got it!")) {
        actionProvider.handleGotIt();
      } else if (message.includes("Enter your Name")) {
        actionProvider.handleNameInput();
      } else if (message.includes("Enter your Age")) {
        actionProvider.handleAgeInput();
      } else {
        console.log("Unknown message:", message);
      }
    }
  }
  
  export default MessageParser;
  