import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import Card from '@mui/material/Card';

import styles from './customer_relations.module.css';

export default function CustomerRelationsChart() {
	return (
		<>
			<Card className={`${styles.card} card`}>
				<h4 className='card_title'>Leads and Customers Overview</h4>
				<BarChart
					xAxis={[
						{
							id: 'barCategories',
							data: ['Leads', 'Customers'],
							scaleType: 'band',
							categoryGapRatio: 0.6,
							barGapRatio: 0.2,
						},
					]}
					series={[
						{
							label: 'Today',
							data: [24, 23],
						},
						{
							label: '30 days',
							data: [11, 6],
						},
						{
							label: '1 year',
							data: [13, 8],
						},
					]}
					width={735}
					height={230}
				/>
			</Card>
		</>
	);
}
