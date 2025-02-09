import React from 'react';
import CustomerRelationsChart from '@/components/chart_customer_relations/CustomerRelationsChart';
import EmailsOverview from '../welcome_emails_overview/EmailsOverviewChart';
import TotalCountKPI from '@/components/kpi_total_count/TotalCount';
import ConversionRate from '../conversion_rate/ConversionRate.component';

import styles from './dashboard.module.css';
import { green } from '@mui/material/colors';

const Dashboard = () => {
	return (
		<div>
			<div className={styles.card}>
				<div className={styles.top_kpi}>
					<TotalCountKPI title={'Total Leads'} count={1500} />
					<TotalCountKPI title={'Total Customers'} count={800} />
					<TotalCountKPI title={'Monthly Earnings'} count={'$6,820'} />
				</div>
				<div className={styles.dashboard_main}>
					<div className={styles.second_row}>
						<CustomerRelationsChart />
						<div className={styles.second_row_small_container}>
              <ConversionRate  />
						</div>
					</div>
					<EmailsOverview />
					<EmailsOverview />
				</div>
				<div className={styles.top_kpi}></div>
			</div>
		</div>
	);
};

export default Dashboard;
