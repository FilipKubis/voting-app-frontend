import React from 'react'
import styles from './Topnav.module.css'
import Navlink from './Navlink/Navlink'

const Topnav = () => (
  <div className={styles.Topnav} data-testid='Topnav'>
    <Navlink path='/about' text='About' />
    <Navlink path='/elections' text='Election' />
    <Navlink path='/contact' text='Contact' />
  </div>
)

export default Topnav
