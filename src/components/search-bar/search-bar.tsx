import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi'

import styles from './search-bar.module.scss'

interface ISearchBar {
  onSearchClick: (value: string) => void
}
export const SearchBar: React.FC<ISearchBar> = ({ onSearchClick }) => {
  const [searchValue, setSearchValue] = useState('')

  const handleSearchClick = () => {
    onSearchClick(searchValue)
  }
  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearchClick(searchValue)
    }
  }

  return (
    <div className={styles['search-field']}>
      <input
        className={styles['search-field__input']}
        placeholder='Input word...'
        type='text'
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
        onKeyDown={(e) => handleSearchKeyDown(e)}
      />
      <span className={styles['search-field__icon']}>
        <BiSearch onClick={handleSearchClick} />
      </span>
    </div>
  )
}
