'use client';

import React from 'react';
import styles from './dashboard.module.css';
import LeadsChart from '../cards/seven_day_leads_chart/LeadsChart.component';



const Dashboard = () => {
	return (
		<div className={styles.container}>
			<div className={`${styles.div1} ${styles.div}`}>1</div>
			<div className={`${styles.div2} ${styles.div}`}>2</div>
			<div className={`${styles.div3} ${styles.div}`}>3</div>
			<div className={`${styles.div4} ${styles.div}`}>
				<LeadsChart  />
			</div>
			<div className={`${styles.div5} ${styles.div}`}>5</div>
			<div className={`${styles.div6} ${styles.div}`}>6</div>
			<div className={`${styles.div7} ${styles.div}`}>7</div>
			<div className={`${styles.div8} ${styles.div}`}>8</div>
		</div>
	);
};

export default Dashboard;
