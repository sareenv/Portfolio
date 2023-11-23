import React from 'react'
import Badge from './Badge';
import { ListGroup, Image } from 'react-bootstrap'
import appStoreButton from '../../Assets/appStoreButton.svg'
import '../../Styles/experience.scss'

/// A utility method which creates a component to show the progress bar for the job description.
const ProgressJobPosition = (props) => {
	
	const appStoreLink  = "https://apps.apple.com/us/app/dayforce/id456073226"

	const handleButtonClick = () => {
		window.location.href = appStoreLink;
	 }

	return (
		<div className="positionContainer">
			<div className='containerBox'>
				<button onClick={handleButtonClick} style={{background: 'none', border: 'none', 
					padding: 0, cursor: 'pointer'}}>
					<Image 
						src={appStoreButton}
						style={{width: '9em', height: '4em'}}
					/>
				</button>
			</div>

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