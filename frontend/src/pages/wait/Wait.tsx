import React from 'react'
import { waitTime } from '../../data/waitTime';
import { Link } from 'react-router-dom';
import CircleLoader from '../../components/CircleLoader';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Wait = () => {
	return (
		<div className='bg-white h-screen flex-col justify-around'>
			<div id='header' className='w-screen overflow-hidden flex items-center text-center justify-around items-center border-t border-black'>
				<img src='/LV-logo-text.svg' alt='logo' className='h-32 w-32' />
			</div>
			<div id='content' className='h-3/5 flex-col text-center justify-center items-center'>
				<h1>Estimated waiting time :</h1>
				<span> {waitTime.min} - {waitTime.max} minutes </span>
				<div className='flex justify-center h-60 w-60'>
				<CircularProgressbar
					value={waitTime.min}
					text={`${waitTime.max}%`}
					styles={{
						// Customize the root svg element
						root: {},
						// Customize the path, i.e. the "completed progress"
						path: {
						// Path color
						stroke: `rgba(255, 255, 255, ${waitTime.max / 100})`,
						// Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
						strokeLinecap: 'butt',
						// Customize transition animation
						transition: 'stroke-dashoffset 0.5s ease 0s',
						// Rotate the path
						transform: 'rotate(0.25turn)',
						transformOrigin: 'center center',
						},
						// Customize the circle behind the path, i.e. the "total progress"
						trail: {
						// Trail color
						stroke: '#000',
						// Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
						strokeLinecap: 'butt',
						// Rotate the trail
						transform: 'rotate(0.25turn)',
						transformOrigin: 'center center',
						},
						// Customize the text
						text: {
						// Text color
						fill: '#000',
						// Text size
						fontSize: '16px',
						},
						// Customize background - only used when the `background` prop is true
						background: {
						fill: '#000',
						},
					}}
					/>
				</div>
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