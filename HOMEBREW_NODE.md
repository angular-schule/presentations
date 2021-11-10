---
layout: default
title: Angular.Schule Node.js für Mac
---

## Node.js für den Mac einrichten

Wir empfehlen für deinen Mac nicht den offiziellen Node.js-Installer, sondern den Paketmanager Homebrew:

1. [Homebrew](https://brew.sh/) installieren (falls noch nicht vorhanden)
   ```bash
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```
2. Node.js installieren:
   ```bash
   brew install node@16
   ```

Das war's – viel Spaß mit Node.js!



## Node.js für den Mac aktualisieren

Prüfe zuerst die Versionen:

```bash
node -v
npm -v
```

Die Angular CLI benötigt mindestens Node.js v12.20.
Wir empfehlen dir jedoch, die aktuelle Long Term Support (LTS) Version einzusetzen (aktuell v16).
Eine bestehende Installation über Homebrew kannst du mit folgenden Befehlen aktualisieren:

```bash
brew update
brew upgrade node@16
```

Prüfen anschließend wieder die Versionen. Sollte NPM nicht aktualisiert worden sein, dann führe aus:

```bash
npm update -g npm
```

Sollte Node nicht mehr auffindbar sein (`command not found: node`) oder weiterhin die falsche Version angezeigt werden, so kannst du dir mit folgendem Befehl alle installierten Versionen anzeigen lassen:

```bash
brew search node
```

Führe anschließend folgende Befehle aus, um die richtige Version zu linken:

```bash
brew unlink node
brew link node@16
```
