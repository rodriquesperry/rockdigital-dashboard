import React from 'react';
import { Card } from '@/components/ui/card';
import { LuCircleArrowUp } from 'react-icons/lu';
import { LuCircleArrowDown } from "react-icons/lu";

import styles from './total_customers.module.css';

const TotalCustomers = () => {
  const percentage = 0;

	return (
		<Card className={`${styles.container} flex flex-col card`}>
			<p className={`${styles.title} card_title`}>Total Customers</p>
			<div className={styles.total_customers_container}>
				<p className={styles.total_customers_num}>898</p>
				<span>
					{percentage > 0 ? <LuCircleArrowUp className={styles.green} /> : <LuCircleArrowDown className={styles.red}/>
        } &nbsp;4.7% from mth
				</span>
			</div>
		</Card>
	);
};

export default TotalCustomers;
