import classnames from 'classnames'
import { useState } from 'react'

import { getHint, hintsExplanations } from './../../lib/hintsExplanations'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
  width?: number
}

export const HintModal = ({ isOpen, handleClose, width = 400 }: Props) => {
  const [buttonText, setButtonText] = useState('<<<REVEAL>>>')

  const onClick = () => {
    getHint()
    setButtonText(hintsExplanations.hint)
  }
  const styles = {
    transitionDelay: `200ms`,
    width: `${width}px`,
  }

  const classes = classnames(
    'xxshort:h-8 xxshort:w-8 xxshort:text-lg xshort:w-10 xshort:h-10 flex short:h-12 h-14 items-center justify-center rounded mx-0.5 text-lg font-bold cursor-pointer select-none dark:text-white bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 text-white'
  )
  return (
    <BaseModal title="Clue" isOpen={isOpen} handleClose={handleClose}>
      {!hintsExplanations.hintrevealed && (
        <p className="text-sm text-gray-500 dark:text-gray-300">
          Click on the button below to get hint
        </p>
      )}
      <div className="m-3 flex justify-center">
        <button
          style={styles}
          className={classes}
          onClick={onClick}
          id="hintButton"
        >
          {buttonText}
        </button>
      </div>
    </BaseModal>
  )
}
