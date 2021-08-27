# mitmproxy

- [Homepage](https://mitmproxy.org/)

## Installation

```sh
brew install mitmproxy
```

## Reverse Proxy

```sh
mitmweb --mode reverse:https://www.example.com
```

Das sollte zu folgenden Meldungen führen:

```
Web server listening at http://127.0.0.1:8081/
Proxy server listening at http://*:8080
```

Die Web-Oberfläche ist unter http://127.0.0.1:8081/ zu erreichen. Diese Adresse wird aber normalerweise automatisch im Browser geöffnet.
