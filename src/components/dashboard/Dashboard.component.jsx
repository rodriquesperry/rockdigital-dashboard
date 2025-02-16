'use client';

import React from 'react';
import styles from './dashboard.module.css';
import LeadsChart from '@/components/cards/leads_chart/LeadsChart.component';
import WelcomeEmail from '@/components/cards/welcome_emails_gauge/WelcomeEmails.component';
import OpenRate from '@/components/cards/open_rate/OpenRate.component';


const Dashboard = () => {
	return (
		<div className={styles.container}>
			<div className={`${styles.div1} ${styles.div}`}>1</div>
			<div className={`${styles.div2} ${styles.div}`}>2</div>
			<div className={`${styles.div3} ${styles.div}`}>3</div>
			<div className={`${styles.div4} ${styles.div}`}>
				<LeadsChart />
			</div>
			<div className={`${styles.div5} ${styles.div}`}>
				<WelcomeEmail />
			</div>
			<div className={`${styles.div6} ${styles.div}`}></div>
			<div className={`${styles.div7} ${styles.div}`}><OpenRate  /></div>
			<div className={`${styles.div8} ${styles.div}`}>8</div>
		</div>
	);
};

export default Dashboard;
