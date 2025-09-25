import requests

def update_dns_record(config, ip):
  url=f"https://api.cloudflare.com/client/v4/zones/{config['CF_ZONE_ID']}/dns_records/{config['CF_RECORD_ID']}"
  headers = {
    "Authorization": f"Bearer {config['CF_API_TOKEN']}",
    "Content-Type": "application/json"
  }
  data = {
    "type": "A",
    "name": config["CF_RECORD_NAME"],
    "content": ip,
    "ttl": 1,
    "proxied": False
  }

  try:
    response = requests.put(url, headers=headers, json=data)
    response.raise_for_status()
    print(f"[CloudFlare] DNS update to {ip}")
  except requests.RequestException as e:
    print(f"[CloudFlare Error] {e}")
    print(f"[CloudFlare] Status: {response.status_code}, Body: {response.test}")