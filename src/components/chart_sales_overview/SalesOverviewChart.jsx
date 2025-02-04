import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import Card from '@mui/material/Card';

import styles from './sales_overview.module.css';

export default function SalesOverview() {
	return (
		<>
			<Card className={styles.card}>
				<h4 className='card_title'>Sales Overview</h4>
				<BarChart
					xAxis={[
						{
							id: 'barCategories',
							data: ['Revenue', 'Customer Acquisition', 'Retention Rate'],
							scaleType: 'band',
						},
					]}
					series={[
						{
							data: [4, 3, 5],
						},
						{ data: [1, 6, 3] },
						{ data: [2, 5, 6] },
					]}
					width={700}
					height={300}
				/>
			</Card>
		</>
	);
}
