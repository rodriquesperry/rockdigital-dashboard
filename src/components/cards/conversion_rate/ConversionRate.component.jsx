'use client';

import React from 'react';
import { useTheme } from 'next-themes';
import { getLast7DaysData } from '@/Utilities/getLast7DaysData';
import { Card } from '@/components/ui/card';
import { TrendingUp } from 'lucide-react';
import { CartesianGrid, Line, LineChart, XAxis } from 'recharts';
import {
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from '@/components/ui/chart';
import styles from './conversion_rate.module.css';

const { data: chartData } = getLast7DaysData();

const chartConfig = {
	desktop: {
		label: 'Desktop',
		color: 'hsl(var(--chart-1))',
	},
};

const ConversionRate = () => {
	const theme = useTheme();
	const date = new Date();
	let month = date.toLocaleDateString('default', { month: 'long' });

	return (
		<Card className={`${styles.container} flex flex-col card`}>
			<p className="card_title">Conversion Rate</p>
			<div className={styles.conversion_outline}>
				5.6<span className={styles.percentage_sign}>%</span>
			</div>
			<p className={styles.month_header}>{month} (Last 7 Days)</p>
			<div className={styles.chart_container}>
				<ChartContainer config={chartConfig} className='w-full h-[200px]'>
					<LineChart
						accessibilityLayer
						data={chartData}
						margin={{
							left: 12,
							right: 12,
						}}
					>
						<CartesianGrid vertical={false} />
						<XAxis
							dataKey='week'
							tickLine={false}
							axisLine={false}
							tickMargin={8}
							tickFormatter={(value) => value.slice(3, 6)}
						/>
						<ChartTooltip
							cursor={false}
							content={<ChartTooltipContent hideLabel />}
							className={
								theme === 'light'
									? styles.tooltip
									: `${styles.tooltip} ${styles.dark}`
							}
						/>
						<Line
							dataKey='desktop'
							type='linear'
							stroke='var(--color-desktop)'
							strokeWidth={2}
							dot={false}
						/>
					</LineChart>
				</ChartContainer>
			</div>
		</Card>
	);
};

export default ConversionRate;
