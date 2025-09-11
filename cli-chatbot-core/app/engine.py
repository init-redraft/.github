import random
import json
import os

def load_responses(filename):
    path=os.path.join("app", "responses", filename)
    with open(path, "r") as f:
        return json.load(f)

def get_response(mode, category=None, input_text=None):
    if mode == "sparky":
        responses = load_responses("sparky.json")
        if category:
            return random.choice(responses.get(category, ["Sparky is confused."]))
        else:
            return "choose a category: Windows, Linux, Apple, Android, emotional"

    elif mode == "interview":
        responses = load_responses("interview.json")
        return responses.get(category, "No answer available.")

    elif mode == "easter_egg_hunt":
        responses == load_responses("easter_egg_hunt.json")
        return random.choice(responses)
    
    elif mode == "freeform":
        return parse_freeform(input_text)
    
    return "Invalid mode selected."

def parse_freeform(text):
    keywords = {
        "windows": "windows",
        "linux": "linux",
        "mac": "apple",
        "android": "android",
        "crash": "hardware",
        "slow": "hardware",
        "slow": "software",
        "sad": "emotional",
        "angry": "emotional"
    }

    tokens = text.lower().split()
    for token in tokens:
        if token in keywords:
            return get_response("sparky", keywords[token])

    return "Sparky has no idea what you're talking about. Try again or type 'help'."