import React from 'react';
import { Link } from 'react-router-dom';
import { waitTime } from '../../data/waitTime';
import GroupIcon from '@mui/icons-material/Group';

const Join = () => {
    return (
        <div className='h-screen flex justify-around'>
            <div className='bg-white h-[90vh] flex  flex-col m-auto'>
                <div className='flex justify-center min-h-[150px] items-center mt-8'>
                    <h1 className='text-3xl uppercase'>Rejoindre la queue</h1>
                </div>
                <div className='flex h-[200px] items-center flex-col justify-center'>
                    <div className='shadow-sm h-[200px] pr-8 pl-8 pb-4 pt-4 m-auto bg-black flex items-center justify-center'>
                        <h1 className='text-white text-[2em]'>{waitTime.max} minutes d'attente</h1>
                    </div>
                </div>
                <span className='text-center bold p-4'><GroupIcon /> 5 personnes devant</span>

                <div className='flex flex-col h-[250px] justify-center items-center m-8'>
                    <button className='bg-black w-full pr-8 pl-8 pt-4 pb-4 text-white text-lg'>
                        Rejoindre la queue
                    </button>
                    <button className='bg-white border border-black mt-4 w-full pr-8 pl-8 pt-4 pb-4 text-black text-lg'>
                        Prendre rendez-vous
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Join;