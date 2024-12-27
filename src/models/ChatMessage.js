import User from './User';

class ChatMessage {
    constructor(sender, message) {
        if (!(sender instanceof User)) {
            throw new Error('Sender must be an instance of Usuario');
        }
        this.sender = sender;
        this.message = message;
    }
}

export default ChatMessage;