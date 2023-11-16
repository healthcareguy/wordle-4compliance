import { LightBulbIcon } from '@heroicons/react/outline'

import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Como jogar" isOpen={isOpen} handleClose={handleClose}>
      <div>
        <p className="text-sm text-gray-500 dark:text-gray-300">
          Adivinhe a palavra em 6 tentativas. Após cada palpite, a cor mudará
          mostrando o quanto próximo o seu papite está da palavra.
        </p>
      </div>
      <div className="mt-3 inline-block align-middle text-sm text-gray-500 dark:text-gray-300">
        <p>
          <b>Precisa de dica? </b> Clique a{' '}
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
        A letra W está na palavra e na posição correta.
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
        A letra L está na palavra mas em posição errada.
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell value="V" isCompleted={true} />
        <Cell value="A" isCompleted={true} />
        <Cell value="G" isCompleted={true} />
        <Cell isRevealing={true} isCompleted={true} value="U" status="absent" />
        <Cell value="E" isCompleted={true} />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        A letra U não está na palavra.
      </p>

      <p className="mt-6 text-sm italic text-gray-500 dark:text-gray-300">
        Esta é uma versão de código aberto do jogo de advinhação de palavras que
        todos nós conhecemos e amamos -{' '}
        <a
          href="https://github.com/cwackerfuss/react-wordle"
          className="font-bold underline"
        >
          verifique o código aqui
        </a>{' '}
      </p>
    </BaseModal>
  )
}
