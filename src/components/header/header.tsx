import cn from 'clsx'
import { useEffect, useState } from 'react'
import { BiBook, BiMoon } from 'react-icons/bi'

import { FontSwitcher } from './font-switcher/font-switcher'

import styles from './header.module.scss'

const getTheme = () => {
  let theme = localStorage.getItem('theme-mode')
  if (!theme) {
    localStorage.setItem('theme-mode', 'light')
    theme = 'light'
  }

  return theme
}

export const Header = () => {
  const [theme, setTheme] = useState(getTheme)

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    localStorage.setItem('theme-mode', theme)
    document.body.setAttribute('theme-mode', theme)
  }, [theme])

  return (
    <header className={cn(styles.header, ['container'])}>
      <div className={styles.header__logo}>
        <BiBook />
      </div>
      <div className={styles.header__settings}>
        <div className={styles['font-switcher__wrapper']}>
          <FontSwitcher />
        </div>
        <div className={styles['mode-switcher']}>
          <input type='checkbox' id='switcher' onClick={toggleTheme} />
          <label htmlFor='switcher'>Toggle Theme</label>
          <BiMoon />
        </div>
      </div>
    </header>
  )
}
