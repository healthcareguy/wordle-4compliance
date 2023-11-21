export const GAME_TITLE = process.env.REACT_APP_GAME_NAME!

export const WIN_MESSAGES = ['Gut gemacht!', 'Eindrucksvoll', 'Bravo!']
export const GAME_COPIED_MESSAGE = 'Spiel in die Zwischenablage kopiert'
export const NOT_ENOUGH_LETTERS_MESSAGE = 'Nicht genug Buchstaben'
export const WORD_NOT_FOUND_MESSAGE = 'Wort nicht gefunden'
export const HARD_MODE_ALERT_MESSAGE =
  'Der Hard Mode kann nur beim Start aktiviert werden!'
export const HARD_MODE_DESCRIPTION =
  'Alle aufgedeckten Hinweise müssen bei nachfolgenden Vermutungen berücksichtigt werden'
export const HIGH_CONTRAST_MODE_DESCRIPTION = 'Für verbessertes Farbsehen'
export const CORRECT_WORD_MESSAGE = (solution: string) =>
  `Das Wort war ${solution}`
export const WRONG_SPOT_MESSAGE = (guess: string, position: number) =>
  `Muss ${guess} in Position ${position} verwenden`
export const NOT_CONTAINED_MESSAGE = (letter: string) =>
  `Vermutung muss ${letter} enthalten`
export const ENTER_TEXT = 'Enter'
export const DELETE_TEXT = 'Löschen'
export const STATISTICS_TITLE = 'Statistiken'
export const GUESS_DISTRIBUTION_TEXT = 'Schätzen Sie die Verteilung'
export const NEW_WORD_TEXT = 'Neues Wort drin'
export const SHARE_TEXT = 'Aktie'
export const SHARE_FAILURE_TEXT =
  'Die Ergebnisse können nicht geteilt werden. Diese Funktion ist nur in sicheren Kontexten (HTTPS) und in einigen oder allen unterstützenden Browsern verfügbar.'
export const MIGRATE_BUTTON_TEXT = 'Überweisen'
export const MIGRATE_DESCRIPTION_TEXT =
  'Klicken Sie hier, um Ihre Statistiken auf ein neues Gerät zu übertragen.'
export const TOTAL_TRIES_TEXT = 'Gesamtzahl der Versuche'
export const SUCCESS_RATE_TEXT = 'Erfolgsrate'
export const CURRENT_STREAK_TEXT = 'Aktuelle Serie'
export const BEST_STREAK_TEXT = 'Beste Serie'
export const DISCOURAGE_INAPP_BROWSER_TEXT =
  'Sie verwenden einen eingebetteten Browser und können Probleme beim Teilen oder Speichern Ihrer Ergebnisse haben. Wir empfehlen Ihnen, lieber den Standardbrowser Ihres Geräts zu verwenden.'

export const DATEPICKER_TITLE = 'Wählen Sie ein vergangenes Datum'
export const DATEPICKER_CHOOSE_TEXT = 'Wählen'
export const DATEPICKER_TODAY_TEXT = 'Heute'
export const ARCHIVE_GAMEDATE_TEXT = 'Spieldatum'
