from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
import json
import logging
import os

app = FastAPI()

# Load config.json
with open("config.json") as f:
    config = json.load(f)

cors_config = config.get("cors", {})

# CORS setup using config
app.add_middleware(
    CORSMiddleware,
    allow_origins=cors_config.get("allow_origins", ["*"]),
    allow_credentials=cors_config.get("allow_credentials", True),
    allow_methods=cors_config.get("allow_methods", ["*"]),
    allow_headers=cors_config.get("allow_headers", ["*"]),
)

# Logging
logging.basicConfig(level=logging.INFO)

# Default mode
current_mode = "standard"
available_modes = ["standard", "humorous"]

# Load JSON files dynamically
def load_json(file_name: str, mode: str = "standard"):
    path = f"./data/{mode}/{file_name}"
    if os.path.exists(path):
        with open(path, "r", encoding="utf-8") as f:
            return json.load(f)
    return {}

# Route command to response or logic tree
def route_command(msg: str, mode: str):
    msg = msg.strip().lower()
    responses = load_json("responses.json", mode)
    logic_tree = load_json("logic_tree.json", mode)
    commands = load_json("commands.json", mode)

    # Direct response
    if msg in responses:
        return responses[msg]

    # Command echo (if defined)
    if msg in commands:
        return commands[msg].get("echo", "Command executed.")

    # Logic tree routing
    if msg.startswith("ls"):
        return json.dumps(logic_tree.get("ls", {}), indent=2)

    # Mode toggle
    if msg.startswith("set mode"):
        new_mode = msg.replace("set mode", "").strip()
        if new_mode in available_modes:
            global current_mode
            current_mode = new_mode
            return f"{new_mode.capitalize()} mode activated."
        return "Mode not recognized. Available modes: standard, humorous."

    return "Command not recognized. Try 'help' or 'commands'."

# Mode check endpoint
@app.get("/mode")
def get_mode():
    return {"mode": current_mode}

# Health check
@app.get("/health")
def health_check():
    return {
        "status": "ok",
        "mode": current_mode,
        "version": "1.1.0",
        "author": "init-redraft"
    }

# Main chat endpoint
@app.post("/chat")
async def chat(request: Request):
    data = await request.json()
    msg = data.get("message", "")
    logging.info(f"Received message: {msg}")
    response = route_command(msg, current_mode)
    return {"response": response}