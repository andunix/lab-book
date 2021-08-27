# SSH

## SSH Client

### Ohne known_hosts

Option ` -o UserKnownHostsFile=/dev/null`, z.B.:

```
ssh -o UserKnownHostsFile=/dev/null example.org
```

### Keep Alive

In der `~/.ssh/config`:

```
Host *
ServerAliveInterval 60
ServerAliveCountMax 2
```

Von [https://daniel-ziegler.com/computer/netzwerk/linux/2018/01/28/SSH-Session-keep-alive/](https://daniel-ziegler.com/computer/netzwerk/linux/2018/01/28/SSH-Session-keep-alive/)

## SSH Server

### Public Key Authentication Only

- Statt ''22222'' einen anderen hohen Port einsetzen

**/etc/ssh/sshd_config**

```
Port 22222
PermitRootLogin without-password
PubkeyAuthentication yes
PasswordAuthentication no
```

- Port auch in `~/my/cfg/ssh/config` anpassen

```
service sshd restart
```

- In einem zweiten Terminal testen
