import LVStore from "./assets/LV-store.jpg";
import { waitTime } from "./data/waitTime";
import { Link } from "react-router-dom";
import { fadeIn } from "./utils/variants";
import { motion } from "framer-motion";

function App() {

  return (
    <>
      <div className="bg-white h-[90vh] w-screen overflow-hidden flex flex-col justify-around">
		<div className="flex h-3/5 bg-cover bg-center relative font-sans">
			<img src={LVStore} alt="LVStore" className="w-full h-full object-cover filter brightness-50"/>
		</div>
		<div className=" flex flex-col justify-center items-center m-4">
            <div className="flex flex-col flex-auto  text-left pr-4 pl-4">
                <motion.h1 
                variants={fadeIn('left', 0.2 )}
                initial="hidden"
                animate="show"
                className="font-bold text-xl text-left mb-2">Faites la queue virtuel</motion.h1>
                <motion.p 
                variants={fadeIn('left', 0.4 )}
                initial="hidden"
                animate="show"
                className="text-sm">Découvrez le luxe de l'attente virtuelle avec notre application exclusive pour les clients Louis Vuitton. Évitez les files d'attente physiques et profitez d'une expérience de shopping sans tracas, où le temps est aussi précieux que vos choix élégants. </motion.p>
                <motion.div
                variants={fadeIn('up', 0.6 )}
                initial="hidden"
                animate="show"

                >
                    <Link to='/tutorial'>
                        <div className="flex justify-left mt-5 text-left w-full">
                            <span className="text-sm underline font-bold float-left">En savoir plus</span>
                        </div>
                    </Link>
                    <Link to='/login'>
                    <button className="w-full bg-black text-white pl-8 pr-8 pb-4 pt-4 mb-4 mt-4">Connectez vous</button>
                    </Link>
                </motion.div>
            </div>
		</div>
      </div>
    </>
  );
}

export default App;
