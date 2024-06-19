import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <section className="d-flex flex-justify-center flex-items-center p-80 flex-col">
            <span className="icon-wrapper bg-accent text-white rounded"><Image src="/assets/icons/diamond.png" width="26" height="20" alt="" /></span>
            <h2 className="text-center">Aenean vulputate quis est et pulvinar.</h2>
            <p className="text-center">Maecenas dapibus turpis id purus mollis aliquam. Sed facilisis nec ipsum nec <br />rutrum.Maecenas dapibus turpis id purus mollis aliquam. Sed facilisis nec <br /> ipsum nec rutrum.Maecenas dapibus turpis id purus mollis aliquam. Sed facilisis nec ipsum nec </p>
            <button className="btn-primary mt-50">About Us</button>
           
    </section>
  )
}

export default About