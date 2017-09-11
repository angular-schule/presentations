---
layout: default
title: Angular.Schule Proxy-Einstellungen
---

## Proxy-Einstellungen <small></small>

Sofern in deinem Unternehmen der Internetzugang durch einen Proxy realisiert wird, müssen wir noch einige Einstellung setzen.  
Du kannst deine Einstellungen direkt in den folgenden Konfigurations-Dateien hinterlegen. 



### Proxy für NPM speichern

Erzeuge/Bearbeite die Datei mit dem Namen `.npmrc` in `%userprofile%` (Windows) bzw. `~/` (Linux) mit folgendem Inhalt:

```
proxy=http://user:pass@proxy
https-proxy=http://user:pass@proxy 

#falls notwendig:
#strict-ssl=false
```

### Proxy für GIT speichern

Erzeuge/Bearbeite die Datei mit dem Namen `.gitconfig` in `%userprofile%` bzw. `~/` (Linux) mit folgendem Inhalt:

```
[http]
    proxy = http://user:pass@proxy

#   falls notwendig:
#   sslVerify = false

[https]
    proxy = http://user:pass@proxy

#   falls notwendig:
#   sslVerify = false
```

### Proxy für Visual Studio Code speichern

Auch unsere IDE benötigt einen Internetzugang. Dieser lässt sich wie folgt setzen:

* File > Preferences > User Settings

```
// Place your settings in this file to overwrite the default settings
{
  "http.proxy": "http://user:pass@proxy",
  "https.proxy": "http://user:pass@proxy",
}


… ggf. auch hier:
   "http.proxyStrictSSL": false

``` 

Bitte beachten, dass ggf. dein Benutzername und Passwort leicht von anderen Benutzern des Rechners ausgelesen werden können.  
Als permanente Lösung empfehlen wir z.B. den [Cntlm Authentication Proxy](http://cntlm.sourceforge.net/) - hier kannst du deine Zugangsdaten verschlüsselt hinterlegen.
