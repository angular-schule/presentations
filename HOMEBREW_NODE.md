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
   brew install node@14
   ```

Das war's – viel Spaß mit Node.js!



## Node.js für den Mac aktualisieren

Prüfe zuerst die Versionen:

```bash
node --version
npm --version
```

Die Angular CLI benötigt mindestens Node.js 12.x.
Eine bestehende Installation über Homebrew kannst du mit folgenden Befehlen aktualisieren:

```bash
brew update
brew upgrade node
```

Prüfen anschließend wieder die Versionen. Sollte NPM nicht aktualisiert worden sein, dann führe aus:

```bash
npm update -g npm
```

