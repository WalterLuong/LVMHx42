import React from 'react'
import { waitTime } from '../../data/waitTime';
import { Link } from 'react-router-dom';

const Wait = () => {
	return (
		<div className='bg-white h-screen flex-col justify-around'>
			<div id='header' className='bg-slate-200 flex h-1/5 w-screen overflow-hidden justify-around h-12 items-center border-t border-black'>
				<h1>Estimated waiting time :</h1>
				<span> {waitTime.min} - {waitTime.max} minutes </span>
			</div>
			<div id='content' className='h-3/5 flex justify-center items-center'>
				<ul id='steps' className='flex-col justify-evenly items-center'>
					<li>step 1 </li>
					<li>step 2 </li>
					<li>step 3 </li>
				</ul>
			</div>
			<div id='cta' className='w-screen flex justify-center items-center'>
				<Link to='/experiences'>
					<button className='bg-black text-white p-4 rounded-lg'>luxury experiences</button>
				</Link>
			</div>
		</div>
	)
}

export default Wait;