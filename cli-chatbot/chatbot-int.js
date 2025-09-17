//Defines my backend api endpoint and handles user input/output
const apiUrl = "https://your-backend-url.com/chat"; // Replace with my actual backend URL
const inputField = document.getElementById("cli-input");
const outputArea = document.getElementById("cli-output");

// Function to append messages to the output area
function appendOutput(text, type = "response") {
  const line = document.createElement("div");
  line.className = `cli-line ${type}`;
  line.textContent = text;
  outputArea.appendChild(line);
  outputArea.scrollTop = outputArea.scrollHeight;
}

// Function to send user command to the backend and handle the response
async function sendCommand(command) {
  appendOutput(`> ${command}`, "command");

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: command })
    });

    const data = await response.json();
    appendOutput(data.response);
  } catch (error) {
    appendOutput("Error connecting to chatbot backend.");
    console.error("Chatbot error:", error);
  }
}

// Event listener for Enter key press in the input field
inputField.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const command = inputField.value.trim();
    if (command) {
      sendCommand(command);
      inputField.value = "";
    }
  }
});