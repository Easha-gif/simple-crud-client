import bg from './assets/15.jpg'
import bg2 from './assets/logo1.png'
const Navbar = () => {
    return (
        <div>
            <h1 className='text-4xl font-bold mx-96 flex justify-center gap-4 items-center  -mr-80 absolute'><img className='h-16 ml-48' src={bg2} alt="" /><p className='text-white'>Espresso Emporium</p></h1>
            <p><img className='h-24 w-11/12 mx-auto rounded-md'  src={bg} alt="" /></p>
        </div>
    );
};

export default Navbar;