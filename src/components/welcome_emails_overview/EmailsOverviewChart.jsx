'use client';

import * as React from 'react';
import Card from '@mui/material/Card';
import {
	GaugeContainer,
	GaugeReferenceArc,
	GaugeValueArc,
	useGaugeState,
} from '@mui/x-charts';

import styles from './welcome_emails_overview.module.css';

function GaugePointer() {
	const { valueAngle, outerRadius, cx, cy } = useGaugeState();

	if (valueAngle === null) {
		// No value to display
		return null;
	}

	const target = {
		x: cx + outerRadius * Math.sin(valueAngle),
		y: cy - outerRadius * Math.cos(valueAngle),
	};
	return (
		<g>
			<circle cx={cx} cy={cy} r={5} fill='red' />
			<path
				d={`M ${cx} ${cy} L ${target.x} ${target.y}`}
				stroke='red'
				strokeWidth={3}
			/>
		</g>
	);
}

export default function EmailsOverview() {
	return (
		<>
			<Card className={styles.card}>
				<h4 className='card_title'>Welcome Emails Overview</h4>
				<div className={styles.card_main}>
					<div className={styles.card_div} id='welcome_email_label'>1,461<span>sent</span></div>
					<div className={styles.gauge}>
          <div>Successful Delivered</div>
						<GaugeContainer
              className={styles.gauge_container}
							width={200}
							height={200}
							startAngle={-110}
							endAngle={110}
							value={30}
						>
							<GaugeReferenceArc />
							<GaugeValueArc />
							<GaugePointer />
						</GaugeContainer>
						<div className={styles.percentage}>30%</div>
					</div>
					<div className={styles.gauge}>
          <div>Click Rate</div>
						<GaugeContainer
              className={styles.gauge_container}
							width={200}
							height={200}
							startAngle={-110}
							endAngle={110}
							value={30}
						>
							<GaugeReferenceArc />
							<GaugeValueArc />
							<GaugePointer />
						</GaugeContainer>
						<div className={styles.percentage}>30%</div>
					</div>
				</div>
			</Card>
		</>
	);
}
