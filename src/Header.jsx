import Link from 'next/link'
import React from 'react'
import styles from "../styles/Header.module.css"

const Header = () => {
  return (
    <header className={styles.container}>
      <Link href="/">Home</Link>
      <Link href="table">Table</Link>
    </header>
  )
}

export default Header