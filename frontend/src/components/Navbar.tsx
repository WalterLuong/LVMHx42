import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { navAnim } from '../utils/variants.tsx';

const Navbar = () => {
  const location = useLocation();

  return (
    <div className='bg-black text-white font-bold flex absolute bottom-0 w-screen overflow-hidden justify-around h-16 z-50 py-2'>
      <div className='flex flex-col items-center'>
        <Link to='/explore'>
          <p>Explorez</p>
          {location.pathname === '/explore' && (
            <motion.img 
            variants={navAnim}
            initial='hidden'
            animate='show'
            src='Fleur-LV.svg' alt='LV logo' className='w-full h-4 mt-1' />
          )}
        </Link>
      </div>
      <div className='flex flex-col items-center'>
        <Link to='/login'>
          <p>Catalogue</p>
          {location.pathname === '/login' && (
            <motion.img 
            variants={navAnim}
            initial='hidden'
            animate='show'
            src='Fleur-LV.svg' alt='LV logo' className='w-full h-4 mt-1' />
          )}
        </Link>
      </div>
      <div className='flex flex-col items-center'>
        <Link to='/wait'>
          <p>Services</p>
          {location.pathname === '/wait' && (
            <motion.img 
            variants={navAnim}
            initial='hidden'
            animate='show'
            src='Fleur-LV.svg' alt='LV logo' className='w-full h-4 mt-1' />
          )}
        </Link>
      </div>
      <div className='flex flex-col items-center'>
        <Link to='/mylv'>
          <p>MyLV</p>
          {location.pathname === '/mylv' && (
            <motion.img 
            variants={navAnim}
            initial='hidden'
            animate='show'
            src='Fleur-LV.svg' alt='LV logo' className='w-full h-4 mt-1' />
          )}
        </Link>
      </div>
      <div className='flex flex-col items-center'>
        <Link to='/join'>
            <p>Panier</p>
            {location.pathname === '/join' && (
            <motion.img
                variants={navAnim}
                initial='hidden'
                animate='show'
                src='Fleur-LV.svg' alt='LV logo' className='w-full h-4 mt-1' />
            )}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
