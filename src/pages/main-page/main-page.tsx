import { useEffect, useState } from 'react'

import { DefinitionBlock, Error, PageLayout, SearchBar } from '@components'
import { DefinitionResponse } from '@types'
import { findWordInDictionary } from '@utils/api'

import styles from './main-page.module.scss'

type ErrorType = {
  title: string
  message: string
  resolution: string
}

export const MainPage = () => {
  const [definition, setDefinition] = useState<DefinitionResponse>()
  const [searchValue, setSearchValue] = useState('')
  const [isError, setIsError] = useState(false)
  const [isFound, setIsFound] = useState(false)
  const [error, setError] = useState<ErrorType>()

  useEffect(() => {
    if (searchValue !== '') {
      findWordInDictionary(searchValue)
        .then((data) => {
          setDefinition(data[0])
          setIsFound(true)
          setIsError(false)
        })
        .catch((e) => {
          setIsFound(false)
          setIsError(true)
          setError(e)
        })
    }
  }, [searchValue])

  return (
    <PageLayout>
      <section className='container section'>
        <SearchBar onSearchClick={setSearchValue} />
        <div className={styles['content-block']}>
          {isError && <Error message={error!.message} title={error!.title} resolution={error!.resolution} />}
          {isFound && (
            <DefinitionBlock
              word={definition!.word}
              phonetics={definition!.phonetics}
              sourceUrls={definition!.sourceUrls}
              meanings={definition!.meanings}
            />
          )}
        </div>
      </section>
    </PageLayout>
  )
}
