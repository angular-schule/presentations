---
layout: default
title: Angular.Schule Node.js für Mac
---

## Node.js für den Mac einrichten

Wir empfehlen für deinen Mac nicht den offiziellen Node.js-Installer, sondern Homebrew:

1. [Homebrew](https://brew.sh/) installieren
   ```bash
   /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
   ```
2. Node.js installieren:
   ```bash
   brew install node
   ```

Das war's! Viel Spaß mit Node.js.



## Node.js für den Mac aktualisieren

Prüfe zuerst die Versionen:

```bash
node --version
npm --version
```

Die Angular CLI 8 benötigt mindestens Node.js 10.9 oder höher.
Eine bestehende Installation über Homebrew kannst du mit folgenden Befehlen aktualisieren:

```bash
brew update
brew upgrade node
```

Prüfen anschließend wieder die Versionen. Sollte npm nicht aktualisiert worden sein, dann führe aus:

```bash
npm update -g npm
```

