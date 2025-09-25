import os
from dotenv import load_dotenv # type: ignore

def load_config():
  load_dotenv()
  return {
    "CF_API_TOKEN": os.getenv("CF_API_TOKEN"),
    "CF_ZONE_ID": os.getenv("CF_ZONE_ID"),
    "CF_RECORD_ID": os.getenv("CF_RECORD_ID"),
    "CF_RECORD_NAME": os.getenv("CF_RECORD_NAME")
  }