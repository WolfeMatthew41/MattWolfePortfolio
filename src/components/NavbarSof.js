import { Link } from 'gatsby'
import React from 'react'
import * as styles from '../styles/navBarStyle.module.css'

export default function NavbarSof() {
  return (
    <nav className={styles.navBarStyle}>
      
      <Link className={styles.navBarLogo} to= "/software">
      <img src='website logo image.png' alt='logo'className={styles.navBarLogo}/>
      </Link>
      <div className='links'>
        <Link className={styles.navBarBtn} to="/software/SoftProjects">Projects</Link>
        <Link className={styles.navBarBtn} to="/resumePage">Resume</Link>
        <Link className={styles.navBarBtn} to="/contactPage">Contact</Link>
      </div>
      <img src='website under navbar.png' alt='underbar' className={styles.navBarUnderBar}/>
    </nav>
  )
}
