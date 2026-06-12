# 🎮🎬 LJL Quiz: Gamer & Culture Challenge

##*Updates*
website als Browser-App verfügbar

## 🚀 Über das Projekt
**LJL Quiz** ist ein modernes, responsives und hochfunktionales Multiple-Choice-Quiz, das Wissen über drei riesige Bereiche abfragt: **Filme, Serien und Videospiele.** Es wurde mit Fokus auf eine erstklassige User Experience (UX) entwickelt.

## ✨ Hauptfunktionen (Was macht dieses Quiz so cool?)
*   **🌐 Responsives Design:** Funktioniert perfekt auf Handy, Tablet und Desktop-PC.
*   **🌙 Dark & Light Mode:** Wechsel zwischen dunklem (High-Tech) und hellem Modus mit einem Klick.
*   **🧠 Spielerlebnis:** Dynamisches Quiz-Ergebnis-Feedback mit kurzer Verzögerung.
*   **🛠️ Developer Console:** Ein diskretes Einstellungsmenü für Entwickler, um den Zustand des Quizs (Score, Index, Theme) in Echtzeit zu überwachen und zu debuggen.

---

## 🕹️ So spielst du das Quiz
1.  Gehe zur Live-Seite: [https://ljl-quiz.github.io/LJL-Quiz/]
2.  Wähle oben im Menü deine Kategorie (Spiele, Serien oder Filme).
3.  Antworte auf die Fragen und sieh dir dein Ergebnis an!

## 💻 Lokale Einrichtung für Entwickler
Wenn du das Projekt lokal testen möchtest, ist es dank der statischen Struktur extrem einfach:
1.  Kopiere den gesamten Code von `index.html` in eine Datei namens `index.html`.
2.  Stelle sicher, dass alle Bilder im Ordner **`/Resources/images/`** liegen und die Dateinamen exakt mit dem Pfad in der `allQuestions`-Liste übereinstimmen.
3.  Öffne die Datei `index.html` einfach doppelt im Browser.

## 🏗️ Architektur & Technologie (Für Entwickler)
Dieses Projekt ist eine **statische Single Page Application (SPA)**, bestehend aus:
*   **Frontend:** HTML5, JavaScript (Vanilla JS), CSS3.
*   **Design/UX:** Responsives Grid-System und themingebundene Variablen (`:root`).
*   **Deployment:** GitHub Pages mit automatisierter Bereitstellung über `static_live_site.yml`.

### 💾 Dateistruktur Übersicht
Die Bilder werden im Ordner `/Resources/images` gespeichert, der Pfad wird in JavaScript als `"Resources/images/[dateiname].jpg"` referenziert. Die `.github/workflows`-Ordner enthalten die Automatisierung für das Deployment.

# passwort für debug tool: adminquiz (muss noch gefixed werden)
debug tool gibt auch lösungen sowie bilder location an

## 📜 Lizenz und Beitrag
Dieses Projekt steht unter der **GNU General Public License v3.0**. Jeder ist frei, den Code zu nutzen, anzupassen und weiterzuverbreiten.

**Bist du interessiert daran mitzumachen?**
1.  Gabeln Sie dieses Repository (`Fork`).
2.  Erstellen Sie einen neuen Branch für Ihre Änderungen.
3.  Fügen Sie Ihren Code hinzu und erstellen Sie einen Pull Request!

---
