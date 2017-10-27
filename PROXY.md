---
layout: default
title: Angular.Schule Proxy-Einstellungen
---

## Proxy-Einstellungen <small></small>

Sofern in deinem Unternehmen der Internetzugang durch einen Proxy realisiert wird, müssen wir noch einige Einstellung setzen. 
Du kannst deine Einstellungen über die Kommandozeile erledigen. 



### Proxy für NPM speichern

Für den Befehl `npm install` benötigen wir Zugriff auf das Internet.  
Führe hierzu folgende drei Befehle aus:

```bash
npm config set proxy http://<username>:<password>@<proxy-server-url>:<port>
npm config set https-proxy http://<username>:<password>@<proxy-server-url>:<port>
npm config set strict-ssl false
```

Die korrekte Ausführung kannst du mit dem Befehl `npm info @angular/core` verifizieren. Besteht eine Verbindung mit dem Internet, so sollte nun eine lange Liste mit Informationen zum Angular-Core Paket erscheinen. Mit `npm config list` siehst du alle aktiven Einstellungen.

### Proxy für GIT speichern

Wir werden ggf. den aktuellen Arbeitsstand aus unserem Github-Repository beziehen.
Die folgenden beiden Befehle setzen den Proxy für GIT. Dies geschieht aber nur für github.com - so veränderst du nicht die generellen Einstellungen.

```bash
git config --global http.https://github.com/.proxy http://<username>:<password>@<proxy-server-url>:<port>
git config --global http.https://github.com/.sslverify false

```

Mit `git config -l` siehst du alle aktiven Einstellungen.

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

Bitte beachte, dass ggf. dein Benutzername und Passwort leicht von anderen Benutzern des Rechners ausgelesen werden können.
Als permanente Lösung empfehlen wir z.B. den [Cntlm Authentication Proxy](http://cntlm.sourceforge.net/) - hier kannst du deine Zugangsdaten verschlüsselt hinterlegen.
