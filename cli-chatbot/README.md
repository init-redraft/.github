CLI-Chatbot by init-redraft
I built this to be a modular, tone-aware chatbot to integrate with my CLI Shell on my portfolio page. This project is part of a broader portfolio to demonstrate depth and UX logic. This is phase two. The original JS script can by found under CLI=Chatbot-Core. My intention is to roll out a further iteration in the near future that integrates a locally hosted LLM to manage the CLI chatbot experience.

Project Overview
This chatbot was designed to show logic tree structures. It is a chatbot with a personality switch, like the one I wish my teenage daughter would have. (Just kidding, my daughter is amazing...sassy but amazing.) it supports:
- Flat and nested JSON logic trees
- Tone toggling between standard and humorous modes
- Command simulation with timed output (e.g., nmap)
- Modular file architecture for scalability and clarity
- Responses that blend technical depth with dry wit

Security Considerations

This project uses permissive CORS settings (`allow_origins=["*"]`) by default for local development.  
**In production**, update `chatbot.py` to restrict origins to your deployed frontend domain (e.g., `https://init-redraft.com`) to prevent unauthorized cross-origin requests.

See FastAPI's [CORS documentation](https://fastapi.tiangolo.com/tutorial/cors/) for details.

Directory Structure
cli-chatbot/
├── chatbot.py              # Core Python logic
├── chatbot-int.js          # Frontend interaction layer (optional)
├── README.md               # You're reading it
├── JSON_Structure.MD       # Schema and tone-routing documentation
└── data/
    ├── standard/
    │   ├── responses.json
    │   ├── logic_tree.json
    │   └── commands.json
    └── humorous/
        ├── responses_humor.json
        └── logic_tree_humor.json



Features
- Tone Toggle: Switch between standard and humorous modes via CLI or config flag
- Command Routing: Supports ls, ping, fn-status, projects, contact, and more
- Nested Logic Trees: Simulates directory traversal and shell-style output
- Dark Humor Layer: Optional sarcasm module for emotionally resilient users
- Modular Expansion: Easily add new modes, commands, or response maps

Getting Started
- Clone the repo
- Run chatbot.py
- Interact via CLI or frontend shell
- Toggle tone using set mode humorous or set mode standard

Contact
- Email: init-redraft@protonmail.com
- GitHub: init-redraft
- Website: init-redraft.com

License
This project is licensed under the MIT License. See LICENSE for details.