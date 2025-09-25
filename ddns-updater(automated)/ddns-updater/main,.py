from ddns.config_loader import load_config
from ddns.ip_fetcher import get_public_ip
from ddns.cloudflare_updater import update_dns_record

def main():
  config = load_config()
  ip = get_public_ip()
  if ip:
     update_dns_record(config, ip)
  else:
    print("[Main] Failed to fetch public IP.")

if __name__ == "__main__":
  main()