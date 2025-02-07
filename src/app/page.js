import CustomerRelationsChart from '@/components/chart_customer_relations/CustomerRelationsChart';
import YearlyBreakupKPI from '@/components/kpi_total_count/TotalCount';
import Dashboard from '@/components/dashboard/Dashboard.component';
import Card from '@mui/material/Card';
import Image from 'next/image';

import styles from './page.module.css';

export default function Home() {
	return (
		<div>
			<Dashboard />
		</div>
	);
}
