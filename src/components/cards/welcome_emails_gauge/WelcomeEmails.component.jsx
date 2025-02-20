'use client';

import React from 'react';
import { useTheme } from 'next-themes';
import {
	Label,
	PolarRadiusAxis,
	RadialBar,
	RadialBarChart,
} from 'recharts';
import { Card, CardContent } from '@/components/ui/card';
import {
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from '@/components/ui/chart';

import styles from './welcome_emails.module.css';

const chartData = [{ month: 'january', desktop: 1260, mobile: 570 }];

const chartConfig = {
	desktop: {
		label: 'Successful Delivered',
		color: '#2563eb',
	},
	mobile: {
		label: 'Mobile',
		color: 'hsl(var(--chart-2))',
	},
};

const WelcomeEmail = () => {
	const { theme } = useTheme(); // Example using a ThemeProvider
	const totalVisitors = chartData[0].desktop + chartData[0].mobile;

	return (
		<Card className={`${styles.container} flex flex-col card`}>
			<p className='card_title'>Welcome Emails</p>
			<div className={styles.content_container}>
				<div className={styles.total_count}>
					{totalVisitors.toLocaleString()}
					<span className={styles.total}>Sent</span>
				</div>
				<CardContent>
					<div
						className={`${styles.chart_container}`}
					>
						<ChartContainer
							config={chartConfig}
							className={`${styles.chart} mx-auto aspect-square w-full max-w-[250px]`}
						>
								<RadialBarChart
									data={chartData}
									endAngle={180}
									innerRadius={90}
									outerRadius={140}
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
									<PolarRadiusAxis
										tick={false}
										tickLine={false}
										axisLine={false}
									>
										<Label
											content={({ viewBox }) => {
												if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
													return (
														<text
															x={viewBox.cx}
															y={viewBox.cy}
															textAnchor='middle'
														>
															<tspan
																x={viewBox.cx}
																y={(viewBox.cy || 0) - 16}
																className='text-2xl font-bold'
																fill='currentColor'
															>
																97.8
															</tspan>
															<tspan fill='currentColor'>%</tspan>
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
						<ChartContainer
							config={chartConfig}
							className={`${styles.chart} mx-auto aspect-square w-full max-w-[250px]`}
						>
								<RadialBarChart
									data={chartData}
									endAngle={180}
									innerRadius={90}
									outerRadius={140}
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
									<PolarRadiusAxis
										tick={false}
										tickLine={false}
										axisLine={false}
									>
										<Label
											content={({ viewBox }) => {
												if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
													return (
														<text
															x={viewBox.cx}
															y={viewBox.cy}
															textAnchor='middle'
														>
															<tspan
																x={viewBox.cx}
																y={(viewBox.cy || 0) - 16}
																className='text-2xl font-bold'
																fill='currentColor'
															>
																3.3
															</tspan>
															<tspan fill='currentColor'>%</tspan>
															<tspan
																x={viewBox.cx}
																y={(viewBox.cy || 0) + 4}
																fill='currentColor'
															>
																Click Rate
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
					</div>
				</CardContent>
			</div>
		</Card>
	);
};

export default WelcomeEmail;
