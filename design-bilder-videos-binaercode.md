# Design-Dokument: Wie der Computer Bilder und Videos im Binärcode speichert und anzeigt

**Zielgruppe:** Klasse 8, Informatikunterricht

**Format:** Interaktives Lernspiel als einzelne HTML5-Datei mit integriertem CSS und Vanilla JavaScript

**Status:** Vollständig implementiert; inklusive erweiterter Aufgaben, interaktiver Kapitel-Quizzes und motivierendem Gamification-System (XP, Level, Abzeichen, Sound, Konfetti)

## 1. Lernidee und Lernziele

Die Lernenden entdecken schrittweise, wie aus Bits Bilder und bewegte Bilder werden: **1 Bit → Schwarz-Weiß-Pixel → RGB-Farbe → Bildfolge → Video**. Jede Station verbindet Ausprobieren, sichtbare Rückmeldung und eine kurze Erklärung in einfacher Sprache.

Nach der Bearbeitung können die Lernenden:

- ein einfaches Pixelbild in einen Binärcode übersetzen und aus Binärcode rekonstruieren;
- erklären, dass die Bedeutung von 0 und 1 durch eine vereinbarte Codierung festgelegt wird;
- RGB als Mischung von rotem, grünem und blauem Licht beschreiben;
- zwischen Farbtiefe, Bildgröße in Pixeln und Bildrate unterscheiden;
- die unkomprimierte Datenmenge einfacher Bilder und Videosequenzen berechnen;
- erklären, warum schnelleres Abspielen derselben Bilder nicht automatisch mehr Bewegungsdetails erzeugt.

Vorausgesetzt wird nur: Ein Bit kann den Wert 0 oder 1 haben. Die Stellenwerte einer Binärzahl werden in Modul 2 sichtbar eingeführt.

## 2. Rahmen und Gestaltung

- Vollständig eigenständige HTML-Datei; funktioniert nach dem Herunterladen offline und ohne Installation.
- CSS und JavaScript direkt in der Datei. Keine CDNs, externen Schriften, Bibliotheken, Bilder oder Netzwerkaufrufe.
- Drei gut sichtbare Reiter: **1. Schwarz-Weiß-Pixel · 2. Bunte Farben · 3. Video-Daumenkino**.
- Empfohlene Reihenfolge 1–3; alle Module bleiben jederzeit erreichbar. Beim Wechsel bleiben Arbeitsstände erhalten.
- Pro Modul dieselbe Reihenfolge: **Auftrag → Experiment → Beobachtung → Erklärung → Merksatz**.
- Auf großen Bildschirmen Experiment und Erklärung nebeneinander; auf Tablets und kleinen Displays untereinander. Keine Informationen ausschließlich beim Überfahren mit der Maus.
- Freundliche Farben, ruhiger Hintergrund, gut lesbare Schrift und klarer Fokus auf dem Experiment. Binärcode in einer Monospace-Schrift.
- Keine Anmeldung, Rangliste, Zeitbegrenzung oder dauerhafte Speicherung. Ein Neuladen startet neu.

### Bedienbarkeit und Barrierefreiheit

- Sämtliche Funktionen per Touch, Maus und Tastatur bedienbar; sichtbarer Tastaturfokus.
- Große Bedienelemente mit möglichst mindestens 44 × 44 CSS-Pixeln. Das 8×8-Raster passt sich kleineren Displays an, ohne horizontales Scrollen der gesamten Seite.
- Raster: ein Einstieg per Tab, Navigation per Pfeiltasten, Umschalten per Leertaste oder Eingabetaste. Ansage beispielsweise: „Zeile 2, Spalte 3, Weiß, Bit 1“.
- Reiter mit verständlicher Beschriftung, aktivem Zustand und Tastatursteuerung. Schalter zeigen ihren Zustand als Text und programmatisch an.
- Informationen nie nur durch Farbe oder Ton vermitteln. Rot, Grün und Blau zusätzlich beschriften; Bitwerte und Ergebnisse immer als Text anzeigen.
- Deutlicher Textkontrast, keine Schrift direkt auf dem wechselnden Farbfeld. Schwarze Pixel bleiben durch Rasterlinien erkennbar.
- Statusmeldungen zurückhaltend für Screenreader ausgeben; während der Wiedergabe nicht jeden Frame vorlesen.
- Animation startet nur auf ausdrückliche Betätigung. Pause bleibt erreichbar. Reduzierte Bewegung berücksichtigen; keine blinkenden Erfolgsanimationen. Beispiele vermeiden schnelle, großflächige Hell-Dunkel-Wechsel; Hinweis vor eigener Wiedergabe: „Vermeide stark blinkende Bildfolgen.“
- Sound standardmäßig aus. Globaler Schalter „Ton: aus/an“; kurzer Erfolgston über Web Audio erst nach Nutzerinteraktion. Ohne Audio bleibt jede Aufgabe vollständig lösbar.

