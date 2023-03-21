import React from 'react'
import Star from "../images/Star 1.png"
import hand from "../images/hand.png"
import week from '../images/the week.png'
import enterpreneur from '../images/enterpreneur.png'
import bloomberg from '../images/bloomberg.png'
import forbes from '../images/forbes.png'
import nbc from '../images/nbc.png'
import Vector from '../images/Vector 54.png'


function Hero() {
  return (
    <>
      <section className='pl-5 grid-cols-1 grid md:grid-cols-2 lg:pl-20'>
        <div className='my-auto '>
          <h1 className='text-3xl lg:text-5xl font-bold flex flex-wrap'>Track your fertility hormones at home, in <span>5 minutes</span></h1>
          <p className='my-12'>Get accurate results of Estrogen, LH and Progesterone with Inito, the all-in-one, FDA-registered fertility monitor.</p>
          <button className='px-5 py-2 rounded-full'>Learn more</button>
        </div>

        <div className="md:relative">
          <img src={hand} alt="" className='relative z-50'/>
          <img src={Star} alt="" className='hidden md:block absolute md:-top-16 md:right-0'/>
          <img src={Vector} alt="" className='absolute bottom-16 lg:bottom-28 -left-16'/>
        </div>
      </section>
      <div className='lg:px-20 py-5'>
        <p className='uppercase text-slate-400 font-bold text-center mb-5'>As seen on</p>
        <div className='grid grid-cols-3 justify-center md:pl-16 lg:pl-0 items-center lg:flex lg:justify-between gap-5'>
          <img src={week} alt="" />
          <img src={enterpreneur} alt="" />
          <img src={bloomberg} alt="" />
          <img src={forbes} alt="" />
          <img src={nbc} alt="" />
        </div>
      </div>
    </>
  )
}

export default Hero