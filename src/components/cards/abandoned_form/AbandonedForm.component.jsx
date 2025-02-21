'use client';

import React, { useState, useEffect } from 'react';
import {
	Bar,
	BarChart,
	CartesianGrid,
	ResponsiveContainer,
	LabelList,
	XAxis,
	YAxis,
} from 'recharts';
import { Card } from '@/components/ui/card';
import {
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from '@/components/ui/chart';

import styles from './abandoned_form.module.css';

const chartData = [
	{ month: 'January', desktop: 186, mobile: 80 },
	{ month: 'February', desktop: 305, mobile: 200 },
	{ month: 'March', desktop: 237, mobile: 120 },
	{ month: 'April', desktop: 73, mobile: 190 },
	{ month: 'May', desktop: 209, mobile: 130 },
	{ month: 'June', desktop: 214, mobile: 140 },
];

const chartConfig = {
	desktop: {
		label: 'Desktop',
		color: 'hsl(var(--chart-2))',
	},
	label: {
		color: 'hsl(var(--background))',
	},
};

const AbandonedForm = () => {
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	if (!isClient) return null;

	return (
		<Card className={`${styles.container} flex flex-col card`}>
			<p className={`${styles.title} card_title`}>Abandoned Form</p>
			<div className={styles.chart_container}>
				<ResponsiveContainer width='100%' height='95%'>
					<ChartContainer config={chartConfig}>
						<BarChart
							accessibilityLayer
							data={chartData}
							layout='vertical'
							margin={{
								right: 16,
							}}
						>
							<CartesianGrid horizontal={false} />
							<YAxis
								dataKey='month'
								type='category'
								tickLine={false}
								tickMargin={5}
								axisLine={false}
								tickFormatter={(value) => value.slice(0, 3)}
								hide
							/>
							<XAxis dataKey='desktop' type='number' hide />
							<ChartTooltip
								cursor={false}
								content={<ChartTooltipContent indicator='line' />}
							/>
							<Bar
								dataKey='desktop'
								layout='vertical'
								fill='var(--color-desktop)'
								radius={4}
							>
								<LabelList
									dataKey='month'
									position='insideLeft'
									offset={8}
									className='fill-[--color-label]'
									fontSize={12}
								/>
								<LabelList
									dataKey='desktop'
									position='right'
									offset={8}
									className='fill-foreground'
									fontSize={12}
								/>
							</Bar>
						</BarChart>
					</ChartContainer>
				</ResponsiveContainer>
			</div>
		</Card>
	);
};

export default AbandonedForm;