## 3. Modul 1: Das Schwarz-Weiß-Raster

**Leitfrage:** Wie können 0 und 1 ein Bild beschreiben?

### Darstellung und Codierung

- Ein interaktives 8×8-Raster mit 64 Pixeln; Zeilen und Spalten sind nummeriert.
- Für dieses Lernspiel gilt ausdrücklich: **0 = Schwarz, 1 = Weiß**. Dies ist eine vereinbarte Zuordnung, keine allgemeingültige Bedeutung der Bits.
- Der vollständige Binärcode steht daneben oder darunter: acht Zeilen mit jeweils acht Bits. Lesereihenfolge: links nach rechts, anschließend nächste Zeile von oben nach unten.
- Die räumliche Zuordnung wird beim Fokussieren eines Pixels durch Markierung des entsprechenden Bits unterstützt.
- Datenanzeige: **8 × 8 Pixel × 1 Bit = 64 Bit = 8 Byte**.
- Kurzer Hinweis: „Damit der Computer das Bild richtig liest, muss er auch Breite, Höhe, Reihenfolge und Bedeutung der Bits kennen.“ Diese Angaben sind im Lernspiel festgelegt.

### Interaktion

- Klick oder Tipp schaltet genau ein Pixel um. Raster und Code aktualisieren sich sofort.
- Ein beschriftetes Code-Eingabefeld erlaubt den umgekehrten Weg: Code eingeben → Bild sehen.
- Leerzeichen und Zeilenumbrüche sind erlaubt; nach deren Entfernung müssen genau 64 Zeichen aus `0` und `1` vorliegen.
- Ein gültiger Code wird sofort ins Raster übernommen. Bei unvollständiger oder ungültiger Eingabe bleibt das zuletzt gültige Bild erhalten; keine stillschweigende Kürzung, Ergänzung oder Entfernung falscher Zeichen.
- Rückmeldung beispielsweise: „Du hast 60 von 64 Bits eingegeben“ oder „Hier sind nur 0, 1, Leerzeichen und Zeilenumbrüche erlaubt.“ Gültiger Zustand: „64 von 64 Bits – Bild aktualisiert“.
- Vorlagen: **Herz**, **Smiley**, **Buchstabe A**; weiße Motive auf schwarzem Hintergrund.
- „Zurücksetzen“ setzt ausschließlich dieses Modul auf 64 schwarze Pixel und einen gültigen Code aus 64 Nullen zurück.

### Lernaufträge und Rückmeldung

1. „Lade das Herz. Ändere genau ein Pixel. Was ändert sich im Code?“
2. „Zeichne deinen Anfangsbuchstaben. Gib den Code an eine andere Person weiter.“
3. Kleine Prüfaufgabe: ein vorgegebenes 8×8-Zielmuster nachbauen. „Prüfen“ vergleicht alle 64 Bits und nennt die Zahl passender Pixel. Ohne Zeitdruck erneut versuchen.

**Merksatz:** „Ein Pixel ist ein Bildpunkt. In unserem Schwarz-Weiß-Bild steht 0 für Schwarz und 1 für Weiß. Das Bild hat 64 Pixel und benötigt 64 Bit für seine Bilddaten.“

## 4. Modul 2: Farbe durch RGB und Farbtiefe

**Leitfrage:** Wie entsteht aus Bits eine Farbe?

### Darstellung

