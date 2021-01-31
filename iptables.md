# iptables

## NAT

- [NAT HOWTO](http://www.netfilter.org/documentation/HOWTO/de/NAT-HOWTO-6.html)

```sh
iptables -A POSTROUTING -o eth0.1 -j SNAT --to-source 10.0.0.1
```

- `eth0.1` ist das ausgehende Interface, zu dem genattet werden soll
- `10.0.0.1` ist die IP-Adresse die für das NAT verwendet werden soll
