import React from 'react';
import { Card } from '@/components/ui/card';
import { LuCircleArrowUp } from 'react-icons/lu';
import { LuCircleArrowDown } from "react-icons/lu";

import styles from './total_leads.module.css';

const TotalLeads = () => {
  const percentage = 1.7;

	return (
		<Card className={`${styles.container} flex flex-col card`}>
			<p className={`${styles.title} card_title`}>Total Leads</p>
			<div className={styles.total_leads_container}>
				<p className={styles.total_leads_num}>1,298</p>
				<span>
					{percentage > 0 ? <LuCircleArrowUp size={30} className={styles.green} /> : <LuCircleArrowDown size={30} className={styles.red}/>
        } &nbsp;4.7% from mth
				</span>
			</div>
		</Card>
	);
};

export default TotalLeads;

// ***line 13*** percentage > 0.1 ? arrow green up : arrow red down
