import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className=' md:mx-10  '>
        <div className=' felx flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm '>
            {/* left section */}
            <div >
                <img className=' mb-5 w-40 '  src={assets.logo} alt="" />
                <p className=' w-full md:w-2/3  text-gray-600 leading-6 '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est recusandae sunt ipsam, consequatur fugiat autem vel accusantium totam! Adipisci enim nostrum quisquam impedit incidunt porro nesciunt voluptatem exercitationem libero veniam?</p>
            </div>

            {/* center Section */}
            <div>
                <p className=' text-xl font-medium mb-5 '>Company</p>
                <ul className=' flex flex-col gap-2 text-gray-600 '>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            {/* right Section */}
            <div>
                <p className=' text-xl font-medium mb-5 '>Get In Touch</p>
                <ul className=' flex flex-col gap-2 text-gray-600 '>
                    <li>9262776895</li>
                    <li>shuman.kr99@gmail.com</li>
                    
                </ul>
            </div>
        </div>
        {/* --------Copyright---------- */}
        <div>
        <hr />
            <p className=' py-5 text-sm text-center '>Copyright 2024@ Prescripto ,All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer
