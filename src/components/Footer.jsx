import bg2 from '../assets/logo1.png'
import bgf from '../assets/24.jpg'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaInvision } from "react-icons/fa";
const Footer = () => {
    return (
        <div>
            <div className='flex justify-between bg-slate-300 py-20 px-28 mt-24'>
            <div>
                <img className='w-16' src={bg2} alt="" />
                <h1 className='text-4xl text-[51, 26, 21] font-semibold mt-3 mb-4'>Espresso Emporium</h1>
                <p className='text-gray-500'>Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
            <div className='flex items-center gap-4 mt-3 mb-4'>
                <p><FaFacebook  className='text-amber-950 text-3xl'/></p>
                <p><FaTwitter className='text-amber-950 text-3xl' /></p>
                <p><FaSquareInstagram  className='text-amber-950 text-3xl'/></p>
                <p><FaInvision  className='text-amber-950 text-3xl'/></p>
            </div>
            <p  className='text-3xl text-[51, 26, 21] font-semibold mt-3 mb-4'>Get in Touch</p>
            <p  className='text-gray-500'>+88 01533 333 333</p>
            <p  className='text-gray-500'>info@gmail.com</p>
            <p  className='text-gray-500'>72, Wall street, King Road, Dhaka</p>
            </div>
            <div>
                <h1  className='text-4xl text-[51, 26, 21] font-semibold mb-4'>Connect with Us</h1>
                <input className='border border-zinc-300 pr-40 pl-2 mb-3 py-2 rounded-xl' type="text" name="" placeholder='name' id="" />
                <br></br>
                <input className='border border-zinc-300 pr-40 mb-3 pl-2 py-2 rounded-xl' type="email" name="" placeholder='email' id="" />
                <br></br>
                <textarea className='border border-zinc-300 pr-24 mb-3 pl-2 py-2 rounded-xl' name="" rows="3" cols="30" placeholder='message' id=""></textarea>
               <br></br>
                <button  className='text-[51, 26, 21] font-semibold border border-zinc-400 px-6 rounded-2xl'>Send Message</button>
            </div>
        </div>
        <div>
            <img className='h-16 w-full object-cover' src={bgf} alt="" />
            <h1 className='-mt-10 text-center text-xl text-gray-300'>Copyright Espresso Emporium ! All Rights Reserved</h1>
        </div>
        </div>
    );
};

export default Footer;