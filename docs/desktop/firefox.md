# Firefox

## Config

### Screenshot Tool deaktivieren

Zwei Alternativen: Nur den Upload oder ganz deaktivieren:

```
user_pref("extensions.screenshots.upload-disabled", true);
user_pref("extensions.screenshots.disabled", true);
```

### Pocket deaktivieren

```
user_pref("extensions.pocket.enabled", false);
```

### Autoplay aus

```
user_pref("media.autoplay.enabled", false);
```

### DRM aus

```
user_pref("media.eme.enabled", false);
```

### Do-Not-Track

```
user_pref("privacy.donottrackheader.enabled", true);
```

### Trackingschutz ein

```
user_pref("privacy.trackingprotection.enabled", true);
```

### Formulare (vor allem Passwörter) erst auf Klick ausfüllen

```
user_pref("signon.autofillForms", false);
```

### localStorage deaktivieren - Vorsicht!

```
user_pref("dom.storage.enabled", false);
```

### indexedDB deaktivieren - Vorsicht!

```
user_pref("dom.indexedDB.enabled", false);
```

### mindestens TLS 1.2

```
user_pref("security.tls.version.min", 3);
```

### Vor unsicheren Verbindungen warnen

```
user_pref("security.insecure_connection_icon.enabled", true);
user_pref("security.insecure_connection_text.enabled", true);
```

### U2F aktivieren

```
user_pref("security.webauth.u2f", true);
```

### First Pary Isolation

siehe [c't 08/2019, S. 180](https://www.heise.de/select/ct/2019/8/seite-180), [ct.de/yrqu](https://ct.de/yrqu)

Aktivieren:

```
user_pref("privacy.firstparty.isolate", true);
```

Reduzieren (z.B. bei Loginproblemen):

```
user_pref("privacy.firstparty.isolate.restrict_opener_access", false);
```

### Zoom

- `toolkit.zoomManager.zoomValues`
- `zoom.maxPercent`
