# cURL

- [Homepage](https://curl.haxx.se/)

## Optionen

### HTTP Methode
`-X, --request <command> Specify request command to use`

Beispiel: `-X POST` für einen POST-Request

### Header setzen
`-H, --header <header/@file> Pass custom header(s) to server`

Beispiel: `-H "Content-Type: application/pdf"`

### Mehr Infos ausgeben (verbose)
`-v, --verbose       Make the operation more talkative`

### Datei als Body senden
`--data-binary <data> HTTP POST binary data`

## Beispiele

```sh
curl -X POST -H "Content-Type: application/pdf" --data-binary @test.pdf
```
