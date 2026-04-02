import { useEffect } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Tagline from './components/Tagline'
import HowItWorks from './components/HowItWorks'
import ProductSpecs from './components/ProductSpecs'
import AppSection from './components/AppSection'
import Sports from './components/Sports'
import FeatureGrid from './components/FeatureGrid'
import Preorder from './components/Preorder'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })
    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProductSpecs />
        <Tagline />
        <HowItWorks />
        <AppSection />
        <Sports />
        <FeatureGrid />
        <FAQ />
        <Preorder />
      </main>
      <Footer />
    </>
  )
}
