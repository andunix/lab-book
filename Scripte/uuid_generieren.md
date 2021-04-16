# UUID auf der Kommandozeile generieren

Um eine zufällige UUID zu generieren wird oft empfohlen, ein "uuidgen" Paket zu installieren.
Es geht aber auch mit Bordmitteln. Python bringt eine UUID-Bibliothek mit.

```bash
echo $(python -c 'import sys,uuid; sys.stdout.write(uuid.uuid4().urn)' | sed 's/^urn:uuid://')
```

Mit folgendem Befehl wird die UUID nicht nur ausgegeben, sondern gleich in die Zwischenablage kopiert.

```bash
python -c 'import sys,uuid; sys.stdout.write(uuid.uuid4().urn)' | sed 's/^urn:uuid://'  | pbcopy && pbpaste && echo
````
