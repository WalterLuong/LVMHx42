import LVStore from "./assets/LV-store.jpg";


function App() {

	
  return (
    <>
      <div className="bg-slate-200 h-screen w-screen overflow-hidden">
		<div id='header-home' className="h-2/5">
			<img src="/lvmh-logo.png" alt="LVMH_logo" className="h-32 m-auto" />
			<h1 className="font-bold text-2xl">Bonjour User</h1>
			<p>Pour vous recompenser de votre fidelite nous vous offrons la possibilite de faire la queue virtuel pour que vous puissiez decouvrir les experiences de luxe a Paris choisies par la maison Louis Vuitton </p>
		</div>
		<div className="flex flex-grow-0 h-3/5 bg-cover bg-center relative font-sans">
			<img src={LVStore} alt="LVStore" className="w-full h-full object-cover filter brightness-50"/>
			<div className="absolute top-1/2 left-1/2 flex-col justify-center text-center transform -translate-x-1/2 -translate-y-1/2 text-white">
				<p> Decouvrez Paris </p>
				<h3 className="w-full text-nowrap">Rejoins la queue virtuel</h3>
				<button className="bg-transparent border-white border p-2 m-4 text-white p-4 transform hover:scale-105 rounded-lg">Je rejoins</button>
			</div>
		</div>
      </div>
    </>
  );
}

export default App;
