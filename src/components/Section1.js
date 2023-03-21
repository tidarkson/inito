import React from 'react'
import phone from "../images/image 3.png"
import Star from "../images/Star 3.png"



function Section1() {
  return (
    <>
      <section className=' lg:px-20 mt-10 py-10'>
        <div className='max-w-xl mx-auto text-center'>
          <h2 className='text-2xl md:text-3xl font-bold '>Not all ovolution tests are created <span>equal</span></h2>
          <p className='my-8'>Most ovulation tests predict your fertile days by tracking Estrogen and Luteinizing Hormone (LH), but fail to measure the hormone that actually confirms your ovulation and supports pregnancy: <span className='font-semibold border border-none'>Progesterone</span>.</p>

          <h2 className='text-2xl md:text-3xl font-bold'>What makes <span>inito</span> different?</h2>
          <p className='my-8'>Inito is the only fertility monitor that measures all 3 hormones on a single test strip, showing you a full picture of your cycles with results unique to your body.</p>
        </div>

        <section className='sextion grid grid-cols-1 px-5 md:grid-cols-2 md:pl-10 mt-10 md:mt-20 py-10'>
          <div className='my-auto max-w-sm mx-auto'>
            <h1 className='text-2xl md:text-3xl font-bold'>Predict and confirm your ovulation with <span>actual</span>  data.</h1>
            <p className='my-12'>Unlike most ovulation tests that only give you "yes/no" results, Inito provides real numerical values of your fertility hormones.</p>
            <p> If you have irregular cycles, actual data is necessary to know exactly when you ovulate, and when is the best time to try to conceive.</p>
            <button className='px-5 py-2 my-8 rounded-full'>Get the inito kit</button>
          </div>

          <div className="relative py-10">
            <img src={phone} alt="" className='relative z-10' />
            <img src={Star} alt="" className='absolute bottom-64 md:top-0 right-0' />
          </div>
        </section>
      </section>
    </>
  )
}

export default Section1