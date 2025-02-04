"use client";

import * as React from 'react';
import { Gauge } from '@mui/x-charts/Gauge';
import Card from '@mui/material/Card';
import CardContent from '@geist-ui/core/esm/card/card-content';
import CardHeader from '@mui/material/CardHeader';

import styles from './yearly_breakup.module.css';

export default function YearlyBreakupKPI() {
	return (
		<Card className={styles.card}>
    <h4 className='card_title'>Yearly Breakup</h4>
			<Gauge
				value={75}
				startAngle={0}
				endAngle={360}
				innerRadius='80%'
				outerRadius='100%'
				height={100}
				className={styles.ybGauge}
			/>
		</Card>
	);
}
