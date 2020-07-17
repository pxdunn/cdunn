import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

export default function ProgressiveImage({ image }) {
  return (
    <div>
      <LazyLoadImage src={image.src} alt={image.alt} effect="blur" />
    </div>
  )
}
