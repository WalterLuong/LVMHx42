import React from "react";
import { Link } from "react-router-dom";
import LVStore from "../../assets/LV-store.jpg";
import Timeline from "../../components/Timeline";
import { Info } from "../../components/Timeline";

const Join  = () => {
	const info : Info[] = [
		{
			title: "Entrer dans le magasin",
			description: "Vous pouvez entrer dans le magasin"
		},
		{
			title: "Temps d'attente estime a",
			description: "10 - 20 minutes"
		},
		{
			title: "Entrer dans le magasin",
			description: "Vous pouvez entrer dans le magasin"
		}
	]

	return <>
	<div className="bg-white h-screen w-screen overflow-hidden">
	<div className="mt-[100px]">
		<Timeline info={info}/>
	</div>
	  <div className=" flex flex-col justify-center items-center m-4">
		  <button className="pr-8 pl-8 pt-4 pb-4 border border-black rounded-xl">Rejoindre la queue</button>
	  </div>
	</div>
  </>
}

export default Join;