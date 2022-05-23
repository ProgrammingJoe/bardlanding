import React from "react"

const Picture = ({ png, webp, alt }) => (
  <picture>
    <source srcset={webp} type="image/avif"/>
    <img src={png} alt={alt}/>
  </picture>
)

export default Picture