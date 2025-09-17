// Wait until the DOM is fully loaded before initializing CLI
document.addEventListener("DOMContentLoaded", () => {
  // Target the div where the CLI will be injected
  const cliContainer = document.getElementById("cli-terminal");

  // Inject CLI HTML structure into the container
  cliContainer.innerHTML = `
  <div class="cli-output" id="cli-output">
    <p>guest@portfolio:~$</p>
    <p>Initializing modules...</p>
    <p>Welcome to my portfolio site. System ready.</p>
    <p>Type <span class="cmd">help</span> to begin.</p>
  </div>
  <div class="cli-input-line">
    <span>guest@portfolio:~$</span>
    <input type="text" class="cli-input" id="cli-input" />
  </div>
`;

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
        appendOutput("Available commands: help, ls, fn-status, projects, contact, ping, clear.");
        appendOutput("Hint: not all commands are visible. Scan deeper.");
        break;
      case "ls":
        appendOutput("field-notes");
        break;
      case "ls /field-notes":
        appendOutput("THM, Home-Lab, Python");
        break;
      case "ls /field-notes/thm":
        appendOutput("Overview, Room_1, Room_2");
        break;
      case "ls /field-notes/home-lab":
        appendOutput("The Portable Core: Asus TUF A15");
        break;
      case "ls /field-notes/python":
        appendOutput("***Directory Empty***")
        break;
      case "projects":
        appendOutput("Opening projects module...");
        appendOutput("Visit /projects.html for full portfolio.");
        break;
      case "fn-status":
        appendOutput("Retrieving Field Notes...");
        setTimeout(() => {
          appendOutput("Field Note Complete: Home-Lab: The Portable Core: Asus TUF A15");
          appendOutput("Home-Lab: The Portable Core: Asus TUF A15");
          appendOutput("THM: Site Overview");
          appendOutput("THM: Room_1");
          appendOutput("THM: Room_2");
          appendOutput("Pending Field Notes:");
        }, 2000);
        setTimeout(() => {
          appendOutput("Loading more...");
        }, 3500);
        setTimeout(() => {
          appendOutput("Python: Mimo Platform Overview & Review");
          appendOutput("Python: Mimo: Python Basics Section Walkthrough");
          appendOutput("Python: Mimo: Types & Comparisons Section Walkthrough");
          appendOutput("Loading more...");
        }, 5000);
        setTimeout(() => {
          appendOutput("Home-Lab: The Home-Lab Backbone: Dell T30");
          appendOutput("Home-Lab: Future Upgrades Planned");
          appendOutput("This is all of the Field Notes posted or currently planned. For more information, visit the Field Notes page.")
        }, 6500);
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
        appendOutput("->Blog: 100% Complete. Ongoing work on future blog posts continue.");
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
            appendOutput("Generating ASCII art... \n");
            appendOutput("      .--.      .--.\n");
            appendOutput("     /    \\    /    \\\n");
            appendOutput("    |  ()  |  |  ()  |\n")
            appendOutput("     \\    /    \\    /\n")
            appendOutput("      `--'      `--'\n")
            appendOutput("   (Not much, but hey, it's something!)");
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
    const outputContainer = document.getElementById("cli-output");
    if (outputContainer) {
      outputContainer.scrollTop = outputContainer.scrollHeight;
  }
}

    
  // Utility to append a line of output to the terminal
  function appendOutput(text) {
    const line = document.createElement("p");
    line.textContent = text;
    output.appendChild(line);
    scrollToBottom(); // keep input line visible
  }
});