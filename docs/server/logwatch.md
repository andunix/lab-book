# logwatch

## Mail Server

Falls noch kein Mail Server da ist:

```sh
apt install postfix bsd-mailx
```

## Installation

```sh
apt install logwatch
mv /etc/cron.daily/00logwatch /etc/cron.weekly/
```

In `/etc/cron.weekly/00logwatch'`:

```sh
#/usr/sbin/logwatch --output mail
/usr/sbin/logwatch --output mail --detail Med --range 'between 7 days ago and yesterday'
```
