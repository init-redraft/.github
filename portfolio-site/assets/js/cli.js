// Wait until the DOM is fully loaded before initializing CLI
document.addEventListener("DOMContentLoaded", () => {
  // Target the div where the CLI will be injected
  const cliContainer = document.getElementById("cli-terminal");

  // Inject CLI HTML structure into the container
  cliContainer.innerHTML = `
  <div class="cli-output" id="cli-output">
    <p>daniel@portfolio:~$</p>
    <p>Initializing modules...</p>
    <p>Welcome to my portfolio site. System ready.</p>
    <p>Type <span class="cmd">help</span> to begin.</p>
  </div>
  <div class="cli-input-line">
    <span>daniel@portfolio:~$</span>
    <input type="text" class="cli-input" id="cli-input" autofocus />
  </div>
`;
  scrollToBottom();

  // Reference input field and output container
  const input = document.getElementById("cli-input");
  const output = document.getElementById("cli-output");

  // Listen for keypress events on the input field
  input.addEventListener("keydown", function (e) {
    // Trigger command processing when Enter is pressed
    if (e.key === "Enter") {
      const command = input.value.trim(); // Clean up input
      processCommand(command);            // Handle command
      input.value = "";                   // Clear input field
    }
  });

  // Main command processor
  function processCommand(cmd) {
    // Echo the typed command back to the terminal
    const line = document.createElement("p");
    line.textContent = `init-redraft@portfolio:~$ ${cmd}`;
    output.appendChild(line);

    // Match command and respond accordingly
    switch (cmd.toLowerCase()) {
      case "help":
        appendOutput("Available commands: help, projects, contact, ping, clear.");
        appendOutput("Hint: not all commands are visible. Scan deeper.");
        break;
      case "projects":
        appendOutput("Opening projects module...");
        appendOutput("Visit /projects.html for full portfolio.");
        break;
      case "contact":
        appendOutput("📬 Contact Information:");
        appendOutput("Email   : init-redraft@protonmail.com");
        appendOutput("GitHub  : https://github.com/init-redraft");
        appendOutput("Website : https://yourdomain.com");
        break;
      case "ping":
        appendOutput("Yes, I can hear you.")
        break;
      case "status":
        appendOutput("Modules queued for deployment:");
        appendOutput("->Projects: 25% Complete");
        appendOutput("->Home-Lab: 70% Complete");
        appendOutput("->Certifications: 50% Complete");
        appendOutput("->Blog: 90% Complete");
        break;
      case "nmap":
        appendOutput("Scanning open ports...");
        setTimeout(() => {
            appendOutput("Port 22: ssh")
            appendOutput("Port 80: http")
            appendOutput("port 1337: ???")
            appendOutput("Payload detected. Try: whoami, sudo make me a sandwich, hack the planet, coffee, upupdowndownleftrightleftrightba, ascii_art.")
            appendOutput("")
            appendOutput("This is all of the commands...or is it. Curiosity might be rewarded.")
        }, 2000);
        break;
      case "whoami":
            appendOutput("init-redraft = Daniel: Risk Architect | Cyber Security Afficionado | Father of Three | Builder of Modular Realities")
        break;
      case "sudo make me a sandwich":
            appendOutput("Okay. You're the boss. 🥪")
        break;
      case "hack the planet":
            appendOutput("Initializing zero-day... Injecting payload... Just kidding. You're not that reckless.")
        break;
      case "coffee":
            appendOutput("Coffee protocol engaged. Brewing productivity in a cup... ☕")
        break;
      case "upupdowndownleftrightleftrightba":
            appendOutput("Cheat mode unlocked. All modules now run in God Mode. Just kidding. You still have to earn it.")
        break;
      case "ascii_art":
            appendOutput("Generating ASCII art... \n" +
            "      .--.      .--.\n" +
            "     /    \\    /    \\\n" +
            "    |  ()  |  |  ()  |\n" +
            "     \\    /    \\    /\n" +
            "      `--'      `--'\n" +
            "   (Not much, but hey, it's something!)");
        break;
      case "test":
        appendOutput("Do you really doubt my code works?");
        appendOutput("That kinda hurts...")
        break;
      case "404":
        appendOutput("Command not found...or is it?");
        break;
      case "debug":
        appendOutput("Running Diagnostics...");
        appendOutput("All systems nominal.")
        break;
      case "rm -rf/":
        appendOutput("Nice try. Self destruct disabled.")
        break;
      case "clear":
        output.innerHTML = ""; // Wipe terminal output
        break;
      default:
        appendOutput(`Command not found: ${cmd}`);
    }
  }

  // Utility to maintain input line in field of view
  function scrollToBottom() {
  const container = document.getElementById("cli-terminal");
  container.scrollTo({ top: container.scrollHeight, behavior: "smooth" });
}
    
  // Utility to append a line of output to the terminal
  function appendOutput(text) {
    const line = document.createElement("p");
    line.textContent = text;
    output.appendChild(line);
    scrollToBottom(); // keep input line visible
  }
});