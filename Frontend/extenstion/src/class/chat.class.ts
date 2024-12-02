
import AI from './ai.class';
import Human from './human.class';

 class Chat {
  private ai: AI;
  private human: Human;

  constructor(ai: AI, human: Human) {
    this.ai = ai;
    this.human = human;
  }

  public startConversation(): void {
    let humanMessage = this.human.sendMessage("Hello!");
    console.log(humanMessage);

    let aiResponse = this.ai.sendMessage(humanMessage.content);
    console.log(aiResponse);
  }
}

export default Chat



// Example usage:
// const ai = new AI("Copilot");
// const human = new Human("John");
// const chat = new Chat(ai, human);

// chat.startConversation();