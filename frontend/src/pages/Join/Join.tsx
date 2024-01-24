import React from "react";
import { Link } from "react-router-dom";
import LVStore from "../../assets/LV-store.jpg";
import fleur from "../../assets/fleur.svg";

const Join  = () => {
	return <>
	<div className="bg-white h-screen w-screen overflow-hidden">
	<div>
		<ul className=" list-none relative before:bg-black before:w-1 before:top-0  before:block before:content[' '] before:absolute before:left-12 before:h-[80%] before:top-[20%] h-[80vh] ">
			<li>

			</li>
		</ul>
	</div>
	  <div className=" flex flex-col justify-center items-center m-4">
		  <button className="pr-8 pl-8 pt-4 pb-4 border border-black rounded-xl">Rejoindre la queue</button>
	  </div>
	</div>
  </>
}

export default Join;