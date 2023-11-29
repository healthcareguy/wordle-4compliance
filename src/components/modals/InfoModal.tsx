import { LightBulbIcon } from '@heroicons/react/outline'

import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Spielanleitung" isOpen={isOpen} handleClose={handleClose}>
      <div>
        <p className="text-sm text-gray-500 dark:text-gray-300">
          Es geht darum, ein Wort mit 5 Buchstaben zu erraten, das einen Compliance Bezug aufweist. 
          Sie haben 6 Versuche, um ein Wort zu erraten. Nach jedem Versuch
          ändert sich die Farbe der Kacheln, um anzuzeigen, wie nah Sie dem
          gesuchten Wort sind.
        </p>
      </div>
      <div className="mt-3 inline-block align-middle text-sm text-gray-500 dark:text-gray-300">
        <p>
          <b>Brauchen Sie einen Hinweis?</b> Klicken Sie auf das Symbol{' '}
          <LightBulbIcon className="dark:stroke-whit1 mb-1 inline-block w-6"></LightBulbIcon>
        </p>
      </div>
      <div className="mb-1 mt-4 flex justify-center">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="W"
          status="correct"
        />
        <Cell value="E" isCompleted={true} />
        <Cell value="A" isCompleted={true} />
        <Cell value="R" isCompleted={true} />
        <Cell value="Y" isCompleted={true} />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Der Buchstabe W kommt im Wort vor und steht an der richtigen Stelle.
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell value="P" isCompleted={true} />
        <Cell value="I" isCompleted={true} />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="L"
          status="present"
        />
        <Cell value="O" isCompleted={true} />
        <Cell value="T" isCompleted={true} />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Der Buchstabe L kommt im Wort vor, steht aber an der falschen Stelle.
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell value="V" isCompleted={true} />
        <Cell value="A" isCompleted={true} />
        <Cell value="G" isCompleted={true} />
        <Cell isRevealing={true} isCompleted={true} value="U" status="absent" />
        <Cell value="E" isCompleted={true} />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Der Buchstabe U kommt im gesuchten Wort nicht vor.
      </p>

      <p className="mt-6 text-sm italic text-gray-500 dark:text-gray-300">
        Dies ist eine Open-Source-Version des Wortratespiels „Wordle“ -{' '}
        <a
          href="https://github.com/cwackerfuss/react-wordle"
          className="font-bold underline"
        >
          Schauen Sie sich den Code hier an
        </a>{' '}
      </p>
    </BaseModal>
  )
}
