export const GAME_TITLE = process.env.REACT_APP_GAME_NAME!

export const WIN_MESSAGES = ['Bom trabalho!', 'Incrível', 'Bem feito!']
export const GAME_COPIED_MESSAGE =
  'Informações do jogo copiadas para a área de transferência'
export const NOT_ENOUGH_LETTERS_MESSAGE = 'Não há letras suficientes'
export const WORD_NOT_FOUND_MESSAGE = 'Palavra não encontrada'
export const HARD_MODE_ALERT_MESSAGE =
  'A versão Hard só pode ser habilitada no início!'
export const HARD_MODE_DESCRIPTION =
  'Quaisquer dicas reveladas deem ser usadas em palpites seguintes'
export const HIGH_CONTRAST_MODE_DESCRIPTION = 'Para visão de cor aprimorada'
export const CORRECT_WORD_MESSAGE = (solution: string) =>
  `A palavra era ${solution}`
export const WRONG_SPOT_MESSAGE = (guess: string, position: number) =>
  `Deve usar ${guess} em posição ${position}`
export const NOT_CONTAINED_MESSAGE = (letter: string) =>
  `Acho que deve conter ${letter}`
export const ENTER_TEXT = 'Enter'
export const DELETE_TEXT = 'Excluir'
export const STATISTICS_TITLE = 'Estatística'
export const GUESS_DISTRIBUTION_TEXT = 'Distribuição de adivinhação'
export const NEW_WORD_TEXT = 'Nova palavra em'
export const SHARE_TEXT = 'Compartilhar'
export const SHARE_FAILURE_TEXT =
  'Não é possível compartilhar os resultados. Este recurso está disponível apenas em contextos seguros (HTTPS), em alguns ou em todos os navegadores compatíveis.'
export const MIGRATE_BUTTON_TEXT = 'Transferir'
export const MIGRATE_DESCRIPTION_TEXT =
  'Clique aqui para transferir suas estatísticas para um novo dispositivo.'
export const TOTAL_TRIES_TEXT = 'Total de tentativas'
export const SUCCESS_RATE_TEXT = 'Taxa de sucesso'
export const CURRENT_STREAK_TEXT = 'Série atual'
export const BEST_STREAK_TEXT = 'Melhor série'
export const DISCOURAGE_INAPP_BROWSER_TEXT =
  'Você está usando um navegador incorporado e pode ter problemas para compartilhar ou salvar seus resultados. Recomendamos que você use o navegador padrão do seu dispositivo.'

export const DATEPICKER_TITLE = 'Escolha uma data anterior'
export const DATEPICKER_CHOOSE_TEXT = 'Escolher'
export const DATEPICKER_TODAY_TEXT = 'Hoje'
export const ARCHIVE_GAMEDATE_TEXT = 'Data do jogo'
