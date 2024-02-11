import React from 'react'

import { DefinitionResponse, PhoneticType } from '@types'

import styles from './definition-block.module.scss'

export const DefinitionBlock: React.FC<DefinitionResponse> = ({ word, meanings, phonetics, sourceUrls }) => {
  let phoneticsFull: PhoneticType = phonetics[0]

  if (phonetics.length > 0) {
    const [phoneticsWithAudio = phonetics[0]] = phonetics.filter((phonetic) => phonetic.audio !== '')
    phoneticsFull = phoneticsWithAudio
  }

  const playAudio = () => {
    new Audio(phoneticsFull.audio).play()
  }
  return (
    <div className={styles.definition}>
      <div className={styles.definition__info}>
        <div className={styles.definition__text}>
          <h2 className={styles['definition__text-word']}>{word}</h2>
          <p className={styles['definition__text-phonetic']}>{phoneticsFull?.text}</p>
        </div>
        {phoneticsFull && (
          <div className={styles.definition__audio}>
            <span className={styles.audio__button} onClick={playAudio} />
          </div>
        )}
      </div>
      <div className={styles.detail}>
        {meanings.map((item, id) => (
          <article className={styles.detail__item} key={id}>
            <h3 className={styles['detail__item-header']}>{item.partOfSpeech}</h3>
            <ul className={styles['detail__item-list']}>
              {item.definitions.map((definition, id) => (
                <li className={styles['detail__item-text']} key={id}>
                  {definition.definition}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <div className={styles.translated__source}>{sourceUrls[0]}</div>
    </div>
  )
}
