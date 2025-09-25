import requests

def get_public_ip():
  try:
    response = requests.get('https://api.ipify.org?format=json', timeout=5)
    response.raise_for_status()
    return response.json()["ip"]
  except requests.RequestException as e:
    print(f"[IP Fetch Error] {e}")
    return None