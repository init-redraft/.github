// Simple CLI Emulator. For call from portfolio website.

function initCLI(containerId) {
  const container = document.getElementById(containerId);
// Basic HTML structure
  container.innerHTML = `
    <div id="terminal">
      <div id="output"></div>
      <div id="input-line">
        <span class="prompt">></span>
        <input type="text" id="cli-input" autofocus />
      </div>
    </div>
  `;

  const input = container.querySelector('#cli-input');
  const output = container.querySelector('#output');
// Define commands
  const commands = {
    help: () => "Available commands: help, clear, echo [text], date",
    clear: () => {
      output.innerHTML = '';
      return '';
    },
    echo: (args) => args.join(' '),
    date: () => new Date().toString(),
  };
// Handle input
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const raw = input.value.trim();
      const [cmd, ...args] = raw.split(' ');
      const result = commands[cmd]?.(args) ?? `Command not found: ${cmd}`;
      if (cmd !== 'clear') {
        output.innerHTML += `> ${raw}\n${result}\n`;
      }
      input.value = '';
    }
  });
}

// Call this after the DOM loads
document.addEventListener('DOMContentLoaded', () => {
  initCLI('cli-container');
});