/* start module: translations.de */
$pyjs['loaded_modules']['translations.de'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['translations.de']['__was_initialized__']) return $pyjs['loaded_modules']['translations.de'];
	if(typeof $pyjs['loaded_modules']['translations'] == 'undefined' || !$pyjs['loaded_modules']['translations']['__was_initialized__']) $p['___import___']('translations', null);
	var $m = $pyjs['loaded_modules']['translations.de'];
	$m['__repr__'] = function() { return '<module: translations.de>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'translations.de';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['translations']['de'] = $pyjs['loaded_modules']['translations.de'];
	$m.__track_lines__[1] = 'translations.de.py, line 1:\n    #-*- coding: utf-8 -*-';
	$m.__track_lines__[3] = 'translations.de.py, line 3:\n    lngDe = {';


	$pyjs['track']['module']='translations.de';
	$pyjs['track']['lineno']=1;
	$pyjs['track']['lineno']=3;
	$m['lngDe'] = (function(){try{try{$pyjs['in_try_except'] += 1;
	return $p['dict']([['Save-Continue', 'Speichern & weiter'], ['Save-Close', 'Speichern & schlie\xdfen'], ['Add', 'Hinzuf\xfcgen'], ['Edit', 'Bearbeiten'], ['Clone', 'Klonen'], ['List', 'Liste'], ['Delete', 'L\xf6schen'], ['Reload', 'Neu laden'], ['Preview', 'Vorschau'], ['Close', 'Schlie\xdfen'], ['Abort', 'Abbrechen'], ['Select', 'Ausw\xe4hlen'], ['Select fields', 'Felder ausw\xe4hlen'], ['Select Filter', 'Filter ausw\xe4hlen'], ['Delete them?', 'Wirklich l\xf6schen?'], ['Delete {amt} Entries?', 'Sollen {amt} Eintr\xe4ge gel\xf6scht werden?'], ['Keep', 'Behalten'], ['Directory Name', 'Verzeichnisname'], ['Create directory', 'Neues Verzeichnis erstellen'], ['Create', 'Erstellen'], ['Directory "{name}" created.', 'Das Verzeichnis "{name}" wurde erstellt.'], ['user is logged out', 'Benutzer wurde abgemeldet'], ['Your session was terminated by our server. Perhaps your computer fall asleep and broke connection?\n Please relogin to continue your mission.', 'Die Sitzung wurde beendet. M\xf6glichweise wurde die Verbindung unterbrochen oder der Computer war im Ruhemodus\n Bitte erneut anmelden.'], ['Login', 'Anmelden'], ['The user you choose to login differs from the user vi started with.\nolduser: {user} \nnewuser: {newuser}', 'Der neue Benutzer unterscheidet sich vom aktuell angemeldeten Benutzer.\nalter Benutzer: {user} \nneuer Benutzer: {newuser}'], ['refresh', 'Aktualisieren'], ['relogin success :-)', 'Wiederanmeldung war erfolgreich :)'], ['Revision: {rev}', 'Revision: {rev}'], ['Build Date: {date}', 'Build Datum: {date}'], ['unknown build', 'Unbekannter Build'], ['Yes', 'Ja'], ['No', 'Nein'], ['Ignore', 'Ignorieren'], ['Error parsing Date', 'Datum konnte nicht gelesen werden'], ['Open message center', 'Nachrichten-Center \xf6ffnen'], ['Entry saved!', 'Eintrag wurde gespeichert!'], ['Could not save entry!', 'Eintrag konnte nicht gespeichert werden!'], ['Expand/Collapse', 'Aus-/Einklappen'], ['Dashboard', 'Dashboard'], ['My Files', 'Eigene Dateien'], ['Settings', 'Einstellungen'], ['Logout', 'Abmelden'], ['Currently no entries', 'Es wurden keine Eintr\xe4ge gefunden'], ['Add Node', 'Knoten hinzuf\xfcgen'], ['You cannot drop more than one file here!', 'Es k\xf6nnen nicht mehr als eine Datei hinzugef\xfcgt werden!'], ['Do you want to clone the entire hierarchy?', 'Soll die gesamte Hierarchie geklont werden?'], ['Do you want to clone all subentries of this item?', 'M\xf6chten Sie alle Unterelemente dieses Elements ebenfalls klonen?'], ['The hierarchy will be cloned in the background.', 'Die Hierarchie wird im Hintergrund geklont.'], ['reenter password', 'Passwort wiederholen'], ['Remove', 'Entfernen'], ['Clear', 'L\xf6schen'], ['New', 'Neu'], ['Edit Text', 'Text bearbeiten'], ['Access denied!', 'Zugriff verweigert'], ['An unknown error occurred!', 'Es ist ein unbekannter Fehler aufgetreten'], ['An error occurred: {code}', 'Es ist ein Fehler aufgetreten: {code}'], ["The module '{module}' does not exist.", "Es existiert kein Modul mit dem Namen '{module}'."], ['Redo the last undone action', 'Wiederholen'], ['Undo the last action', 'R\xfcckg\xe4ngig'], ['Bold', 'Fett'], ['Italic', 'Kursiv'], ['Underline', 'Unterstreichen'], ['Strike through', 'Durchstreichen'], ['H1', 'H1'], ['H2', 'H2'], ['H3', 'H3'], ['H4', 'H4'], ['H5', 'H5'], ['H6', 'H6'], ['Blockqoute', 'Zitat'], ['Justifiy Center', 'Zentrieren'], ['Justifiy Left', 'Links ausrichten'], ['Justifiy Right', 'Rechts ausrichten'], ['Insert an ordered List', 'Sortierte Liste'], ['Insert an unordered List', 'Unsortierte Liste'], ['Indent more', 'Weiter einr\xfccken'], ['Indent less', 'Weniger einr\xfccken'], ['Remove all formatting', 'Gesamte Formatierung l\xf6schen'], ['Insert Image', 'Bild einf\xfcgen'], ['Insert Link', 'Hyperlink einf\xfcgen'], ['Rows', 'Spalten'], ['Cols', 'Zeilen'], ['Insert Table Header', 'Tabellenkopf einf\xfcgen'], ['Insert Table', 'Tabelle einf\xfcgen'], ['Insert Table Row before', 'neue Zeile davor'], ['Insert Table Row after', 'neue Zeile danach'], ['Insert Table Col before', 'neue Spalte davor'], ['Insert Table Col after', 'neue Spalte danach'], ['Remove Table Row', 'Zeile l\xf6schen'], ['Remove Table Col', 'Spalte l\xf6schen'], ['Save', 'Speichern'], ['URL', 'URL'], ['New window', 'Neues Fenster'], ['Width', 'Breite'], ['Keep aspect ratio', 'Seitenverh\xe4ltnis beibehalten'], ['Height', 'H\xf6he'], ['Title', 'Title'], ['Flip View', 'Quellcode- / Textansicht wechseln'], ['Text Editor', 'Text Editor'], ['Search', 'Suche'], ['Fulltext search', 'Volltext Suche'], ['Extended Search', 'Erweiterte Suche'], ['Apply', '\xdcbernehmen'], ['Cancel', 'Abbruch'], ['Select all', 'Alle ausw\xe4hlen'], ['Unselect all', 'Auswahl entfernen'], ['Invert selection', 'Auswahl umkehren'], ['{items} items had been selected', '{items} Eintr\xe4ge wurden selektiert'], ['{items} items had been unselected', '{items} Eintr\xe4ge wurden deselektiert'], ['{added} items selected, {removed} items deselected', '{added} Eintr\xe4ge selektiert, {removed} Eintr\xe4ge deselektiert'], ['Any changes will be lost. Do you really want to abort?', 'Alle \xc4nderungen gehen verloren. M\xf6chten Sie wirklich abbrechen?'], ['Run', 'Ausf\xfchren'], ['Start', 'Starten'], ['Task completed', 'Aufgabe erledigt'], ['Mark payed', 'Als bezahlt markieren'], ['Do you really want to mark {count} orders as payed?', 'M\xf6chten Sie wirklich {count} Bestellungen als bezahlt markieren?'], ['{count} orders had been successfully set as payed.', '{count} Bestellungen wurden erfolgreich auf bezahlt gesetzt.'], ['Failed to mark order payed', 'Bezahlt setzen der Bestellung fehlgeschlagen'], ['Mark sent', 'Als versendet markieren'], ['Do you really want to mark {count} orders as sent?', 'M\xf6chten Sie wirklich {count} Bestellungen als versendet markieren?'], ['{count} orders had been successfully set as sent.', '{count} Bestellungen wurden erfolgreich auf versendet gesetzt.'], ['Failed to mark order sent', 'Versendet setzen der Bestellung fehlgeschlagen'], ['Mark canceled', 'Stornieren'], ['Do you really want to cancel {count} orders?', 'M\xf6chten Sie wirklich {count} Bestellungen stornieren?'], ['{count} orders had been successfully canceled.', '{count} Bestellungen wurden erfolgreich storniert.'], ['Failed to cancel order', 'Stornierung der Bestellung fehlgeschlagen'], ['Language selection', 'Sprachauswahl'], ['Encoding', 'Zeichensatz'], ['and {count} more', 'und {count} weitere'], ['vi.login.title', 'Login'], ['vi.login.handler.userpassword', 'Benutzer'], ['username', 'Benutzername'], ['password', 'Kennwort'], ['login', 'Einloggen'], ['one time password', 'OTP-Token'], ['verify', 'Authentifizieren'], ['vi.login.handler.googleaccount', 'Google'], ['login with google', 'Mit Google einloggen'], ['the viur server (v{server.version}) is incompatible to this vi (v{vi.version}).', 'Die Version des verwendeten ViUR servers (v{server.version}) ist inkompatibel mit diesem Vi (v{vi.version}).'], ['please update either your server or vi!', 'Bitte aktualisieren Sie entweder den Server oder das Vi!'], ['version mismatch', 'Versionen stimmen nicht \xfcberein'], ['retry', 'Nochmal versuchen'], ['the connection to the server could not be correctly established.', 'Es konnte keine Verbindung zum Server aufgebaut werden.'], ['communication error', 'Verbindungsfehler']]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})();
	return this;
}; /* end translations.de */


/* end module: translations.de */


