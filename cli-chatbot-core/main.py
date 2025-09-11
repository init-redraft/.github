from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from app.engine import get_response

app = FastAPI()

# Optional: Allow frontend CLI to hit this API from another domain
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Possibly restrict this later
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/chatbot")
async def chatbot(request: Request):
    data = await request.json()
    mode = data.get("mode")
    category = data.get("category")
    input_text = data.get("input")
    response = get_response(mode, category, input_text)
    return {"response": response}