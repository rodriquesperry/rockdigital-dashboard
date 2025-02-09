import React from 'react';
import Card from '@mui/material/Card';

import styles from './conversion_rate.module.css';

const conversionRate = () => {
  const getLast7Days = () => {
    const days = [];
    const today = new Date();

    for (let i = 0; i < 7; i++) {
      const date = new Date();
      date.setDate(today.getDate() - i);
      days.push(date.toLocaleDateString());
    }
    return days;
  }

  console.log(getLast7Days());
  

  return (
		<Card className={`${styles.card} card`}>
			<h4 className={`card_title ${styles.title}`}>Page Performance</h4>
			<div className={styles.content}>
					<div className={styles.percentage}>5.6%</div>
          <span>Conversion Rate</span>
			</div>
		</Card>
	);
}

export default conversionRate