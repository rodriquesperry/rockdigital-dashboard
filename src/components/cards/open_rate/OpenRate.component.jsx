'use client';

import React from 'react';
import { useTheme } from 'next-themes';
import { TrendingUp } from 'lucide-react';
import {
	CartesianGrid,
	LabelList,
	Line,
	LineChart,
	XAxis,
	Label,
	PolarRadiusAxis,
	RadialBar,
	RadialBarChart,
} from 'recharts';
import { Card } from '@/components/ui/card';
import {
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from '@/components/ui/chart';

import styles from './open_rate.module.css';

const gaugeData = [{ month: 'january', desktop: 1260, mobile: 570 }];
const gaugeConfig = {
	desktop: {
		label: 'Successful Delivered',
		color: '#2563eb',
	},
	mobile: {
		label: 'Mobile',
		color: 'hsl(var(--chart-2))',
	},
};

// const { data: chartData, total } = getLast7DaysData();
const chartData = [
	{ month: 'January', desktop: 186, mobile: 80 },
	{ month: 'February', desktop: 305, mobile: 200 },
	{ month: 'March', desktop: 237, mobile: 120 },
	{ month: 'April', desktop: 73, mobile: 190 },
	{ month: 'May', desktop: 209, mobile: 130 },
	{ month: 'June', desktop: 214, mobile: 140 },
	{ month: 'July', desktop: 214, mobile: 140 },
	{ month: 'August', desktop: 214, mobile: 140 },
	{ month: 'September', desktop: 214, mobile: 140 },
	{ month: 'October', desktop: 214, mobile: 140 },
	{ month: 'November', desktop: 214, mobile: 140 },
	{ month: 'December', desktop: 214, mobile: 140 },
];

const chartConfig = {
	desktop: {
		label: 'Desktop',
		color: 'hsl(var(--chart-1))',
	},
	mobile: {
		label: 'Mobile',
		color: 'hsl(var(--chart-2))',
	},
};

const OpenRate = () => {
	const { theme } = useTheme(); // Example using a ThemeProvider
	const totalVisitors = chartData[0].desktop + chartData[0].mobile;

	return (
		<Card className={`${styles.container} card`}>
			<p>Open Rate</p>
			<div
				className={`${styles.chart_container} flex flex-1 items-center pb-0`}
			>
				<ChartContainer
					config={gaugeConfig}
					className='mx-auto aspect-square w-full max-w-[250px]'
				>
					<RadialBarChart
						data={gaugeData}
						endAngle={180}
						innerRadius={90}
						outerRadius={160}
						className={styles.gauge}
					>
						<ChartTooltip
							cursor={false}
							content={<ChartTooltipContent hideLabel />}
							className={
								theme === 'light'
									? styles.tooltip
									: `${styles.tooltip} ${styles.dark}`
							}
						/>
						<PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
							<Label
								content={({ viewBox }) => {
									if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
										return (
											<text x={viewBox.cx} y={viewBox.cy} textAnchor='middle'>
												<tspan
													x={viewBox.cx}
													y={(viewBox.cy || 0) - 16}
													className='text-2xl font-bold'
													fill='currentColor'
												>
													97.8%
												</tspan>
												<tspan
													x={viewBox.cx}
													y={(viewBox.cy || 0) + 4}
													fill='currentColor'
												>
													Successful Delivered
												</tspan>
											</text>
										);
									}
								}}
							/>
						</PolarRadiusAxis>
						<RadialBar
							dataKey='desktop'
							stackId='a'
							cornerRadius={5}
							fill='var(--color-desktop)'
							className='stroke-transparent stroke-2'
						/>
						<RadialBar
							dataKey='mobile'
							fill='var(--color-mobile)'
							stackId='a'
							cornerRadius={5}
							className='stroke-transparent stroke-2'
						/>
					</RadialBarChart>
				</ChartContainer>
				<div className={styles.line_chart_container}>
					<ChartContainer config={chartConfig} className='w-full h-[250px]'>
						<LineChart
							accessibilityLayer
							data={chartData}
							width={500} // Adjust based on Card size
							height={200} // Matches ChartContainer
							margin={{
								top: 20,
								left: 20,
								right: 20,
								bottom: 0,
							}}
						>
							<CartesianGrid vertical={false} />
							<XAxis
								dataKey='month'
								tickLine={false}
								axisLine={false}
								tickMargin={5}
								tickFormatter={(value) => value.slice(0, 3)}
							/>
							<ChartTooltip
								cursor={false}
								content={<ChartTooltipContent indicator='line' />}
                className={
								theme === 'light'
									? styles.tooltip
									: `${styles.tooltip} ${styles.dark}`
							}
							/>
							<Line
								dataKey='desktop'
								type='natural'
								stroke='var(--color-desktop)'
								strokeWidth={2}
								dot={{
									fill: 'var(--color-desktop)',
								}}
								activeDot={{
									r: 6,
								}}
							>
								<LabelList
									position='top'
									offset={12}
									className='fill-foreground'
									fontSize={12}
								/>
							</Line>
						</LineChart>
					</ChartContainer>
				</div>
			</div>
		</Card>
	);
};

export default OpenRate;
