import React from 'react'
import styles from './Operations.module.css'

const Operations = () => {
  return (
    <section className="p-80">
          <div className={`${styles.row }`}>
              <div className={`${styles.column}`}>
                  <img src="/assets/img/side-image.png" className="w-100" alt=""/>
              </div>
              <div className={`${styles.column} d-flex flex-col flex-justify-center`}>
                      <h4>
                          Usce arcu turpis, vehicula in elementum tincidunt, faucibus at ligula.
                      </h4>
                      <p className="px-30 text-bold">Proin pharetra lectus non felis vulputate, nec commodo quam mattis. Donec fermentum diam eget sem placerat vestibulum. Donec consectetur ut leo quis feugiat. </p>
                  <p>Phasellus quis dignissim lectus. Maecenas dolor ex, pulvinar in vestibulum eu, condimentum sit amet lacus. Fusce ex augue, facilisis ut ligula vitae, fringilla dictum sem. Donec tempus blandit nulla vel auctor. Donec non vestibulum tellus, sit amet condimentum felis. Maecenas scelerisque elit a lectus consequat tincidunt. </p>
                  <button className="btn-secondary mt-50" type="">Read about operations</button>
              </div>
          </div>
    </section>
  )
}

export default Operations