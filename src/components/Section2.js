import React from 'react'
import doctor from '../images/doctor.png';
import woman from '../images/1.png';
import mask from '../images/Mask.png';
import AppStore from '../images/AppStore.png';
import group from '../images/group.png';




function Section2() {
  return (
    <>
      <section className='grid grid-cols-1 px-5 md:grid-cols-2 pb-10 gap-5'>
        <div className='max-w-lg mx-auto'>
          <h1 className='text-2xl lg:text-3xl font-bold'>“Inito is all that you need to give you the <span>best</span> chance of conception."</h1>
          <div className='flex my-10 items-center justify-start gap-4'>
            <img src={doctor} alt="" />
            <p><span className='font-bold border border-none'>Dr. Rachel Wagner</span> <br></br>MD</p>
          </div>
        </div>

        <div className='my-auto max-w-lg mx-auto'>
          <h1 className='text-2xl md:text-3xl font-bold'>Why measure Progesterone?</h1>
          <p className='my-8'><span className='font-bold border border-none'>Anovulation</span> (having a menstrual cycle with no egg) is actually a common occurrence, affecting 1 in 10 women*.</p>
          <p> A sure way to confirm ovulation is a rise in Progesterone level after peak fertility. Progesterone also supports implantation and elevated levels of PdG during the 7-10 day window after ovulation correlates to higher chances of a successful pregnancy.</p>
          <p className='text-xs text-blue-400 my-8'>* Source: National Institutes of Health</p>
        </div>
      </section>

      <section className='px-5 lg:px-20'>
        <div>
          <h1 className='text-2xl md:text-3xl font-bold'>Why Inito is the smarter way to get pregnant</h1>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 pt-5 md:pt-10 gap-5 md:gap-10'>
          <div className=" py-10">
            <img src={woman} alt="" className='' />
          </div>

          <div className='my-auto max-w-lg mx-auto'>
            <h1 className='text-2xl md:text-3xl font-bold'>Adapts to your <span className=''>unique</span><br /> irregular cycle</h1>
            <p className='my-12'>Most ovulation kits have a set value or a threshold, making them likely to give a false read if your hormones fall outside the average range.</p>
            <p> Every woman is unique, especially with a condition like PCOS or Thyroid which can influence hormone levels. Inito measures real values of your hormones to personalize results to the unique you.</p>
            <button className='px-5 py-2 my-8 rounded-full'>Get the inito kit</button>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
          <div className='my-auto max-w-lg mx-auto'>
            <h1 className='text-2xl md:text-3xl font-bold'>Inito <span>tracks</span>  everything so you don’t have to</h1>
            <p className='my-6 md:my-12'>The Inito Fertility Monitor comes with a free easy-to-use App, so you can track your fertile days with ease and know exactly when you ovulate.</p>
            <p>Our App notifies you for everything:</p>
            <ul> 
              <li>• Your fertility levels</li>
              <li>• When to test on the right days</li>
              <li>• When you’ve successfully ovulated</li>
              <li>• And when to roll into bed!</li>     
            </ul>
            <button className='px-5 py-2 mt-8 md:my-8 rounded-full'>Get the inito kit</button>
          </div>

          <div className="hidden md:block relative md:py-10">
            <img src={mask} alt="" className='' />
            <img src={AppStore} alt="" className='absolute bottom-32 right-10' /> 
            <img src={group} alt="" className='absolute top-24 lg:right-10' />                     
          </div>
        </div>
      </section>
    </>
  )
}

export default Section2