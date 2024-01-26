import React from "react";

const Coupon = () => {
    return <>
        <div className='h-[60vh] justify-between flex flex-col mt-[150px]'>
            <div className='flex text-center flex-col items-center justify-center w-full'>
                <h1 className="text-xl uppercase">
                    Café Maxime Frédéric
                </h1>
                <div className='w-full '>
                    <img src='/LV-coffee.jpg' alt='cafe' className='w-full h-[200px] object-cover'/>
                </div>
            </div>
            <div className='flex flex-col items-center justify-center w-full'>
                <h1>
                    10% sur votre café
                </h1>
                <div className='flex justify-center items-center'>
                    <button className="border border-black text-black py-4 px-8">Voir l'itinéraire</button>
                </div>
            </div>
            
        </div>
    </>
}

export default Coupon;