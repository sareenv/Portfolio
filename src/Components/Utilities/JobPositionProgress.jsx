import React from 'react'
import Badge from './Badge';

import '../../Styles/experience.scss'

/// A utility method which creates a component to show the progress bar for the job description.
const ProgressJobPosition = (props) => {

	return (
		<div style={{padding: 0}}>
			
			{props.progress.map((progress, index) => {
				return (
					<div key={index} style={{position: 'relative'}}>
						<div style={{
							display: 'flex',
							alignItems: 'flex-start',
							paddingBottom: progress.showVerticleLine ? '2rem' : '0'
						}}>
							{/* Circle indicator */}
							<div style={{
								minWidth: '50px',
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								paddingTop: '0.25rem'
							}}>
								{(() => {
									if (progress !== undefined && progress.isLastPosition) {
										return (
											<div style={{
												width: '20px',
												height: '20px',
												borderRadius: '50%',
												backgroundColor: '#00b4d8',
												border: '4px solid #e0f7fa',
												boxShadow: '0 2px 8px rgba(0,180,216,0.4)'
											}} />
										)
									} else {
										return (
											<div style={{
												width: '16px',
												height: '16px',
												borderRadius: '50%',
												backgroundColor: '#e0f7fa',
												border: '3px solid white',
												boxShadow: '0 1px 4px rgba(0,0,0,0.1)'
											}} />
										)
									}
								})()}
								
								{/* Vertical line */}
								{(() => {
									if (progress.showVerticleLine === true) {
										return (
											<div style={{
												width: '3px',
												height: '100%',
												backgroundColor: '#e0f7fa',
												marginTop: '0.5rem',
												position: 'absolute',
												top: '28px',
												left: '23px',
												bottom: 0
											}} />
										)
									}
								})()}
							</div>
							
							{/* Content */}
							<div style={{
								flex: 1,
								paddingLeft: '1.5rem'
							}}>
								<h5 style={{
									fontWeight: 700,
									color: '#003049',
									fontSize: '1.3rem',
									marginBottom: '0.75rem'
								}}>{progress.title}</h5>
								
								<div style={{
									display: 'flex',
									alignItems: 'center',
									gap: '1rem',
									marginBottom: '1rem',
									flexWrap: 'wrap'
								}}>
									<Badge tag={progress.type} />
									<span style={{
										color: '#666',
										fontSize: '0.95rem',
										fontStyle: 'italic'
									}}>{progress.dates}</span>
								</div>

								<ul style={{
									paddingLeft: '1.5rem',
									margin: 0,
									color: '#666',
									fontSize: '1rem',
									lineHeight: '1.7'
								}}>
									{progress.desc.map((description, descIndex) => {
										return (
											<li key={descIndex} style={{
												marginBottom: '0.75rem'
											}}>{description}</li>
										)
									})}
								</ul>
							</div>

						</div>
					</div>)
			})}
		</div>
	)
}

export default ProgressJobPosition