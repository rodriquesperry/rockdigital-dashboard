"use client"

import React, { useEffect, useState } from 'react';
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
import styles from './leads_chart.module.css';

const chartConfig = {
	desktop: {
		label: 'Desktop',
		color: '#2563eb',
	},
};

const LeadsChart = () => {
	const { theme } = useTheme(); // Example using a ThemeProvider
  const [chartData, setChartData] = useState([]);
  const [total, setTotal] = useState('...loading');

  useEffect(() => {
      const getData = async () => {
        const { data, total } = await getLast7DaysData();
        setChartData(data || []);
        setTotal(total || '...Loading');
      }
      getData();
    }, [])

	return (
		<Card className={`${styles.container} card`}>
			<p className="card_title">Leads Generated (Last 7 Days)</p>
			<div className={styles.content_container}>
				<div className={styles.total_count}>
					{total}
					<span className={styles.total}>Total</span>
				</div>
				<div className={`${styles.chart_container}`}>
					<ChartContainer
						config={chartConfig}
						className={`${styles.chart} min-h-[250px] w-full`}
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

export default LeadsChart;
