#!/bin/bash

PI_HOST="192.168.1.256"  # Replace with your Pi's IP address
SERVICE="dns-updater.service"
TIMER="dns-updater.timer"
MAX_RETRIES=3
RETRY_INTERVAL=10  # seconds
LOGFILE="/var/log/ddns-fallback.log"

log() {
  echo "$(date '+%Y-%m-%d %H:%M:%S') - $1" >> "$LOGFILE"
}

log "[Failover] Starting fallback check..."

for i in $(seq 1 $MAX_RETRIES); do
  if ping -c 1 -W 2 "$PI_HOST" >/dev/null; then
    log "[Failover] Pi is reachable. Checking DNS updater status..."

    if ssh -o ConnectTimeout=5 your-username@"$PI_HOST" "systemctl is-active --quiet dns_updater"; then
      log "[Failover] Pi's DNS updater is active. Disabling server updater..."

      sudo systemctl stop "$SERVICE"
      sudo systemctl disable "$SERVICE"
      sudo systemctl stop "$TIMER"
      sudo systemctl disable "$TIMER"
      exit 0
    else
      log "[Failover] Pi reachable but DNS updater inactive. Keeping server active."
      exit 0
    fi
  else
    log "[Failover] Attempt $i: Pi unreachable. Retrying in $RETRY_INTERVAL seconds..."
    sleep "$RETRY_INTERVAL"
  fi
done

log "[Failover] Pi unreachable after $MAX_RETRIES attempts. Activating server updater..."

sudo systemctl enable "$SERVICE"
sudo systemctl start "$SERVICE"
sudo systemctl enable "$TIMER"
sudo systemctl start "$TIMER"