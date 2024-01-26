import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { navAnim } from "../utils/variants.tsx";

const Navbar = () => {
  const location = useLocation();

  return (
    <div className='bg-black text-white font-bold flex absolute mt-auto bottom-0 w-screen justify-around h-16 z-50 py-2'>
      <div className='flex flex-col items-center'>
        <Link to='/explore'>
          <p>Explorez</p>
          {location.pathname === "/explore" && (
            <motion.img
              variants={navAnim}
              initial='hidden'
              animate='show'
              src='Fleur-LV.svg'
              alt='LV logo'
              className='w-full h-4 mt-1'
            />
          )}
        </Link>
      </div>
      <div className='flex flex-col items-center'>
        <p>Catalogue</p>
        {location.pathname === "/catalogue" && (
          <motion.img
            variants={navAnim}
            initial='hidden'
            animate='show'
            src='Fleur-LV.svg'
            alt='LV logo'
            className='w-full h-4 mt-1'
          />
        )}
      </div>
      <div className='flex flex-col items-center'>
        <Link to='/'>
          <p>Services</p>
          {location.pathname === "/" && (
            <motion.img
              variants={navAnim}
              initial='hidden'
              animate='show'
              src='Fleur-LV.svg'
              alt='LV logo'
              className='w-full h-4 mt-1'
            />
          )}
        </Link>
      </div>
      <div className='flex flex-col items-center'>
        <Link to='/mylv'>
          <p>MyLV</p>
          {(location.pathname === "/mylv" ||
            location.pathname === "/join" ||
            location.pathname === "/wait" ||
            location.pathname === "/myqueue") && (
            <motion.img
              variants={navAnim}
              initial='hidden'
              animate='show'
              src='Fleur-LV.svg'
              alt='LV logo'
              className='w-full h-4 mt-1'
            />
          )}
        </Link>
      </div>
      <div className='flex flex-col items-center'>
        <p>Panier</p>
        {location.pathname === "/panier" && (
          <motion.img
            variants={navAnim}
            initial='hidden'
            animate='show'
            src='Fleur-LV.svg'
            alt='LV logo'
            className='w-full h-4 mt-1'
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
