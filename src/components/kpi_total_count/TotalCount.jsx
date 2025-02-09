'use client';

import * as React from 'react';
import Card from '@mui/material/Card';

import { BsArrowUpLeftCircle } from 'react-icons/bs';

import styles from './total_count.module.css';

export default function TotalCountKPI({ title, count, color }) {
	return (
		<Card className={`${styles.card} card`}>
			<h4 className={`card_title ${styles.total_count__title}`}>{title}</h4>
			<div className={styles.total_count_content}>
					<h3 style={{color: color}}>{count}</h3>
			</div>
		</Card>
	);
}
