import cn from 'clsx'
import { useEffect, useRef, useState } from 'react'
import { BiChevronDown, BiChevronUp } from 'react-icons/bi'

import styles from './font-switcher.module.scss'

const fontStyles = [
  {
    key: 0,
    value: 'Serif'
  },
  {
    key: 1,
    value: 'Sans Serif'
  },
  {
    key: 2,
    value: 'Mono'
  }
]

const getFontFamily = () => {
  let fontFamily = localStorage.getItem('font-family')
  if (!fontFamily) {
    localStorage.setItem('font-family', 'serif')
    fontFamily = 'serif'
  }

  return fontFamily
}

export const FontSwitcher = () => {
  const [fontFamily, setFontFamily] = useState(getFontFamily)
  const [open, setOpen] = useState(false)

  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }

    const handleDocumentClick = (e: MouseEvent) => {
      handleClickOutside(e)
    }

    document.addEventListener('mousedown', handleDocumentClick)

    return () => {
      document.removeEventListener('mousedown', handleDocumentClick)
    }
  }, []) // Run only once on component mount

  useEffect(() => {
    localStorage.setItem('font-family', fontFamily)
    document.body.setAttribute('font-family', fontFamily)
  }, [fontFamily])

  return (
    <div ref={menuRef}>
      <div className={styles.dropdown__header} onClick={() => setOpen(!open)}>
        <p className={styles.header__text}>{fontFamily}</p>
        {open ? <BiChevronUp /> : <BiChevronDown />}
      </div>
      {open && (
        <ul
          className={cn(styles.dropdown__items, {
            [styles.dropdown__items_showed]: open
          })}
        >
          {fontStyles.map((item) => (
            <li key={item.key} className={styles.item}>
              <button
                className={styles.item__button}
                onClick={() => {
                  setFontFamily(item.value.toLowerCase())
                }}
                type='button'
              >
                {item.value}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
