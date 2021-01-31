# GIT

## Beispiele

Commits, die bei einem Merge von feature/example nach develop kommen würden anzeigen:

```sh
git cherry -v develop feature/example
```

`some.jar` durch die Version von develop ersetzen:

```sh
git checkout develop some.jar
```

Änderungen in einem Commit ansehen:

```sh
git diff {COMMIT}~ {COMMIT}
```

oder

```sh
git diff {COMMIT}^!
```

Branch wechseln

```sh
git checkout {BRANCH}
```

Eine bereits committete Datei wieder heraus nehmen, um sie zu `.gitignore` hinzuzufügen:

```sh
git rm --cached {FILE}
```

Das gleiche für ein Verzeichnis:

```sh
git rm -r --cached {FOLDER}
```

## Branch löschen

Lokalen Branch löschen:

```sh
git branch -d {BRANCH}
```

Remote Branch löschen:

```sh
git push origin --delete {BRANCH}
```

Auf dem Server gelöschte Branches lokal löschen

```sh
git fetch -p
```
