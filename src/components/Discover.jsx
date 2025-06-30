import React, { useRef } from 'react'

const Discover = () => {
    const sectionsRef = useRef([])
  return (
    <section ref={(el) => (sectionsRef.current[0] = el)}
        data-color="#dfdff0"
        className="min-h-dvh w-screen "
        style={{ backgroundColor: "#EDFF66", color: "#ffffff" }}>

    </section>
  )
}

export default Discover