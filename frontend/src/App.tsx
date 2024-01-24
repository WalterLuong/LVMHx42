import LVStore from "./assets/LV-store.jpg";


function App() {

  return (
    <>
      <div className="bg-white h-screen w-screen overflow-hidden">
		<div id='header-home' className="h-2/6 flex flex-col justify-center items-center">
                  <div className="flex flex-row justify-center items-center h-[60px] w-[120px]">
                  <img src='/LV-logo-text.svg' alt='logo' className='h-full w-full' />
            </div>
            <div className="flex flex-col flex-auto  text-left pr-4 pl-4">
                <h1 className="font-bold text-xl text-left">Bonjour User</h1>
                <p className="text-sm">Pour vous recompenser de votre fidelite nous vous offrons la possibilite de faire la queue virtuel pour que vous puissiez decouvrir les experiences de luxe a Paris choisies par la maison Louis Vuitton </p>
            </div>
		</div>
		<div className="flex h-3/5 bg-cover bg-center relative font-sans">
			<img src={LVStore} alt="LVStore" className="w-full h-full object-cover filter brightness-50"/>
			<div className="absolute top-1/2 left-1/2 flex-col justify-center text-center transform -translate-x-1/2 -translate-y-1/2 text-white">
				<p> Decouvrez Paris </p>
				<h3 className="w-full text-nowrap">Rejoins la queue virtuel</h3>
				<button className="bg-transparent border-white border m-4 text-white pt-2 pb-2 pr-8 pl-8 transform hover:scale-105 rounded-lg">Je rejoins</button>
			</div>
		</div>
      </div>
    </>
  );
}

export default App;
