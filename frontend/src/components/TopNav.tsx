import React from "react";
import burgerIcon from "../assets/Menu.svg";
import Recherche from "../assets/Recherche.svg";

const TopNav	 = () => {
	return  <div className="flex absolute top-0 z-50 bg-white flex-row justify-center items-center h-[60px] w-[100%]">
		<img src={burgerIcon} alt="burger" className="h-8 w-8 absolute left-4 text-black"/>
		<img src='/LV-logo-text.svg' alt='logo' className='h-full w-[120px]' />
		<img src={Recherche} alt="burger" className="h-8 w-8 absolute right-4 text-black"/>
		</div>
}

export default TopNav;