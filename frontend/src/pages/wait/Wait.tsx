import React from "react";
import { waitTime } from "../../data/waitTime";
import { Link } from "react-router-dom";
import CircleLoader from "../../components/CircleLoader";
import "../../utils/variants.tsx";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/variants.tsx";

const Wait = () => {
  const height = 200;
  return (
    <div className='bg-white h-svh flex flex-col '>
      <div className='h-full mb-12 flex flex-col mt-[70px] justify-around'>
        <div
          id='content'
          className='flex flex-col text-center justify-around items-center'
        >
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial='hidden'
            animate='show'
            className='flex flex-col justify-center items-center pr-5 pl-5'
          >
            <h4 className='font-bold text-2xl text-nowrap'>BIENVENUE WALTER</h4>
            <p className='text-sm'>
              Nous vous remercions de votre patience. En attendons nous vous
              invitons to de explorer nos
              <span className='underline'>
                {" "}
                <Link to='/experiences'>expériences de luxe</Link>
              </span>{" "}
            </p>
          </motion.div>
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial='hidden'
            animate='show'
            className='flex flex-col flex-auto justify-evenly items-center mt-4'
          >
            <div className='flex justify-center '>
              <CircleLoader
                percentage={waitTime.max}
                minutes={true}
                height={height}
                width={height}
              />
            </div>
            <div className='flex justify-center'>
              <CircleLoader
                percentage={5}
                minutes={false}
                height={height}
                width={height}
              />
            </div>
          </motion.div>
        </div>
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial='hidden'
          animate='show'
          id='cta'
          className='w-full flex flex-col justify-center mb-6 items-center mt-4'
        >
          <Link to='/experiences'>
            <button className='border border-solid shadow-sm bg-black text-white m-2 pr-8 pt-4 pb-4 pl-8  w-[90vw]'>
              Découvrez nos expériences
            </button>
          </Link>
          <Link to='/experiences'>
            <span className='underline text-black text-xs pr-8 pt-2 pb-2 pl-8 w-[90vw] '>
              Quitter la file d'attente
            </span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Wait;
