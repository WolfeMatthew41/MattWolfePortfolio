import React from 'react'
import NavbarSof from './NavbarSof'
import '../styles/common.css';
import * as styles from '../styles/mainPage.module.css'

export default function SoftLayout({ children }) {
  return (
    <div className="layout">
        <NavbarSof />
        <div className={styles.mainText}>
            { children }
        </div>
    </div>
  )
}