- Ein großes „Lupen-Pixel“ zeigt die gemischte Farbe.
- Drei beschriftete Reihen mit je acht Bit-Schaltern: **Rot (R)**, **Grün (G)**, **Blau (B)**.
- Über den Schaltern stehen von links nach rechts die Stellenwerte **128, 64, 32, 16, 8, 4, 2, 1**. Jeder Schalter zeigt sichtbar 0 oder 1.
- Pro Kanal erscheinen Binärzahl, Dezimalwert und Summe der eingeschalteten Stellenwerte. Beispiel: **10000001 = 128 + 1 = 129**.
- Jeder Kanal reicht von **00000000 = 0** bis **11111111 = 255**. Das sind **256 mögliche Werte**, einschließlich 0.
- Gesamtanzeige: **8 + 8 + 8 = 24 Bit pro Pixel** und **256 × 256 × 256 = 16.777.216 mögliche RGB-Farbwerte**.
- Diese Farbtiefe ist im Modul fest eingestellt. Das Umschalten einzelner Bits ändert den Farbwert, nicht die Farbtiefe.

### Interaktion und Erklärung

- Jeder Bit-Schalter aktualisiert Kanalwert und Lupen-Pixel sofort. Keine zusätzliche Eingabeart nötig.
- Vorlagen erleichtern den Einstieg: Schwarz `(0, 0, 0)`, Rot `(255, 0, 0)`, Gelb `(255, 255, 0)`, Weiß `(255, 255, 255)`.
- Sichtbarer Hinweis: „Wir mischen Licht, keine Wasserfarben. Rotes und grünes Licht ergeben zusammen Gelb. Alle drei Kanäle auf 255 ergeben Weiß; alle auf 0 ergeben Schwarz.“
- Brücke zu Modul 1: **Dasselbe 8×8-Bild benötigt bei 24 Bit pro Pixel 64 × 24 = 1.536 Bit = 192 Byte** – 24-mal so viele reine Bilddaten wie bei 1 Bit pro Pixel.
- „Zurücksetzen“ setzt alle Kanäle auf 0, löscht die Aufgabenrückmeldung und beginnt wieder mit der ersten Farbaufgabe.

### Farb-Rätsel

- Zielfarbe als Farbfeld, Name und fest definierter RGB-Wert anzeigen. Erfolg hängt nicht allein vom visuellen Farbvergleich oder vom Display ab.
- Aufgaben in fester Folge: **Gelb `(255, 255, 0)` → Magenta `(255, 0, 255)` → Cyan `(0, 255, 255)` → Violett `(128, 0, 128)`**.
- „Prüfen“ vergleicht die drei Kanalwerte exakt. Kein unklarer Auftrag wie „Mische irgendein Lila“.
- Bei Abweichungen konkrete Rückmeldung, beispielsweise: „Rot stimmt. Grün muss auf 0. Blau braucht einen höheren Wert.“
- Bei Erfolg erscheinen Text und Symbol; optional kurzer Ton. „Nächste Farbe“ wechselt zur folgenden Aufgabe. Nach der letzten Aufgabe dürfen alle Farben erneut gewählt werden.

**Merksatz:** „Der Computer beschreibt diese Farbe mit Rot, Grün und Blau. Jeder Kanal nutzt 8 Bit. Zusammen sind das 24 Bit pro Pixel.“

## 5. Modul 3: Das digitale Daumenkino

**Leitfrage:** Wie werden einzelne Bilder zu einer Bewegung?

### Darstellung und Bearbeitung

- Vier nummerierte 8×8-Frame-Karten in einer Zeitleiste; „Frame“ wird direkt als „Einzelbild“ erklärt.
- Auswahl einer Karte öffnet diesen Frame in einem großen, bedienbaren 8×8-Raster. Alle vier Bilder bleiben als Vorschau sichtbar. Codierung wie in Modul 1: 1 Bit pro Pixel.
- Eigene Vorschau für die Wiedergabe; aktiver Frame wird in der Zeitleiste markiert.
- Startvorlage: ein heller Punkt, der in vier kleinen Schritten nach rechts wandert. Der Sprung zurück zu Bild 1 ist als Beginn der Wiederholung erkennbar.
- „Vorheriges Bild kopieren“ übernimmt den vorherigen Frame in den ausgewählten Frame; bei Frame 1 deaktiviert. So lassen sich kleine Veränderungen ohne erneutes Zeichnen anlegen.
- „Zurücksetzen“ stoppt die Wiedergabe, lädt die Startvorlage und setzt Auswahl auf Frame 1 sowie Bildrate auf 2 FPS.

