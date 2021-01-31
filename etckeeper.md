# etckeeper

- Siehe [c't 20/2018, S. 166](https://www.heise.de/select/ct/2018/20/seite-166)

```sh
apt install git
git config --global user.name "root"
git config --global user.email "root@localhost"
apt install etckeeper
```

Einstellungen in `/etc/etckeeper/etckeeper.conf` prüfen:

```
VCS="git"
HIGHLEVEL_PACKAGE_MANAGER=apt
LOWLEVEL_PACKAGE_MANAGER=dpkg
AVOID_COMMIT_BEFORE_INSTALL=1
```
