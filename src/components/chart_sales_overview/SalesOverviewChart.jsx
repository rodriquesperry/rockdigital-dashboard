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
							data: ['Leads', 'Customers'],
							scaleType: 'band',
						},
					]}
					series={[
						{
							label: 'Key A',
							data: [4, 3],
						},
						{
							label: 'Key B',
							data: [1, 6],
						},
						{
							label: 'Key C',
							data: [2, 5],
						},
					]}
					width={700}
					height={300}
				/>
			</Card>
		</>
	);
}
