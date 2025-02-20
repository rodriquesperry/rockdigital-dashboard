import React from 'react';
import { Card } from '@/components/ui/card';

import styles from './total_leads.module.css';

const TotalLeads = () => {
	return (
		<Card className={`${styles.container} flex flex-col card`}>
			<p className={`${styles.title} card_title`}>Total Leads</p>
      <div className={styles.total_leads_container}>
        <p className={styles.total_leads_num}>1,298</p>
      </div>
		</Card>
	);
};

export default TotalLeads;
