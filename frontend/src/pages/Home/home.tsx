import React from "react";
import { LvStore } from "../../assets/LV-store";

const Home = () => {
	return <div className="bg-white h-screen flex justify-center items-center">
			<div className="flex flex-col justify-center items-center">
				<img src={LvStore.logo} alt="logo" className="h-32 w-32" />
				<h1 className="text-4xl font-bold">LV Store</h1>
			</div>
		</div>;
	}