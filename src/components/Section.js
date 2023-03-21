import React from 'react'
import Frame from '../images/Frame 127.png';
import egif1 from '../images/ezgif 1.png';
import egif2 from '../images/ezgif 2.png';
import egif3 from '../images/ezgif 3.png';
import egif4 from '../images/ezgif 4.png';



function Section() {
  return (
    <>
      <section className='px-5 lg:px-20'>
        <div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
            <div className="pt-10 md:py-10">
              <img src={Frame} alt="" className='aspect-w-16 aspect-h-9' />
            </div>

            <div className='my-auto max-w-lg mx-auto'>
              <h1 className='text-2xl md:text-3xl font-bold'>Get charts and actual values of your <span>hormones</span>. </h1>
              <p className='my-12'>Actual numerical values are necessary to know whether your PdG levels are sufficient enough to support a healthy pregnancy.</p>
              <p>Studies show that Pdg levels lower than 7.9ng/ml in serum (around 10ug/ml PdG) 6-8 days after ovulation are associated with lower pregnancy outcomes.</p>
              <button className='px-5 py-2 my-8 rounded-full'>Get the inito kit</button>
            </div>
          </div>
        </div>
      </section>

      <section className='px-5 lg:px-20 mt-10'>
        <div className='grid lg:grid-cols-2 gap-10'>
          <div className='my-auto max-w-lg'>
            <h1 className='text-2xl md:text-3xl font-bold'>Your own fertility lab at your <span>fingertips</span>.</h1>
            <p className='mt-8'>Easy-to-read fertility diagnostic results directly on your iPhone, in just 5 minutes.</p>
            <button className='px-5 py-2 my-8 rounded-full'>Get the inito kit</button>
            <p className='text-xs'>* The Inito Fertility Monitor currently supports iPhone 7 and up. Android phones are not supported at the moment.</p>
          </div>

          <div className='grid md:grid-cols-2 gap-5'>
            <div>
              <video autoplay="autoplay" loop="loop" muted="muted" oncontextmenu="return false" alt="Video: Dip test strip in urine" playsinline="true" src="https://dqxth8lmt6m4r.cloudfront.net/assets/v1/step1-20f55829b61479b8d0f4531b9b431966602e41dda62f8bb45f991cc49755b6a9.mp4"></video>
              <div className='flex items-center justify-start gap-5 my-5 '>
                <p className='para font-bold p-3 flex justify-center w-8 h-8 items-center rounded-full'>1</p>
                <p className='font-semibold text-sm'>Dip the test strip in urine for 15 seconds.</p>
              </div>
            </div>
            <div>
              <video autoplay="autoplay" loop="loop" muted="muted" oncontextmenu="return false" alt="Video: Insert strip into the monitor" playsinline="true" src="https://dqxth8lmt6m4r.cloudfront.net/assets/v1/step2-a7e58e66bd6edd928040bdeb9b80c6fce8a5f5d906232116f6f8ede281b94944.mp4"></video>
              <div className='flex items-center justify-center gap-5 my-5'>
                <p className='para font-bold p-3 flex justify-center w-8 h-8 items-center rounded-full'>2</p>
                <p className='font-semibold text-sm'>Attach the Inito Fertility Monitor to your iPhone*.</p>
              </div>
            </div>
            <div>
              <video autoplay="autoplay" loop="loop" muted="muted" oncontextmenu="return false" alt="Video: Identify up to 6 fertile days" playsinline="true" src="https://dqxth8lmt6m4r.cloudfront.net/assets/v1/step3-1bf4530d63c284cebf7ece8ae18882318bc38ea375b9c0b95838e0ec548e5c27.mp4"></video>              <div className='flex items-center justify-center gap-5 my-5 '>
                <p className='para font-bold p-3 flex justify-center w-8 h-8 items-center rounded-full'>3</p>
                <p className='font-semibold text-sm'>Insert the test strip into the Inito Fertility Monitor.</p>
              </div>
            </div>
            <div>
              <video autoplay="autoplay" loop="loop" muted="muted" oncontextmenu="return false" alt="Video: Identify up to 6 fertile days" playsinline="true" src="https://dqxth8lmt6m4r.cloudfront.net/assets/v1/step4-d6651cb2d7d03d35f8d9419477e4ee078c3c362a6aae3a7a1061daeec058c1db.mp4"></video>              <div className='flex items-center justify-center gap-5 my-5'>
                <p className='para font-bold p-3 flex justify-center w-8 h-8 items-center rounded-full'>4</p>
                <p className='font-semibold text-sm'>Get personalized results on our App in 5 minutes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Section