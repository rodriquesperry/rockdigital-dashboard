import React from 'react';
import { useTheme } from 'next-themes';
import { Card } from '@/components/ui/card';

import styles from './leads_by_source.module.css';


const LeadsBySource = () => {
  const { resolvedTheme } = useTheme();
  
	return (
		<Card className={`${styles.container} flex flex-col card`}>
			<p className='card_title'>Leads By Source</p>
			<div className={resolvedTheme === 'light' ? `${styles.list_container}`:`${styles.dark}`}>
				<p className={styles.item}>Organic</p>
				<p className={styles.item}>244</p>
			</div>
			<div className={resolvedTheme === 'light' ? `${styles.list_container}`:`${styles.dark}`}>
				<p className={styles.item}>Paid Search</p>
				<p className={styles.item}>244</p>
			</div>
			<div className={resolvedTheme === 'light' ? `${styles.list_container}`:`${styles.dark}`}>
				<p className={styles.item}>Referral</p>
				<p className={styles.item}>244</p>
			</div>
			<div className={resolvedTheme === 'light' ? `${styles.list_container}`:`${styles.dark}`}>
				<p className={styles.item}>Display</p>
				<p className={styles.item}>244</p>
			</div>
			<div className={resolvedTheme === 'light' ? `${styles.list_container}`:`${styles.dark}`}>
				<p className={styles.item}>Direct</p>
				<p className={styles.item}>244</p>
			</div>
			<div className={resolvedTheme === 'light' ? `${styles.list_container}`:`${styles.dark}`}>
				<p className={styles.item}>Social</p>
				<p className={styles.item}>244</p>
			</div>
		</Card>
	);
};

export default LeadsBySource;
