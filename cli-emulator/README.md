# CLI Emulator

A browser-based command-line interface built with vanilla JavaScript. Designed for integration into static websites or portfolio landing pages. No backend required.

---

## 🎯 Purpose

This project simulates a terminal interface within a web page, allowing users to interact with predefined commands in a secure, sandboxed environment. 

---

## 🧱 Features

- Terminal-style UI with blinking cursor and monospace font
- Modular command registry with extensible logic
- Real-time input parsing and output rendering
- Lightweight, frontend-only architecture (no backend)
- Easy integration into existing HTML via container injection

---

## 🧩 Commands

| Command       | Description                                      |
|---------------|--------------------------------------------------|
| `help`        | Lists available commands                         |
| `clear`       | Clears the terminal output                       |
| `echo [text]` | Prints the provided text                         |
| `date`        | Displays current system date and time            |
| `mission`     | (Planned) Returns ops goals and transition path  |
| `gear`        | (Planned) Displays hardware stack and upgrades   |
| `scan`        | (Planned) Simulates scam detection logic         |

> Additional commands can be added via the `commands` object in `script.js`.

---

## 🚀 Integration

To embed this CLI into another site:

1. Add a `<div id="cli-container"></div>` to your target HTML
2. Include `style.css` and `script.js` in your asset pipeline
3. Call `initCLI('cli-container')` after DOM load

```html
<script src="script.js" defer></script>