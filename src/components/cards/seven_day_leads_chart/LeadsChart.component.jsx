import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
	ChartContainer,
	ChartLegend,
	ChartLegendContent,
} from '@/components/ui/chart';
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';

import styles from './seven_day_leads_chart.module.css';

const getLast7DaysData = () => {
	const data = [];
	const today = new Date();

	for (let i = 6; i >= 0; i--) {
		const date = new Date();
		date.setDate(today.getDate() - i);
		const options = { month: 'short', day: 'numeric' };

		data.push({
			week: date.toLocaleDateString('en-US', options).split('T')[0],
			desktop: Math.floor(Math.random() * 300),
			// mobile: Math.floor(Math.random() * 200),
		});
	}
	console.log(data);
	return data;
};

const chartData = getLast7DaysData();

const chartConfig = {
	desktop: {
		label: 'Desktop',
		color: '#2563eb',
	},
};

const LeadsChart = () => {
	return (
		<Card className={styles.container}>
			<p>Leads Generated (Last 7 Days)</p>
			<div className={styles.content_container}>
				<div className={styles.total_count}>1,497<span className={styles.total}>Total</span></div>
        
				<div className={styles.chart_container}>
					<ChartContainer
						config={chartConfig}
						className={`${styles.chart} min-h-[50px] w-full`}
					>
						<BarChart accessibilityLayer data={chartData}>
							<CartesianGrid vertical={false} />
							<XAxis
								dataKey='week'
								tickLine={false}
								tickMargin={10}
								axisLine={true}
							/>
							<ChartLegend content={<ChartLegendContent />} />
							<Bar dataKey='desktop' fill='var(--color-desktop)' radius={4} />
							{/* <Bar dataKey='mobile' fill='var(--color-mobile)' radius={4} /> */}
						</BarChart>
					</ChartContainer>
				</div>
			</div>
		</Card>
	);
};

export default LeadsChart;
