'use client';

import React from 'react';
import { useTheme } from 'next-themes';
import { getLast7DaysData } from '@/Utilities/getLast7DaysData';
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';
import { TrendingUp } from 'lucide-react';
import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from 'recharts';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import {
	ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from '@/components/ui/chart';

import styles from './welcome_emails.module.css';

// const { data: chartData, total } = getLast7DaysData();
const chartData = [{ month: "january", desktop: 1260, mobile: 570 }]


const chartConfig = {
	desktop: {
		label: 'Successful Delivered',
		color: '#2563eb',
	},
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
};

const WelcomeEmail = () => {
	const { theme } = useTheme(); // Example using a ThemeProvider
	const totalVisitors = chartData[0].desktop + chartData[0].mobile;

  console.log(totalVisitors);
  

	return (
		<Card className={`${styles.container} flex flex-col`}>
			<p>Welcome Emails</p>
			<div className={styles.content_container}>
				<div className={styles.total_count}>
					{totalVisitors.toLocaleString()}
					<span className={styles.total}>Sent</span>
				</div>
				<div className={`${styles.chart_container} flex flex-1 items-center pb-0`}>
					<ChartContainer
						config={chartConfig}
						className='mx-auto aspect-square w-full max-w-[250px]'
					>
						<RadialBarChart
							data={chartData}
							endAngle={180}
							innerRadius={90}
							outerRadius={160}
						>
							<ChartTooltip
								cursor={false}
								content={<ChartTooltipContent hideLabel />}
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
														className='fill-foreground text-2xl font-bold'
													>
														{totalVisitors.toLocaleString()}
													</tspan>
													<tspan
														x={viewBox.cx}
														y={(viewBox.cy || 0) + 4}
														className='fill-muted-foreground'
													>
														Visitors
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
						className='mx-auto aspect-square w-full max-w-[250px]'
					>
						<RadialBarChart
							data={chartData}
							endAngle={180}
							innerRadius={90}
							outerRadius={160}
						>
							<ChartTooltip
								cursor={false}
								content={<ChartTooltipContent hideLabel />}
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
														className='fill-foreground text-2xl font-bold'
													>
														{totalVisitors.toLocaleString()}
													</tspan>
													<tspan
														x={viewBox.cx}
														y={(viewBox.cy || 0) + 4}
														className='fill-muted-foreground'
													>
														Visitors
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
			</div>
		</Card>
	);
};

export default WelcomeEmail;
