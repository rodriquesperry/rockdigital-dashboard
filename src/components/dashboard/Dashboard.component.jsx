'use client';

import React from 'react';
import TotalLeads from '../cards/total_leads_kpi/TotalLeads.component';
import TotalCustomers from '../cards/total_customers_kpi/TotalCustomers.component';
import ConversionRate from '../cards/conversion_rate/ConversionRate.component';
import LeadsChart from '@/components/cards/leads_chart/LeadsChart.component';
import WelcomeEmail from '@/components/cards/welcome_emails_gauge/WelcomeEmails.component';
import AbandonedForm from '../cards/abandoned_form/AbandonedForm.component';
import OpenRate from '@/components/cards/open_rate/OpenRate.component';
import LeadsBySource from '../cards/leads_by_source/LeadsBySource.component';

import styles from './dashboard.module.css';

const Dashboard = () => {
	return (
		<div className={styles.container}>
			<div className={`${styles.div1} ${styles.div}`}><TotalLeads  /></div>
			<div className={`${styles.div2} ${styles.div}`}><TotalCustomers  /></div>
			<div className={`${styles.div3} ${styles.div}`}><ConversionRate  /></div>
			<div className={`${styles.div4} ${styles.div}`}>
				<LeadsChart />
			</div>
			<div className={`${styles.div5} ${styles.div}`}>
				<WelcomeEmail />
			</div>
			<div className={`${styles.div6} ${styles.div}`}><AbandonedForm  /></div>
			<div className={`${styles.div7} ${styles.div}`}><OpenRate  /></div>
			<div className={`${styles.div8} ${styles.div}`}><LeadsBySource  /></div>
		</div>
	);
};

export default Dashboard;
