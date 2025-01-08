import img1 from '../assets/Rectangle 10.png'
import img2 from '../assets/Rectangle 11.png'
import img3 from '../assets/Rectangle 12.png'
import img4 from '../assets/Rectangle 13.png'
import img5 from '../assets/Rectangle 14.png'
import img6 from '../assets/Rectangle 15.png'
import img7 from '../assets/Rectangle 16.png'
import img8 from '../assets/Rectangle 9.png'



const Istragram = () => {
    return (
        <div>
            <div className="text-center">
                <p className="text-gray-500 mt-12 mb-3">Follow Us Now</p>
                <p className="text-[51, 26, 21] text-4xl font-semibold mb-14">Follow on Instagram</p>
            </div>
        
        <div className='grid grid-cols-4 w-11/12 mx-auto gap-5'>
            <div><img src={img1} alt="" /></div>
            <div><img src={img2} alt="" /></div>
            <div><img src={img3} alt="" /></div>
            <div><img src={img4} alt="" /></div>
            <div><img src={img5} alt="" /></div>
            <div><img src={img8} alt="" /></div>
            <div><img src={img6} alt="" /></div>
            <div><img src={img7} alt="" /></div>
        </div>
        
        </div>
    );
};

export default Istragram;