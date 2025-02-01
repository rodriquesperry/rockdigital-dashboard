'use client'

import React, { useState } from 'react';
import styles from './sidebar.module.css';

const Sidebar = () => {
	return (
		<div className={styles.sidebar}>
			<h1 className={styles.logo}>Rock Digital</h1>
			<ul>
				<li className={styles.menu_label}>HOME</li>
				<li className={styles.menu_item}>Dashboard</li>
				<li className={styles.menu_label}>CMS</li>
				<li className={styles.menu_item}>Posts</li>
				<li className={styles.menu_item}>Contacts</li>
        <li className={styles.menu_label}>CMS</li>
				<li className={styles.menu_item}>Posts</li>
				<li className={styles.menu_item}>Contacts</li>
        <li className={styles.menu_label}>CMS</li>
				<li className={styles.menu_item}>Posts</li>
				<li className={styles.menu_item}>Contacts</li>
      
			</ul>
		</div>
	);
};

export default Sidebar;
