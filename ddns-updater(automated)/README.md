Cloudflare DDNS Updater with Systemd & Failover Logic
────────────────────────────────────────────────────────────────────────
“Ever wish your ISP gave you a static IP without charging enterprise rates? Tired of manually updating your DDNS provider every time your public IP changes? Well have I got a setup for you…”

slaps hand on laptop

"...this bad boy automatically checks your public IP and updates Cloudflare for you. And for a limited time — absolutely free99 — it includes a fallback script that lets another PC or Pi take over if your primary updater goes down. Resilience, automation, and modular polish — all in one repo."
────────────────────────────────────────────────────────────────────────
A resilient DDNS update system designed for my homelab environment. This tool securely updates Cloudflare DNS records using a Python script, systemd .service and .timer units, and a fallback Bash wrapper for failover between Pi-hosted and server-hosted instances.

Features:
Cloudflare API integration via secure .env file
Scheduled updates using systemd .timer
Failover logic to switch between Pi and server updater
Modular scripts with clear logging and restart policies
Security-conscious deployment with .env.example and .gitignore

Setup Instructions:

1. Clone the Repo

git clone https://github.com/your-username/ddns-updater.git
cd ddns-updater

2. Configure Environment Variables

cp .env.example .env

Edit .env with your Cloudflare credentials:

CLOUDFLARE_API_TOKEN=your_token_here
DOMAIN_NAME=example.com
RECORD_NAME=subdomain

3. Install Dependencies (Python)

python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt

4. Deploy systemd Units

sudo cp systemd/ddns-updater.service /etc/systemd/system/
sudo cp systemd/ddns-updater.timer /etc/systemd/system/
sudo systemctl enable ddns-updater.timer
sudo systemctl start ddns-updater.timer

Failover Script (Optional)

Use ddns-failover.sh to monitor your Pi and activate the server-side updater if unreachable.

Configuration:

  Update PI_HOST and your-username in the script

    Logs to /var/log/ddns-fallback.log by default

  Usage:

    bash ddns-failover.sh

Design Philosophy:

• Modular scripting
• Secure credential handling
• Clear logging

File Structure:

ddns-updater/
├── automation(systemd)            # Systemd unit files for scheduling
│   ├ dns_updater.service
│   └ dns_updater.timer
│
├── ddns-updater                   # Main application directory
│   ├ ddns                         # Modular Python components
│   │  ├ cloudflare_updater.py        # Handles API interaction
│   │  ├ config_loader.py             # Loads and validates .env config
│   │  └ ip_fetcher.py                # Retreives current public IP
│   │
│   ├ .env.example                 # Template for environment variables
│   ├ main.py                      # Entrypoint script
│   └ requirements.txt             # Python dependencies
│
├── LICENSE
└── README.md

Future Enhancements

1. Add logging to ELK stack
2. Integrate with dashboard status modal
3. Expand failover logic to support multiple nodes