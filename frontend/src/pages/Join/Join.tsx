import React from "react";
import { Link } from "react-router-dom";
import { waitTime } from "../../data/waitTime";
import GroupIcon from "@mui/icons-material/Group";
import { fadeIn } from "../../utils/variants.tsx";
import { motion } from "framer-motion";

const Join = () => {
  return (
    <div className='h-svh flex justify-around pt-28 pb-16'>
      <div className='bg-white flex flex-col'>
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial='hidden'
          animate='show'
          className='flex justify-center min-h-[150px] items-center mt-8'
        >
          <h1 className='text-3xl uppercase'>Rejoindre la queue</h1>
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial='hidden'
          animate='show'
        >
          <div className='flex h-[200px] items-center flex-col justify-center'>
            <div className='shadow-sm h-[200px] px-8 py-4 m-auto bg-black flex items-center justify-center'>
              <h1 className='text-white text-[2em]'>
                {waitTime.max} minutes d'attente
              </h1>
            </div>
          </div>
          <span className='text-center bold p-4'>
            <GroupIcon /> 5 personnes dans la queue
          </span>
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.8)}
          initial='hidden'
          animate='show'
          className='flex flex-col h-[250px] justify-center items-center m-8'
        >
          <Link to='/wait' className='w-full'>
            <button className='bg-black w-full pr-8 pl-8 pt-4 pb-4 text-white text-lg'>
              Rejoindre la queue
            </button>
          </Link>
          <button className='bg-white border border-black mt-4 w-full pr-8 pl-8 pt-4 pb-4 text-black text-lg'>
            Prendre rendez-vous
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Join;
