'use client';

import React, { useState } from 'react';
import Link from 'next/link';

import { LuLayoutDashboard } from "react-icons/lu";

import styles from './sidebar.module.css';

const Sidebar = () => {
	return (
		<div className={styles.sidebar}>
			<h1 className={styles.logo}>Rock Digital</h1>
			<ul>
				<li className={styles.menu_label}>HOME</li>
				<Link href={'/'}>
					<li className={styles.menu_item}><div className={styles.menu_item_icon}><LuLayoutDashboard size={19} /></div>Dashboard</li>
				</Link>
				<li className={styles.menu_label}>CMS</li>
				<Link href={'/posts'}>
					<li className={styles.menu_item}>Posts</li>
				</Link>
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
