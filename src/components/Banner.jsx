import banner from '../assets/3.png'
import { BsFillCupHotFill } from "react-icons/bs";
import { GiCoffeeBeans } from "react-icons/gi";
import { CiCoffeeCup } from "react-icons/ci";
import { SiCoffeescript } from "react-icons/si";
import Istragram from './Istragram';
const Banner = () => {
    return (
        <div>
            <img className='w-11/12 mx-auto rounded-md' src={banner} alt="" />
          <div className='absolute -mt-72 ml-96'>
            <h1 className='text-4xl ml-80 text-white mb-6'>Would you like a Cup of Delicious Coffee?</h1>
          <p className='text-base text-gray-300 font-semibold ml-80'>Its coffee time - Sip & Savor - Relaxation in every sip! Get the<br></br> nostalgia back!! Your companion of every moment!!! Enjoy the<br></br> beautiful moments and make them memorable.</p>
         <button className='bg-yellow-200 py-2 px-4 rounded-xl text-gray-800 ml-80 mt-4'>Learn More</button>
          </div>
          <div className='bg-gray-200 flex justify-between items-center py-8 w-11/12 mx-auto rounded-md'>
            <div className='ml-16'>
                <p><BsFillCupHotFill className='text-4xl text-zinc-800' /></p>
                <h1 className='text-3xl text-[51, 26, 21] font-medium'>Awesome Aroma</h1>
                <p className='text-base text-zinc-500 '>You will definitely be a fan of the design<br></br> & aroma of your coffee</p>
            </div>
            <div>
               <p><SiCoffeescript  className='text-4xl text-zinc-800' /></p>
                <h1  className='text-3xl text-[51, 26, 21] font-medium'>High Quality</h1>
                <p className='text-base text-zinc-500 '>We served the coffee to you maintaining<br></br> the best quality</p>
            </div>
            <div>
               <p><GiCoffeeBeans  className='text-4xl text-zinc-800' /></p>
                <h1  className='text-3xl text-[51, 26, 21] font-medium'>Pure Grades</h1>
                <p className='text-base text-zinc-500 '>The coffee is made of the green coffee<br></br> beans which you will love</p>
            </div>
            <div  className='mr-16'>
            <CiCoffeeCup  className='text-4xl text-zinc-800' />
                <h1  className='text-3xl text-[51, 26, 21] font-medium'>Proper Roasting</h1>
                <p className='text-base text-zinc-500 '>Your coffee is brewed by first roasting<br></br> the green coffee beans</p>
            </div>
          </div>
          <Istragram></Istragram>
        </div>
    );
};

export default Banner;