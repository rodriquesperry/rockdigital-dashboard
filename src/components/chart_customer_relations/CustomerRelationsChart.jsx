import * as React from 'react';
import { Gauge } from '@mui/x-charts/Gauge';
import Card from '@mui/material/Card';

export default function CustomerRelationsChart() {
	return (
		<Card className={styles.card}>
			<h4>Yearly Breakup</h4>
			<Gauge
				value={75}
				startAngle={0}
				endAngle={360}
				innerRadius='80%'
				outerRadius='100%'
				// ...
			/>
		</Card>
	);
}
