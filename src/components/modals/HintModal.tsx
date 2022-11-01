import { getHint, hintsExplanations } from './../../lib/hintsExplanations'
import { Key } from './../keyboard/Key'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const HintModal = ({ isOpen, handleClose }: Props) => {
  const onClick = (value: string) => {
    getHint()
  }
  return (
    <BaseModal title="Hint" isOpen={isOpen} handleClose={handleClose}>
      {!hintsExplanations.hintrevealed && (
        <p className="text-sm text-gray-500 dark:text-gray-300">
          Click on the button below to get hint
        </p>
      )}
      <div className="m-3 flex justify-center">
        <Key
          width={280}
          value={hintsExplanations.hint}
          onClick={onClick}
          status="correct"
        />
      </div>
    </BaseModal>
  )
}