### Wiedergabe und Bildrate

- Große Schaltfläche **„Abspielen“ / „Pause“**, außerdem **„Ein Bild weiter“** für schrittweises Betrachten im pausierten Zustand.
- Beschrifteter Schieberegler **„Bilder pro Sekunde (FPS)“**, ganzzahlig von 1 bis 24; aktueller Wert immer sichtbar.
- Wiedergabe wiederholt die vier Frames in gleicher Reihenfolge. Währenddessen ist die Bearbeitung pausiert; „Pause zum Bearbeiten“ erklärt den Zustand.
- Änderungen der FPS wirken sofort. Beim Verlassen des Moduls oder Ausblenden des Browser-Tabs pausiert die Wiedergabe.
- Anzeige der Dauer eines Durchlaufs: **4 ÷ FPS Sekunden**; beispielsweise 4 Sekunden bei 1 FPS und ungefähr 0,167 Sekunden bei 24 FPS.
- Erklärung: „Mehr FPS zeigt mehr Bilder pro Sekunde. Unsere vier Bilder werden dadurch schneller wiederholt. Für feinere Bewegungsschritte brauchen wir zusätzliche unterschiedliche Einzelbilder.“
- Keine Behauptung, dass 24 FPS immer flüssig wirken: Der Eindruck hängt auch vom Motiv und den Unterschieden zwischen den Bildern ab.

### Live-Rechner: Speicherung und Wiedergabe unterscheiden

Die Datenanzeigen verwenden ausschließlich unkomprimierte Schwarz-Weiß-Bilddaten ohne Ton, Dateikopf oder weitere Zusatzinformationen.

- **Ein Einzelbild:** 8 × 8 × 1 = **64 Bit = 8 Byte**.
- **Unsere vier gespeicherten Einzelbilder:** 4 × 64 = **256 Bit = 32 Byte**. Dieser Wert bleibt beim Verändern der FPS gleich.
- **Eine Sekunde als vollständige Bildfolge gespeichert:** FPS × 64 Bit. Bei 24 FPS: 24 × 64 = **1.536 Bit = 192 Byte pro Sekunde**.
- Dazu der Hinweis: „Das Abspielen unserer vier Bilder erzeugt keine neuen gespeicherten Bilder. Der Sekundenwert beschreibt, wie viele Bilddaten anfallen würden, wenn jedes gezeigte Bild vollständig gespeichert würde.“
- Transfer zu Modul 2: „Mit 24-Bit-RGB wären es bei 24 FPS: 8 × 8 × 24 × 24 = 36.864 Bit = 4.608 Byte pro Sekunde.“
- Reale Videos haben meist erheblich mehr Pixel. Kompression kann Daten sparen, etwa durch Nutzung von Ähnlichkeiten. Der Rechner sagt deshalb keine tatsächliche Videodateigröße voraus.

### Lernaufträge

1. „Betrachte die vier Bilder einzeln. Was verändert sich?“
2. „Spiele sie mit 2, 8 und 24 FPS ab. Was passiert mit der Dauer eines Durchlaufs?“
3. „Gestalte vier eigene Bilder mit kleinen Veränderungen.“
4. „Benötigen unsere vier gespeicherten Bilder bei 24 FPS mehr Speicher als bei 2 FPS? Begründe.“ Erwartung: nein, die gespeicherten Bilder bleiben gleich.

**Dynamischer Merksatz:** „Ein Video zeigt Einzelbilder nacheinander. Bei {FPS} FPS werden {FPS} Bilder pro Sekunde gezeigt. Unsere vier Bilder wiederholen sich nach ungefähr {Dauer} Sekunden.“

## 6. Sprachsensibles Lernen und Unterrichtseinsatz

