import React from 'react'
import { waitTime } from '../../data/waitTime';
import { Link } from 'react-router-dom';
import CircleLoader from '../../components/CircleLoader';

const Wait = () => {
    const height = 200;
	return (
		<div className='bg-white h-screen flex flex-col '>
            <div className='h-full mb-12 flex flex-col mt-8 justify-between'>
                <div id='header' className='w-screen overflow-hidden items-center h-[10%] justify-center flex text-center '>
                </div>
                <div id='content' className='flex flex-col text-center justify-around items-center'>
                    <div className='flex flex-col justify-center items-center pr-5 pl-5'>
						<h4 className='text-bold text-lg text-nowrap'>BIENVENUE</h4>
                        <p className='text-xs'>Nous vous remercions de votre patience</p>
                    </div>
                    <div className='flex flex-col flex-auto justify-evenly items-center mt-4'>
                        <div className='flex justify-center '>
                            <CircleLoader percentage={75} minutes={true} height={height} width={height}/>
                        </div>
                        <div className='flex justify-center'>
                            <CircleLoader percentage={5} minutes={false} height={height} width={height} />
                        </div>
                    </div>
                </div>
                <div id='cta' className='w-full flex flex-col justify-center mb-6 items-center mt-4'>
                    <Link to='/experiences'>
                        <button className='border border-solid shadow-sm bg-black text-white m-2 pr-8 pt-4 pb-4 pl-8  w-[90vw]'>Luxury experiences</button>
                    </Link>
                    <Link to='/experiences'>
                        <span className='underline text-black text-xs pr-8 pt-2 pb-2 pl-8 w-[90vw] '>Quitter la file d'attente</span>
                    </Link>
                </div>
            </div>
		</div>
	)
}

export default Wait;