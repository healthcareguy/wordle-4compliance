import { WORDSHINTSEXPLNATIONS } from '../constants/wordlist'
import { solution } from './words'

export type HintsExplanation = {
  hintrevealed: boolean
  hint: string
}

export const hintsExplanations: HintsExplanation = {
  hintrevealed: false,
  hint: '<<<REVEAL>>>',
}

export const getHint = () => {
  if (hintsExplanations.hintrevealed === true) {
    return '<<<REVEAL>>>'
  }
  const wordhintexplanation = WORDSHINTSEXPLNATIONS.filter((whd) => {
    return whd.word === solution.toLowerCase()
  })
  hintsExplanations.hintrevealed = true
  hintsExplanations.hint = wordhintexplanation[0].hint
  return hintsExplanations.hint
}

export const getExplanation = () => {
  const wordhintexplanation = WORDSHINTSEXPLNATIONS.filter((whd) => {
    return whd.word === solution.toLowerCase()
  })
  return wordhintexplanation[0].explanation
}
