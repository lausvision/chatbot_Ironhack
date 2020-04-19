// ARRAY WITH CHATBOT REPLIES (STRINGS)
const replies = [
  "Hello, Welcome to IronChat!",
  "Ironhack's coding LAB a day keeps the bugs away!",
  "Thank you for your visit. See you soon!",
  "Goodbye!",
  "Nooo way! Same here!!!",
  "How does that feel on a scale from 1 to 10 ?",
  "Hmmmm ... interesting!",
  "That could be a problem.",
  "Do not go to the bathroom in a dream. It’s a trap!",
  "It does make sense.",
  "Why is that?",
  "Who?"
];

// GET THE DOM ELEMENTS
const chat = document.getElementById("chat");
const messageInput = document.getElementById("message-input");
const sendButton = document.getElementById("message-send-img");

// HELPER FUNCTIONS
function sendMessage() {
  const inputValue = messageInput.value;

  displayMessage(inputValue, "Me");
  messageInput.value = "";
}

function chatbotReply() {
  const randomIndex = Math.floor(Math.random() * replies.length);
  const randomMessage = replies[randomIndex];

  displayMessage(randomMessage, "Chatbot");
}

function displayMessage(message, sender) {
  const tempDiv = document.createElement("div");

  if (sender === "Chatbot") {
    tempDiv.innerHTML = `
  <div class="message">
          <img src="./images/bratz1.jpg" alt="avatar photo" class="avatar" />
          <h3 class="headline">Chatbot</h3>
          <p>${message}</p>
        </div>
  `;
  } else if (sender === "Me") {
    tempDiv.innerHTML = `
  <div class="message align-right">
      <img src="./images/10.png" alt="avatar photo" class="avatar" />
      <h3 class="headline">${sender}</h3>
      <p>${message}</p>
    </div>;
  `;
  }

  const newMessage = tempDiv.children[0];

  chat.appendChild(newMessage);

  if (sender === "Me") {
    //chatbotReply();
    setTimeout(chatbotReply, 2000);
  }

  chat.scrollTop = chat.scrollHeight;
  
}

// EVENT LISTENERS

sendButton.addEventListener("click", function(event) {
  sendMessage();
});

messageInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    sendMessage();
  }
});