- Kurze Sätze, ein Arbeitsauftrag pro Schritt, Fachbegriff direkt mit Erklärung. Keine langen Erklärungstexte vor dem ersten Experiment.
- Unter jedem Modul steht der vollständige Merksatz zum Ablesen oder Abschreiben. Dynamische Zahlen stimmen mit dem aktuellen Zustand überein.
- Zusätzlich freiwillige Satzanfänge: „Wenn ich dieses Bit ändere, …“, „Gelb entsteht, wenn …“, „Bei höherer Bildrate …“.
- Sichtbares Mini-Glossar: **Bit** = Wert 0 oder 1; **Byte** = 8 Bit; **Pixel** = Bildpunkt; **RGB** = Rot, Grün, Blau; **Farbtiefe** = Anzahl der Bits pro Pixel im verwendeten Farbmodell; **Frame** = Einzelbild; **FPS** = Bilder pro Sekunde.
- Grundaufgaben: Vorlagen verändern, Gelb mischen, FPS vergleichen. Vertiefung: freie Binärcodes, Violett über den Stellenwert 128, RGB-Datenmenge berechnen.
- Vorschlag für 45 Minuten: 5 Minuten Einstieg, je 10 Minuten pro Modul, 10 Minuten Austausch und Sicherung. Bei Bedarf auf zwei Stunden verteilen.
- Abschlussfragen: „Warum braucht ein Farbpixel mehr Bits?“, „Was unterscheidet Farbtiefe und Bildrate?“, „Welche Angaben brauchst du, um die reinen Bilddaten zu berechnen?“

## 7. Technische Umsetzungsvorgaben

- Eine klare Datenquelle je Modul: 64 Bitwerte, drei RGB-Kanalwerte beziehungsweise vier Arrays mit jeweils 64 Bitwerten. Anzeigen werden aus diesen Zuständen abgeleitet.
- Vorlagen verwenden dieselben Zustände und Aktualisierungswege wie Nutzereingaben. Keine voneinander unabhängigen Kopien von Raster und Binärcode.
- Nutzereingaben nur als Text verarbeiten und validieren, niemals als HTML ausführen.
- Semantische HTML-Bedienelemente und CSS Grid/Flexbox nutzen. Kleine Funktionen für Bitdarstellung, Rasteraktualisierung und Datenmengenberechnung reichen aus; kein Framework nötig.
- Wiedergabe zeitbasiert mit `requestAnimationFrame` und verstrichener Zeit steuern, nicht einen Frame pro Browser-Zeichenzyklus weiterschalten. Nur eine Wiedergabeschleife aktiv halten; kein Nachholen großer Zeitsprünge nach einer Pause.
- Ganzzahlen deutsch formatieren. Dauer für die Anzeige auf bis zu drei Nachkommastellen runden, intern nicht mit gerundeten Werten rechnen.
- Zurücksetzen betrifft nur das aktive Modul. Globaler Tonzustand bleibt erhalten.

## 8. Abnahmekriterien

- Datei lässt sich lokal ohne Internet öffnen; alle drei Module funktionieren ohne externe Ressourcen.
- Modul 1: Ein einzelner Pixelwechsel ändert exakt das zugehörige Bit. Ein gültiger Code zeichnet das erwartete Bild; ungültige Eingaben verändern das zuletzt gültige Raster nicht.
- Modul 2: `10000000` ergibt 128, `11111111` ergibt 255. Rot und Grün auf 255 bei Blau 0 ergeben Gelb. Farbtiefe bleibt unabhängig vom Farbwert 24 Bit. Farb-Rätsel erkennt exakte Zielwerte.
- Modul 3: Bei 1 FPS dauert ein Durchlauf ungefähr vier Sekunden, bei 24 FPS ungefähr ein Sechstel einer Sekunde. Pause, Einzelschritt, Kopieren und Modulwechsel verhalten sich wie beschrieben.
- Rechner zeigt bei 24 FPS 1.536 Bit pro Sekunde für 1-Bit-Bilder und unverändert 256 Bit für die vier gespeicherten Frames. RGB-Vergleich ergibt 36.864 Bit pro Sekunde.
- Alle Aufgaben ohne Ton und ohne alleinigen Farbvergleich lösbar; Bedienung per Tastatur und Touch prüfen. Fokus, Beschriftungen und Fehlermeldungen auch mit Screenreader stichprobenartig prüfen.
- Layout auf schmalem Tablet/Display sowie großem Whiteboard prüfen; keine überdeckten Steuerelemente oder abgeschnittenen Lerntexte.
- Bei der späteren Implementierung mindestens einen kleinen ausführbaren Check ohne Testframework für Bit-Reihenfolge, RGB-Stellenwerte und Datenmengenformeln hinterlassen.
- Alle 12 Selbsttests (Code-Rundlauf, Stellenwerte, Datenmengen, Startframes, Muster, Quizzes und Gamification-Konsistenz) bestehen automatisiert ohne Fehler.

