from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse
import json
import logging

# Logging setup

logging.basicConfig(level=logging.INFO)

# Load response map

with open("responses.json", "r") as f:
    response_map = json.load(f)

# Response logic

def rule_based_response(msg):
    key = msg.lower().strip()
    return response_map.get(key, "I'm still learning, try asking something else.")

def llm_response(msg):
    return "LLM integration not implemented yet."

def generate_response(msg, engine="rule"):
    if engine == "rule":
        return rule_based_response(msg)
    elif engine == "llm":
        return llm_response(msg)  # Placeholder for future LLM logic


# FastAPI app

app = FastAPI()

@app.post("/api/chat")
async def chat_endpoint(request: Request):
    data = await request.json()
    user_message = data.get("message")
    engine = data.get("engine", "rule")

    logging.info(f"Received message: {user_message}")

    reply = generate_response(user_message, engine=engine)
    return JSONResponse(content={"reply": reply})

@app.get("/health")
def health_check(): 
    return {"status": "ok"}