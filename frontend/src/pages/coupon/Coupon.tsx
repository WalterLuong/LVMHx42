import React from "react";

const Coupon = () => {
  return (
    <>
      <div className='h-svh flex justify-evenly flex-col pb-16 pt-16'>
        <div className='flex text-center flex-col items-center justify-center w-full'>
          <h1 className='text-2xl font-bold uppercase mb-5'>
            Café Maxime Frédéric
          </h1>
          <div className='w-full '>
            <img
              src='/LV-coffee.jpg'
              alt='cafe'
              className='w-full h-[200px] object-cover'
            />
          </div>
        </div>
        <div className='flex flex-col items-center justify-center w-full gap-5'>
          <div className='flex flex-col items-center gap-2'>
            <h1 className='text-xl'>
              <span className='font-bold'>10%</span> sur votre café
            </h1>
            <p className='text-xs italic'>
              Présentez ce QR Code lors le paiement
            </p>
          </div>
          <img src='qrcode.png' alt='qrcode' className='w-[200px] h-[200px]' />
          <div className='flex justify-center items-center w-full px-9'>
            <button className='border border-black text-black py-4 px-8 w-full'>
              Voir l'itinéraire
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Coupon;
