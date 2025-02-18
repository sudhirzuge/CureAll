import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium '>US</span></p>
      </div>

    <div className='flex my-10 flex-col md:flex-row gap-12'>
      <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
      <div className='flex flex-col justify-center gap-6 md:w-2/4 tex-sm text-gray-600'>
        <p>Welcome to CureAll, your trusted partner in managing healthcare services across a multi-hospital network. At CureAll, we understand the complexities of scheduling doctor appointments, accessing medical records, and ensuring seamless healthcare management across multiple facilities.</p>
        <p>CureAll is committed to excellence in healthcare technology. We continuously enhance our platform, integrating the latest advancements to improve patient experience and streamline hospital operations.</p>
        <b className='text-gray-800'>Our Vision</b>
        <p>Our vision at CureAll is to revolutionize healthcare accessibility across a multi-hospital network. We strive to create a seamless and integrated healthcare experience, ensuring patients can easily connect with the right healthcare providers at the right time. </p>
      </div>
    </div>

    <div className='text-xl my-4'>
      <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
    </div>

    <div className='flex flex-col md:flex-row mb-20'>
      <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 test-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
        <b>Efficiency:</b>
        <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
      </div >
      <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 test-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
        <b>Convenience:</b>
        <p>Access to a network of trusted healthcare professionals in your area.</p>
      </div>
      <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 test-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
        <b>Personalization:</b>
        <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
      </div>
    </div>

    </div>
  )
}

export default About
