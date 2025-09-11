# CLI Chatbot Core

A modular FastAPI-powered chatbot interface designed for recruiter engagement, technicall interviews, and adaptive CLI experiences. Built for clarity, extensibility and the curiosity-driven.

---

## Features

- FastAPI backkend with '/chat' and '/refreshToken' endpoints
- Modular CLI interface with adaptive help menus and hidden command triggers
- JSON-driven interview simulations and easter egg logic
- Responsive CLI UX for immersive terminal ops
- Recruiter-facing enhancements: TryHackMe stats (pending), interactive lab maps (pending) and OneNote manual integration (pending)

---

## Setup

```bash
# Clone the repo
git clone https://github.com/init-redraft/.github/cli-chatbot-cor.git
cd cli-chatbot-core

# Create and active virtual environment
python -m venv venv
source venv/bin/activate # or .\venv\Scripts\activate on Windows

#Install dependencies
pip install -r requirements.txt

# Run the server
python -m uvicorn main:app --reload

## Future Enhancements

- Docker containerization
- OAuth2 token handling
- CLI-to-API bridging with command chaining
- CRT mod animations and recruiter challenge unlocks
- OneNote manual sync for ops documentation

## Author
Daniel (init-redraft) - Cybersecurity afficionado, builder of modular tools and father of three
Github: init-redraft