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
    const height = 20;
    console.log(info)
	return <>
	<ul className="w-[80%] h-[60vh] m-auto list-none relative before:bg-black before:w-1 before:top-0  before:block before:content[' '] before:absolute before:left-5 before:h-[100%] before:top-0  ">
			{info.map((item, index) => (
				<li key={index} className={`absolute left-2 h-[${height}%] flex flex-row`} style={{top : `${index * height}%`}}>
					<div className="flex flex-row justify-center items-center text-center w-full h-full">
						<div className="flex flex-col justify-start h-[100%] items-start ">
							<img src={fleur} alt="fleur" className="left-2 h-[28px] w-[28px]"/>
						</div>
						<div className="flex flex-col h-full w-[260px] text-left pr-4 pl-4">
							<h1 className="text-sm font-bold">{item.title}</h1>
							<span className="text-xs text-bold  text-">{item.description}</span>
						</div>
					</div>
				</li>
				
			))}
		
		</ul>
		</>;
}

export default Timeline;