# Lernspiel: Speichermedien – HDD und SSD

## Ziel und Ablauf

Ein eigenständiges HTML5-Dokument mit integriertem CSS und Vanilla JavaScript. Lernende erkunden vier direkt anwählbare Module und steigern dabei ihre Levelstufe. Die Bedienung funktioniert mit Maus, Tastatur und Touch auf Smartboard und Tablet. Alle sichtbaren Texte, Fragen und Rückmeldungen wechseln jederzeit zwischen Deutsch in einfacher Sprache und Englisch; laufender Spielstand bleibt erhalten.

1. **HDD erkunden:** Eine silbrige Platte dreht sich; ein Schreib-/Lesekopf fährt zur Spur. Lernende speichern `1` oder `0` und sehen die magnetische Ausrichtung. Der Schüttel-Test zeigt eine Warnung zum möglichen Head-Crash. Das Schreiben hat eine wahrnehmbare Verzögerung und ein mechanisches Geräusch.
2. **SSD erkunden:** Ein Raster aus Flash-Zellen zeigt das Einfangen beziehungsweise Entfernen elektrischer Ladung für `1` und `0`. Schreiben wirkt unmittelbar und bleibt leise. Der Schüttel-Test zeigt den Vorteil ohne bewegliche Teile.
3. **Daten-Rennen:** Derselbe Modellauftrag von 1.000 Bits startet für HDD und SSD gleichzeitig. Zwei Fortschrittsbalken und die Bewegung des HDD-Arms machen den Unterschied sichtbar. Ergebnis und Modellzeiten erscheinen erst nach Abschluss; erneuter Start setzt beide Läufe sauber zurück.
4. **Quiz:** Fünf Multiple-Choice-Fragen prüfen Speicherprinzip, Geschwindigkeit, Stoßempfindlichkeit und dauerhafte Speicherung. Jede Antwort erhält sofort verständliche Rückmeldung. Sterne und Erfolgssound belohnen richtige Antworten; am Ende sind Ergebnis und Wiederholung möglich.

## Fortschritt und Erfolge

Level-Fortschritt, Sterne und freigeschaltete Erfolge werden im Browser gespeichert. Ein Erfolg wird nur einmal vergeben; wiederholte Klicks oder Rennen sammeln keine unbegrenzten Punkte. Der Fortschritt bleibt beim Sprachwechsel und Neuladen erhalten. Ein sichtbarer Neustart setzt ihn auf den Anfang zurück. Lernmodule bleiben unabhängig von der Levelstufe zugänglich.

## Fachliche Genauigkeit

Das Spiel zeigt ein **Modell**: „Magnet oben = 1“ und „Magnet unten = 0“ sowie „Ladung in der Zelle = 1“ sind didaktische Zuordnungen, keine allgemeingültige physikalische Codierung aller HDDs oder SSDs. Die Balken und Zeiten des Rennens sind Modellwerte, keine Messung eines echten Geräts. Flash-Speicher und Magnetplatten behalten Daten ohne Strom; ein Strom-aus-Versuch macht dies sichtbar. Eine SSD ist wegen fehlender Mechanik weniger stoßempfindlich, aber nicht zu 100 % gegen Schäden durch Stürze geschützt.

## Abnahme

- Vier Level samt Interaktionen und fünf auswertbaren Fragen funktionieren in einer einzigen HTML-Datei ohne externe Abhängigkeiten.
- Sprachwechsel übersetzt auch dynamische Rückmeldungen und unterbricht weder laufendes Rennen noch Spielstand.
- Wiederholtes Rennen, Quiz-Wiederholung, Speichern, Neuladen und Zurücksetzen liefern konsistenten Fortschritt.
- Tastatur, Touch und reduzierte Bewegung bleiben nutzbar; Töne starten erst nach Nutzeraktion und lassen sich abschalten.

## Prüfung

Der eingebaute Selbsttest läuft in der Browser-Konsole mit `window.storageGame.runSelfChecks()`; beim Öffnen mit `?selftest=1` erscheint sein Ergebnis automatisch in der Konsole. Er prüft die Anzahl und Eindeutigkeit der Missionen, fünf passende Quizfragen, vollständige Sprachschlüssel und vier Level.

Zusätzlich wurde die fertige Seite in Chrome Headless interaktiv geprüft: Sprachwechsel während einer Rückmeldung, Schreiben beider Bitwerte, Strom-aus-Abbruch laufender Aktionen, Datenerhalt nach Strom aus und Neuladen, Rennabschluss und Wiederholung, fünf Quizfragen mit Wiederholung, Fortschritts-Reset, Tastatur und Touch. Desktop- und Mobilansicht hatten keinen horizontalen Überlauf; die Einstellung für reduzierte Bewegung verkürzte die Plattenanimation. Dieser Browserlauf war eine einmalige Abnahme, kein dauerhaft eingebundenes Testsystem.
