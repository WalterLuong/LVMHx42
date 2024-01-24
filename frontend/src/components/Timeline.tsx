import React from "react";
import fleur from "../assets/fleur.svg";

export type Info  = {
	title: string;
	description: string;
}

interface TimelineProps {
	info: Array<Info>;
}
const Timeline: React.FC<TimelineProps> = ({info }) => {
	return <>
	<ul className="w-[80%] h-[70vh] m-auto list-none relative before:bg-black before:w-1 before:top-0  before:block before:content[' '] before:absolute before:left-5 before:h-[100%] before:top-0  ">
			{info.map((item, index) => (
				<>
				<li key={index} className={`absolute top-[${index * 30}%] left-0 h-[30%] flex flex-row`}>
					<div className="flex flex-row justify-center items-center text-center w-full h-full">
						<div className="flex flex-col justify-start h-[100%] items-start">
							<img src={fleur} alt="fleur" className="left-0 h-[40px] w-[40px]"/>
						</div>
						<div className="flex flex-col h-full">
							<h1 className="text-2xl font-bold">{item.title}</h1>
							<span className="text-xl text-bold  text-">{item.description}</span>
						</div>
					</div>
				</li>
				</>
			))}
		
		</ul>
		</>;
}

export default Timeline;