## 9. Gamification- & Aufgaben-Erweiterung (Implementierung)

### 9.1 Gamification-Architektur
- **XP-System (Erfahrungspunkte):** Punkte für alle gelösten Aufgaben, Quizzes und Aktionen (Muster lösen: +30 XP, Farb-Mission: +25 XP, Quiz-Frage: +20 XP, Quiz-Bonus: +30 XP, etc.).
- **6 Stufen / Ränge:**
  1. *Pixel-Neuling* (0–99 XP, 🌱)
  2. *Bit-Forscher* (100–249 XP, 🔍)
  3. *RGB-Künstler* (250–449 XP, 🎨)
  4. *Frame-Animator* (450–699 XP, 🎬)
  5. *Daumenkino-Regisseur* (700–999 XP, 🚀)
  6. *Informatik-Großmeister* (1.000+ XP, 👑)
- **9 freischaltbare Abzeichen (Badges):**
  - 🖌️ *Erster Klick:* Erstes Pixel/Bit geändert
  - 🧩 *Muster-Meister:* Mindestens 3 Pixel-Challenges gelöst
  - 🕵️ *Binär-Detektiv:* Geheimen Binärcode entschlüsselt
  - 🌈 *Farb-Alchemist:* Mindestens 5 Zielfarben gemischt
  - 💡 *Stellenwert-Genie:* Exakten Kanal-Zielwert (168) eingestellt
  - 🎬 *Kino-Pionier:* Daumenkino mit 8+ FPS abgespielt
  - ⏱️ *Timing-Profi:* Exakte Bildrate für 1,00s Durchlaufdauer ermittelt
  - 🧮 *Daten-Mathematiker:* Alle 3 Speicher-Rechenaufgaben gelöst
  - 🏆 *Informatik-Diplom:* Alle 3 Kapitel-Quizzes erfolgreich bestanden
- **Interaktives Trophäen-Fenster:** Übersicht aller Abzeichen mit Status und Option zum Neustart.
- **Audio & Effekte:** Synthetisierte Web Audio Töne (Level-Up, Richtig, Falsch, Abzeichen-Triller), Canvas-Konfetti bei Erfolgen, schwebende Toast-Benachrichtigungen.

### 9.2 Aufgaben-Erweiterungen pro Kapitel
- **Kapitel 1:** 5 wählbare Pixel-Challenges (Plus, Schach, Invader, Herz, Diamant), Detektiv-Aufgabe (Pfeil nach oben), Speicherplatz-Rechner für 5 SW-Bilder.
- **Kapitel 2:** 8 Farb-Missionen mit progressiver Schwierigkeit, Stellenwert-Trainer für Kanalwerte (Ziel: 168 = 128 + 32 + 8), Farbbild-Speicherrechner (64 × 3 = 192 Byte).
- **Kapitel 3:** 4 Animations-Vorlagen (Punkt, Hüpfball, Herzschlag, Ladebalken), Eigene Animations-Bewertung, FPS Timing-Labor (Ziel: 4 FPS für 1,00 s), Video-Datenstrom-Rechner (10 FPS × 5 s × 8 Byte = 400 Byte).

### 9.3 Kapitel-Quizzes
- Jedes Kapitel schließt mit einem didaktisch aufbereiteten 4-Fragen-Multiple-Choice-Quiz ab.
- Sofortiges Feedback mit verständlicher Erklärung bei jeder Antwort.
- Punkte-, Sterne- (⭐⭐⭐⭐) und XP-Auswertung sowie Option zur Wiederholung.
