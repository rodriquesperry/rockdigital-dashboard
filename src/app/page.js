import CustomerRelationsChart from '@/components/chart_customer_relations/CustomerRelationsChart';
import YearlyBreakupKPI from '@/components/kpi_yearly_breakup/YearlyBreakupKPI';
import Card from '@mui/material/Card';
import Image from 'next/image';

import styles from './page.module.css';

export default function Home() {
	return (
		<div className={styles.page}>
			<div className={styles.card}>
				<CustomerRelationsChart />
				<div className={styles.top_kpi}>
					<YearlyBreakupKPI />
					<YearlyBreakupKPI />
				</div>
			</div>
		</div>
	);
}
