import React from 'react'
import Badge from './Badge';
import { ListGroup } from 'react-bootstrap'

import '../../Styles/experience.scss'

/// A utility method which creates a component to show the progress bar for the job description.
const ProgressJobPosition = (props) => {
	
	const appStoreLink  = "https://apps.apple.com/us/app/dayforce/id456073226"

	const handleButtonClick = () => {
		window.location.href = appStoreLink;
	 }

	return (
		<div className="positionContainer">
			
			{props.progress.map((progress) => {
				return (
					<div className='positionContainer'>
						<div className="positionTitle">
							{(() => {
								if (progress !== undefined && progress.isLastPosition) {
									return (
										<div className="activeProgressCircle" />
									)
								} else {
									return (
										<div className="progressCircle" />
									)
								}
							})()}

							

							<div className="titleDescriptionColumn">
								<ListGroup >

									<h5>{progress.title} </h5>
									<div className="projectDescriptionAndStatus">
										<Badge tag={progress.type} />
										<i style={{ color: "gray" }}>{progress.dates} </i>
									</div>

									<ul style={{ textBreak: 'break-all', padding: '0.3rem' }}>
										{progress.desc.map((description) => {
											return <li> {description} </li>
										})}
									</ul>

								</ListGroup>
							</div>

						</div>
						{(() => {
							if (progress.showVerticleLine === true) {
								return (
									<div className='hline' />
								)
							} else {
								return <div />
							}
						})()}
					</div>)
			})}
		</div>
	)
}

export default ProgressJobPosition