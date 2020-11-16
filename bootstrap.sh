#!/bin/sh
apt-get update
apt-get upgrade -y
apt-get install kitty-terminfo rsync git tree unp vim htop moreutils renameutils wget curl
cat <<EOS
Consider:
- disabling SSH password authentication
- shorewall6
- fail2ban
EOS
