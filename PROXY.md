---
layout: default
title: Angular.Schule Proxy-Einstellungen
---

## Proxy-Einstellungen <small></small>

Sofern in deinem Unternehmen der Internetzugang durch einen Proxy realisiert wird, müssen wir noch einige Einstellungen setzen. 
Du kannst diese Einstellungen über die Kommandozeile erledigen. 



### Schritt 1:<br>Proxy für NPM speichern

Für den Befehl `npm install` benötigen wir Zugriff auf das Internet.  
Führe hierzu folgende drei Befehle aus:

```bash
npm config set proxy http://<username>:<password>@<proxy-server-url>:<port>
npm config set https-proxy http://<username>:<password>@<proxy-server-url>:<port>
npm config set strict-ssl false
```

Die korrekte Ausführung kannst du mit dem Befehl `npm info @angular/core` verifizieren. Besteht eine Verbindung mit dem Internet, so sollte nun eine lange Liste mit Informationen zum Angular-Core-Paket erscheinen. Mit `npm config list` siehst du alle aktiven Einstellungen.

### Alternative zu Schritt 1:<br>Proxy als Umgebungsvariable speichern

*(Hinweis: Für ein normales Projekt mit der Angular CLI ist dieser Schritt nicht notwendig!)*

Theoretisch sollte während eines `npm install` mit den oben genannten Einstellung alles glatt laufen.
Sollte ein sogenanntes *postinstall script* die Proxyeinstellungen dennoch ignorieren, so helfen oft folgende Umgebungsvariablen aus.

```bash
 set HTTP_PROXY=http://<username>:<password>@<proxy-server-url>:<port>
 set HTTPS_PROXY=http://<username>:<password>@<proxy-server-url>:<port>
 set STRICT_SSL=false 
```

Die Umgebungsvariablen stellen eine alte Konvention dar, welche ursprünglich von [curl](https://curl.haxx.se/docs/manual.html) eingeführt wurde. Die Konvention wird vielen Tools berücksichtigt, unter anderem auch von NPM (sofern keine Konfigurationseinstellungen existieren). Durch die Umgebungsvariable `NO_PROXY` kannst du Ausnahmen (komma-separierte Liste von Host-Namen) für die Proxy-Regel definieren. Sofern du diese Option benötigst, solltest du die Umgebungsvariablen gegenüber der NPM-Konfiguration bevorzugen. Hier gibt es nämlich keine Einstellung für eine Ausnahme.


###  Schritt 2:<br>Proxy für Git speichern

Wir werden ggf. den aktuellen Arbeitsstand aus unserem GitHub-Repository beziehen.
Die folgenden beiden Befehle setzen den Proxy für Git. Dies geschieht aber nur für github.com – so veränderst du nicht deine generellen Einstellungen.

```bash
git config --global http.https://github.com/.proxy http://<username>:<password>@<proxy-server-url>:<port>
git config --global http.https://github.com/.sslverify false

```

Mit `git config -l` siehst du alle aktiven Einstellungen.

### Schritt 3:<br>Proxy für Visual Studio Code speichern

Auch unsere IDE benötigt einen Internetzugang. Dieser lässt sich wie folgt setzen:

* File > Preferences > User Settings

```
// Place your settings in this file to overwrite the default settings
{
  "http.proxy": "http://<username>:<password>@<proxy-server-url>:<port>",
  "http.proxyStrictSSL": false
}
``` 

### Ausblick

Bitte beachte, dass ggf. dein Benutzername und Passwort leicht von anderen Benutzern des Rechners ausgelesen werden können.
Als permanente Lösung empfehlen wir z.B. den [Cntlm Authentication Proxy](http://cntlm.sourceforge.net/) – hier kannst du deine Zugangsdaten verschlüsselt hinterlegen.
