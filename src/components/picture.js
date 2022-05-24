import React from "react"

const Picture = ({ png, webp, alt }) => (
  <picture>
    <source srcset={webp} type="image/webp"/>
    <img src={png} alt={alt}/>
  </picture>
)

export default Picture