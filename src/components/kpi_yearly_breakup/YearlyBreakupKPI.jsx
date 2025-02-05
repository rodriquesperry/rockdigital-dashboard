'use client';

import * as React from 'react';
import { Gauge } from '@mui/x-charts/Gauge';
import Card from '@mui/material/Card';

import { BsArrowUpLeftCircle } from 'react-icons/bs';

import styles from './yearly_breakup.module.css';

export default function YearlyBreakupKPI() {
	return (
		<Card className={styles.card}>
			<h4 className='card_title'>Yearly Breakup</h4>
			<div className={styles.ybcard_content}>
				<div className={styles.icon_container}>
          <h3>36,358</h3>
					<BsArrowUpLeftCircle className={styles.ybcard_icon_success} />
				</div>
				<Gauge
					value={75}
					startAngle={0}
					endAngle={360}
					innerRadius='80%'
					outerRadius='100%'
					height={100}
					className={styles.ybcard_gauge}
				/>
			</div>
		</Card>
	);
}
