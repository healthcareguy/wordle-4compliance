import { LightBulbIcon } from '@heroicons/react/outline'

import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Cómo jugar" isOpen={isOpen} handleClose={handleClose}>
      <div>
        <p className="text-sm text-gray-500 dark:text-gray-300">
          Adivina la palabra en 6 intentos. Después de cada adivinanza, el color
          de las fichas. cambiará para mostrar qué tan cerca estuvo su
          suposición de la palabra.
        </p>
      </div>
      <div className="mt-3 inline-block align-middle text-sm text-gray-500 dark:text-gray-300">
        <p>
          <b>¿Necesitas una pista?</b> Haz clic en{' '}
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
        La letra W está en la palabra y en el lugar correcto.
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
        La letra L está en la palabra pero en el lugar equivocado.
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell value="V" isCompleted={true} />
        <Cell value="A" isCompleted={true} />
        <Cell value="G" isCompleted={true} />
        <Cell isRevealing={true} isCompleted={true} value="U" status="absent" />
        <Cell value="E" isCompleted={true} />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        La letra U no está en la palabra en ningún lugar.
      </p>

      <p className="mt-6 text-sm italic text-gray-500 dark:text-gray-300">
        Esta es una versión de código abierto del juego de adivinar palabras que
        todos conocemos y amar -{' '}
        <a
          href="https://github.com/cwackerfuss/react-wordle"
          className="font-bold underline"
        >
          mira el código aquí
        </a>{' '}
      </p>
    </BaseModal>
  )
}
