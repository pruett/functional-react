import React from 'react'
// import styles from './styles.css'

const Link = ({link}) => {
  return (
    <li><a>{link}</a></li>
  )
}

export default ({header, links}) => {
  return (
    <header>
      <h1>{header}</h1>
      <nav>
        <ul>
          { links.map((link,i) => <Link key={i} link={link} />) }
        </ul>
      </nav>
    </header>
  )
}
