'use client';

import React from 'react';
import {
	ChartContainer,
	ChartLegend,
	ChartLegendContent,
} from '@/components/ui/chart';
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';
import styles from './dashboard.module.css';

const getLast7DaysData = () => {
	const data = [];
	const today = new Date();

	for (let i = 6; i >= 0; i--) {
		const date = new Date();
		date.setDate(today.getDate() - i);
    const options = { month: 'short', day: 'numeric' };

		data.push({
			week: date.toLocaleDateString('en-US', options).split("T")[0],
			desktop: Math.floor(Math.random() * 300),
			mobile: Math.floor(Math.random() * 200),
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
	mobile: {
		label: 'Mobile',
		color: '#60a5fa',
	},
};

const Dashboard = () => {
	return (
		<div className={styles.container}>
			<div className={`${styles.div1} ${styles.div}`}>1</div>
			<div className={`${styles.div2} ${styles.div}`}>2</div>
			<div className={`${styles.div3} ${styles.div}`}>3</div>
			<div className={`${styles.div4} ${styles.div}`}>
				{console.log('ChartContainer:', ChartContainer)}
				<ChartContainer
					config={chartConfig}
					className={`${styles.div4} min-h-[50px] w-full`}
				>
					<BarChart accessibilityLayer data={chartData}>
						<CartesianGrid vertical={false} />
						<XAxis
							dataKey='week'
							tickLine={false}
							tickMargin={10}
							axisLine={false}
							// tickFormatter={(value) => value.slice(0, 3)}
						/>
						<ChartLegend content={<ChartLegendContent />} />
						<Bar dataKey='desktop' fill='var(--color-desktop)' radius={4} />
						<Bar dataKey='mobile' fill='var(--color-mobile)' radius={4} />
					</BarChart>
				</ChartContainer>
			</div>
			<div className={`${styles.div5} ${styles.div}`}>5</div>
			<div className={`${styles.div6} ${styles.div}`}>6</div>
			<div className={`${styles.div7} ${styles.div}`}>7</div>
			<div className={`${styles.div8} ${styles.div}`}>8</div>
		</div>
	);
};

export default Dashboard;
