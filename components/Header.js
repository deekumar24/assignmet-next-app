import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
      <section className={`${styles.header} d-flex flex-items-end flex-justify-center`}>
          <div className="text-white text-center d-flex flex-items-center flex-col p-10">
              <h1 className={`${styles['header-title']}`}>Lorem ipsum dolor sit amet, consec</h1>
              <p>Aliquam eu malesuada turpis, eu interdum nibh. Etiam tristique erat in ligula consequat malesuada.<br/> Praesent posuere vestibulum neque ac posuere. </p>
        </div>
    </section>
  )
}

export default Header