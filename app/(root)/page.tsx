import React from 'react'
import { GlobeDemo } from '@/components/interactiveGlobe';
import { SparklesPreview } from '@/components/sparkle'

const Home = () => {
  return (
    <section>
    <div>
    <SparklesPreview />
    </div>
    <div>
    <GlobeDemo />
    </div>
    </section>
  )
}

export default Home


