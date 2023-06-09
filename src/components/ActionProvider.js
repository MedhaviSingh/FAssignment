class ActionProvider {
    constructor(
      createChatBotMessage,
      setStateFunc,
      createClientMessage,
      stateRef,
      createCustomMessage,
      ...rest
    ) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
      this.createClientMessage = createClientMessage;
      this.stateRef = stateRef;
      this.createCustomMessage = createCustomMessage;
    }
  
    handleGotIt() {
      const message = this.createChatBotMessage("Hello, Welcome to student info system!");
      this.updateChatbotState(message);
    }
  
    handleNameInput() {
      const message = this.createChatBotMessage("Enter your Name");
      this.updateChatbotState(message);
    }
  
    handleAgeInput() {
      const message = this.createChatBotMessage("Enter your Age");
      this.updateChatbotState(message);
    }
  
    updateChatbotState(message) {
      // Update the chatbot state using the provided setState function
      const newState = this.createChatBotMessage(this.stateRef.current.messages.concat(message));
      this.setState((prevState) => ({
        ...prevState,
        messages: newState,
      }));
    }
  }
  
  export default ActionProvider;
  