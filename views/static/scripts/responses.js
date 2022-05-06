function getBotResponse(input) {

    input.trim();

    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }
    
    if (input == "how are you ?") {
        return " i am totally fine , what about you ? ";
    }else if (input == "how are you ?") {
        return " i am totally fine , what about you ? ";
    } else if (input == "who are you ?") {
        return "I am EVA , chatbot ask me something !";
    }else if (input == "i am fine") {
        return "oh , great. let's play rock paper scissors !";}
    else {
       
    }
    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Try asking something else!";
    }

    //greetings 
 
}