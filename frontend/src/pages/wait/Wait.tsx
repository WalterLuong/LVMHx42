import React from 'react'
import { waitTime } from '../../data/waitTime';
import { Link } from 'react-router-dom';
import CircleLoader from '../../components/CircleLoader';

const Wait = () => {
	return (
		<div className='bg-white h-screen flex flex-col '>
            <div className='h-full mb-12 flex flex-col justify-between '>
                <div id='header' className='w-screen overflow-hidden items-center h-[10%] justify-center flex text-center '>
                    <img src='/LV-logo-text.svg' alt='logo' className='h-32 w-32' />
                </div>
                <div id='content' className='flex flex-auto flex-col text-center justify-around items-center'>
                    <div className='flex flex-col justify-center items-center pr-5 pl-5'>
						<h4 className='text-bold text-lg text-nowrap'>Vous etes bien dans la file d'attente</h4>
                        <p>Nous vous remercions de votre patience</p>
                    </div>
                    <div className='flex flex-col flex-auto justify-evenly items-center'>
                        <div className='flex justify-center '>
                            <CircleLoader percentage={75} minutes={true} height={32} width={32}/>
                        </div>
                        <div className='flex justify-center m-4'>
                            <CircleLoader percentage={5} minutes={false} height={32} width={32} />
                        </div>
                    </div>
                </div>
                <div id='cta' className='w-screen flex justify-center mb-6 items-center'>
                    <Link to='/experiences'>
                        <button className='bg-transparent border border-solid shadow-sm border-black text-black pr-8 pt-2 pb-2 pl-8 rounded-3xl hover:bg-black hover:text-white'>Luxury experiences</button>
                    </Link>
                </div>
            </div>
		</div>
	)
}

export default Wait;