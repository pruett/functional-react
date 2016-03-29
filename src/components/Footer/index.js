import React from 'react'
import styles from './styles.css'

export default ({phone}) => {
  return (
    <footer>
      <p className={styles.callUs}>
        {`Call us at: ${phone}`}
      </p>
    </footer>
  )
}
