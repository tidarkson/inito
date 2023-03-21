import React from 'react'
import { FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa'
import trusted from '../images/trusted.png';
import Frame42 from '../images/Frame 42.png';
import Frame43 from '../images/Frame 43.png';
import logo from '../images/Logo.png';




function Footer() {
  return (
    <>
      <footer className='text-white px-5 lg:px-20 mt-20'>
        <div className='lg:flex items-center justify-between py-10 border-b border-slate-500'>
          <div className='grid grid-cols-1 md:flex items-center justify-start gap-5'>
            <img src={trusted} alt="" />
            <p className='text-sm font-semibold'>TRUSTED BY 20,000+ COUPLES</p>
            <img src={Frame42} alt="" />
            <p className='text-sm font-semibold'>FREE US SHIPPING</p>
            <img src={Frame43} alt="" />
            <p className='text-sm font-semibold'>FDA-REGISTERED (HSA/FSA ELIGIBLE)</p>
          </div>
          <div className='mt-10 lg:mt-0 flex items-center justify-start gap-5'>
            <FaFacebook className='text-2xl' />
            <FaYoutube className='text-2xl' />
            <FaInstagram className='text-2xl' />
          </div>
        </div>

        <div className='grid grid-cols-1 gap-10 lg:grid-cols-2 py-10 border-b border-slate-500'>
          <div>
            <img src={logo} alt="" />
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-5'>
            <ul>
              <li className='font-semibold mb-3'>Company</li>
              <li>About</li>
              <li className='my-2'>Career</li>
              <li>Blog</li>
              <li className='mt-2'>Contact</li>
            </ul>
            <ul>
              <li className='font-semibold mb-3'>Support</li>
              <li>FAQ</li>
              <li className='my-2'>Terms</li>
              <li>Privacy Policy</li>
              <li className='mt-2'>Returns & Warranty</li>
            </ul>     <ul>
              <li className='font-semibold mb-3'>Get in touch</li>
              <li>+1 815-369-0989</li>
              <li className='my-2'>help@inito.com</li>
              <li>355 Bryant Street, Unit 403, San Francisco CA 94107</li>
            </ul>
          </div>
        </div>

        <div className='py-10'>
          <p className='text-slate-400 text-xs my-2'>† Inito is a medical device registered with the FDA and the return policy is to allow flexibility to the consumer while ensuring that products safe and effective for us.</p>
          <p className='text-slate-400 text-xs my-2'>The following policy applies for purchases made through inito.com or the Inito App. If you purchased your product from Amazon or another authorized retailer, please speak with a representative from the original place of purchase as Inito must adhere to their policies and procedures. Products purchased through an unauthorized reseller are not eligible for any refund, cancellation, or replacement.</p>
          <p className='text-slate-400 text-xs my-2'>In order to be eligible for a refund, cancellation, or replacement from purchases made on inito.com, customers must provide proof of purchase. For prompt service, please email our Customer Care Team and provide your order number for any request for the following:</p>
          <p className='text-slate-400 text-xs my-2'>If your order has not shipped, you are eligible for a 400% refund of your inito.com order.
            - Orders once shipped, are not eligible for any return, refunds or exchange.
            - Damaged or defective products are covered by our 6-month limited warranty applicable from the from the date of purchase. During the warranty period, Inito will either repair or replace, at its option, any defective Product or part at no charge to you.</p>
          <p className='text-slate-400 text-xs my-2'>© Inito Inc. All rights reserved</p>
        </div>

      </footer>
    </>
  )
}

export default Footer