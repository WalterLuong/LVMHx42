import React from "react";
import burgerIcon from "../assets/Menu.svg";
import Recherche from "../assets/Recherche.svg";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const TopNav = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname !== "/explore" && location.pathname !== "/login" ? (
        <div className='flex flex-col absolute top-0 w-full'>
          <div className='z-50 bg-black h-12 w-full flex justify-around'>
            <img src='../Fleur-LV.svg' alt='logo' className='h-full w-5' />
            <img src='../Fleur-LV-2.svg' alt='logo' className='h-full w-5' />
            <img src='../Fleur-LV.svg' alt='logo' className='h-full w-5' />
            <img src='../Fleur-LV-2.svg' alt='logo' className='h-full w-5' />
            <img src='../Fleur-LV.svg' alt='logo' className='h-full w-5' />
          </div>
          <div className='flex z-50 bg-white flex-row justify-center items-center h-[60px] w-[100%]'>
            <img
              src={burgerIcon}
              alt='burger'
              className='h-8 w-8 absolute left-4 text-black'
            />
            <Link to='/'>
              <img
                src='/LV-logo-text.svg'
                alt='logo'
                className='h-full w-[120px]'
              />
            </Link>
            <img
              src={Recherche}
              alt='burger'
              className='h-8 w-8 absolute right-4 text-black'
            />
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default TopNav;
