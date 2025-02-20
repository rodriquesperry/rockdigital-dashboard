import React from 'react';
import { Card } from '@/components/ui/card';

import styles from './total_customers.module.css';

const TotalCustomers = () => {
	return (
		<Card className={`${styles.container} flex flex-col card`}>
			<p className={`${styles.title} card_title`}>Total Customers</p>
			<div className={styles.total_customers_container}>
				<p className={styles.total_customers_num}>898</p>
			</div>
		</Card>
	);
};

export default TotalCustomers;
