import React from 'react'
import styles from './Services.module.css'
import Image from 'next/image'

const Services = () => {
  return (
    <section className={styles.services}>
          <div className={styles.row}>
              <div className={`${styles.column} d-flex flex-items-end flex-row ${styles['benifit-item']}`}>
                  <div className="d-flex flex-col">
                      <span className={`${styles['plus-icon']}`}>
                          <Image className={`${styles['plus-icon-default']}`} src="/assets/icons/plus.png" width="27" height="27" alt=""/>
                          <Image className={`${styles['plus-icon-hover']}`} src="/assets/icons/plus-hover.png" width="27" height="27" alt=""/>
                      </span>
                          <h3 className="text-white">Financial statements</h3>
                      <p className={`${styles['benifit-details']} text-white text-sm`}>Morbi purus libero, elementum nec gravida ac, commodo at erat. Etiam porta ipsum sed diam aliquam, rutrum tincidunt metus mattis.Morbi purus libero, Morbi purus libero, elementum nec </p>
                  </div>
              </div>
              <div className={`${styles.column} d-flex flex-items-end flex-row ${styles['benifit-item']}`}>
                  <div className="d-flex flex-col">
                      <span className={`${styles['plus-icon']}`}>
                          <Image className={`${styles['plus-icon-default']}`} src="/assets/icons/plus.png" width="27" height="27" alt="" />
                          <Image className={`${styles['plus-icon-hover']}`} src="/assets/icons/plus-hover.png" width="27" height="27" alt="" />
                      </span>
                      <h3 className="text-white">Press releases</h3>
                      <p className={`${styles['benifit-details']} text-white text-sm`}>Morbi purus libero, elementum nec gravida ac, commodo at erat. Etiam porta ipsum sed diam aliquam, rutrum tincidunt metus mattis.Morbi purus libero, Morbi purus libero, elementum nec </p>
                  </div>
              </div>
              <div className={`${styles.column} d-flex flex-items-end flex-row ${styles['benifit-item']}`}>
                  <div className="d-flex flex-col">
                      <span className={`${styles['plus-icon']}`}>
                          <Image className={`${styles['plus-icon-default']}`} src="/assets/icons/plus.png" width="27" height="27" alt="" />
                          <Image className={`${styles['plus-icon-hover']}`} src="/assets/icons/plus-hover.png" width="27" height="27" alt="" />
                      </span>
                      <h3 className="text-white">Webcast links</h3>
                      <p className={`${styles['benifit-details']} text-white text-sm`}>Morbi purus libero, elementum nec gravida ac, commodo at erat. Etiam porta ipsum sed diam aliquam, rutrum tincidunt metus mattis.Morbi purus libero, Morbi purus libero, elementum nec </p>
                  </div>
              </div>
              <div className={`${styles.column} d-flex flex-items-end flex-row ${styles['benifit-item']}`}>
                  <div className="d-flex flex-col">
                      <span className={`${styles['plus-icon']}`}>
                          <Image className={`${styles['plus-icon-default']}`} src="/assets/icons/plus.png" width="27" height="27" alt="" />
                          <Image className={`${styles['plus-icon-hover']}`} src="/assets/icons/plus-hover.png" width="27" height="27" alt="" />
                      </span>
                      <h3 className="text-white">Corporate governance</h3>
                      <p className={`${styles['benifit-details']} text-white text-sm`}>Morbi purus libero, elementum nec gravida ac, commodo at erat. Etiam porta ipsum sed diam aliquam, rutrum tincidunt metus mattis.Morbi purus libero, Morbi purus libero, elementum nec </p>
                  </div>
              </div>
          </div>
    </section>
  )
}

export default Services