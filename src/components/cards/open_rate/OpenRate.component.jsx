import React from 'react';
import { useTheme } from 'next-themes';
import { Card } from '@/components/ui/card';
import { getLast7DaysData } from '@/Utilities/getLast7DaysData';
import {
	ChartContainer,
	ChartLegend,
	ChartLegendContent,
	ChartTooltip,
	ChartTooltipContent,
} from '@/components/ui/chart';
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';
import styles from './open_rate.module.css';

const {data: chartData, total} = getLast7DaysData();

const chartConfig = {
	desktop: {
		label: 'Desktop',
		color: '#2563eb',
	},
};

const WelcomeEmail = () => {
	const { theme } = useTheme(); // Example using a ThemeProvider

	return (
		<Card className={`${styles.container} card`}>
			<p>Open Rate</p>
			<div className={styles.content_container}>
				<div className={styles.total_count}>
					{total}<span className={styles.total}>Total</span>
				</div>
				<div className={styles.chart_container}>
					<ChartContainer
						config={chartConfig}
						className={`${styles.chart} min-h-[210px] w-full`}
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
							<ChartTooltip
								content={<ChartTooltipContent />}
								className={
									theme === 'light'
										? styles.tooltip
										: `${styles.tooltip} ${styles.dark}`
								}
							/>
							<Bar dataKey='desktop' fill='var(--color-desktop)' radius={4} />
						</BarChart>
					</ChartContainer>
				</div>
			</div>
		</Card>
	);
};

export default WelcomeEmail;
