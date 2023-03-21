import React from 'react'
import Star from "../images/Star 1.png"
import hand from "../images/hand.png"
import Vector from '../images/Vector 54.png'


function Hero() {
  return (
    <>
      <section className='hero pl-5 pt-10 md:pt-0 border-t border-slate-200 grid-cols-1 grid md:grid-cols-2 lg:pl-20'>
        <div className='my-auto '>
          <h1 className='text-4xl lg:text-5xl font-bold'>Track your fertility hormones at home, in <span>five minutes</span></h1>
          <p className='my-12'>Get accurate results of Estrogen, LH and Progesterone with Inito, the all-in-one, FDA-registered fertility monitor.</p>
          <button className='px-5 py-2 rounded-full'>Learn more</button>
        </div>

        <div className="md:relative">
          <img src={hand} alt="" className='relative z-50'/>
          <img src={Star} alt="" className='hidden md:block absolute md:-top-16 md:right-0'/>
          <img src={Vector} alt="" className='absolute bottom-16 lg:bottom-28 -left-16'/>
        </div>
      </section>
    </>
  )
}

export default Hero