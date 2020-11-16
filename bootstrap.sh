#!/bin/sh
apt-get update
apt-get upgrade -y
apt-get install -y kitty-terminfo rsync git tree unp vim htop moreutils renameutils wget curl
apt clean
cat <<EOS
Consider:
- disabling SSH password authentication
- shorewall6
- fail2ban
EOS
