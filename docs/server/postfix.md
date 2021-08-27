# Postfix

## Queue

### Queue abfragen

```sh
postqueue -p
```

### Mail aus Queue löschen

```sh
postsuper -d ID
```

Zum Beispiel für Mail mit Queue ID `AD3F816EC1739`:

```sh
postsuper -d AD3F816EC1739
```
