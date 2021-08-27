# youtube-dl

## Formate auflisten

```sh
youtube-dl -F {URL}
```

oder

```sh
youtube-dl --list-formats {URL}
```

## Download

```sh
youtube-dl -f {format} {URL}
```

oder

```sh
youtube-dl --format {format} {URL}
```

### Download aus Audio und Video zusammensetzen

Oft werden die besten Qualitäten nur als "video only" angeboten. `youtube-dl` kann das Video und die Audiospur getrennt laden und zusammenfügen.

```sh
youtube-dl -f 'bestvideo[ext=mp4]+bestaudio[ext=m4a]/bestvideo+bestaudio' --merge-output-format mp4 {URL}
```
