import LVStore from "./assets/LV-store.jpg";
import { waitTime } from "./data/waitTime";
import { Link } from "react-router-dom";


function App() {

  return (
    <>
      <div className="bg-white h-screen w-screen overflow-hidden">
		<div className="flex h-3/5 bg-cover bg-center relative font-sans">
			<img src={LVStore} alt="LVStore" className="w-full h-full object-cover filter brightness-50"/>
			{/* <div className="absolute top-[30%] left-1/2 flex-col text-nowrap justify-center text-center transform -translate-x-1/2 -translate-y-1/2 text-white">
				<h1>Temps d'attente estime a</h1>
				<span className="text-xl text-bold  text-"> {waitTime.min} - {waitTime.max} minutes </span>
			</div>
			<div className="absolute top-1/2 left-1/2 flex-col text-nowrap justify-center text-center transform -translate-x-1/2 -translate-y-1/2 text-white ">
				<p> Decouvrez Paris </p>
				<h3 className="w-full text-nowrap">Rejoins la queue virtuel</h3>
				<button className="bg-transparent border-white border m-4 text-white hover:text-white hover:bg-black pt-2 pb-2 pr-8 pl-8 transform hover:scale-105 rounded-lg">Je rejoins</button>
			</div> */}
		</div>
		<div className=" flex flex-col justify-center items-center m-4">
            <div className="flex flex-col flex-auto  text-left pr-4 pl-4">
                <h1 className="font-bold text-xl text-left mb-2">Faites la queue virtuel</h1>
                <p className="text-sm">Découvrez le luxe de l'attente virtuelle avec notre application exclusive pour les clients Louis Vuitton. Évitez les files d'attente physiques et profitez d'une expérience de shopping sans tracas, où le temps est aussi précieux que vos choix élégants. </p>
				<Link to='/join'>
					<div className="flex justify-left mt-5 text-left w-full">
						<span className="text-sm underline font-bold float-left">En savoir plus</span>
					</div>
				</Link>
            </div>
		</div>
      </div>
    </>
  );
}

export default App;
